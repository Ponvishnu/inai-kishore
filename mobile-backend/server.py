from fastapi import FastAPI, HTTPException, Depends, File, UploadFile, Header
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime, timedelta
import os
import uuid
import random
import hashlib
import boto3
from botocore.exceptions import ClientError
import secrets
from passlib.context import CryptContext

app = FastAPI(title="Inai Mobile API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
MONGO_URL = "mongodb+srv://inaiapp25_db_user:R5dysnMWz2BwyNPA@cluster0.u0sgyyy.mongodb.net/?appName=Cluster0"
client = AsyncIOMotorClient(MONGO_URL)
db = client["Inai"]

# AWS S3 Configuration
s3_client = boto3.client(
    's3',
    aws_access_key_id='DO801UQ4KYX2ABVYJT4L',
    aws_secret_access_key='AWHAZ0GjOBFZY1jtK4vJle+6y7yzna2mmmZWypZ0b0k',
    region_name='ap-southeast-1'  # Singapore
)
S3_BUCKET = 'inai-blob-storage'

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Models
class EmailVerifyRequest(BaseModel):
    email: EmailStr

class OTPVerifyRequest(BaseModel):
    email: EmailStr
    otp: str

class MobileVerifyRequest(BaseModel):
    email: EmailStr
    mobile: str
    country_code: str

class ProfileCreateRequest(BaseModel):
    email: EmailStr
    username: str
    dob: str  # Format: YYYY-MM-DD
    profile_photo_url: Optional[str] = None

class PartnerConnectRequest(BaseModel):
    user_id: str
    partner_code: str

class CountdownUpdateRequest(BaseModel):
    user_id: str
    countdown_type: str  # birthday, anniversary, lovers_day, custom
    custom_date: Optional[str] = None
    custom_title: Optional[str] = None

class TodoCreateRequest(BaseModel):
    user_id: str
    title: str
    description: Optional[str] = None
    date: str  # YYYY-MM-DD
    time: Optional[str] = None
    remind_before_days: int = 1
    emoji: Optional[str] = "🌸"

# Helper Functions
def generate_otp():
    return str(random.randint(10000, 99999))

def generate_partner_code():
    return ''.join(random.choices('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', k=8))

def encrypt_data(data: str) -> str:
    """Simple encryption for sensitive data"""
    return hashlib.sha256(data.encode()).hexdigest()

async def send_otp_email(email: str, otp: str):
    """Placeholder for email sending - will implement when email service provided"""
    # TODO: Integrate with email service
    print(f"OTP {otp} sent to {email}")
    return True

# API Endpoints

@app.get("/")
async def root():
    return {"message": "Inai Mobile API", "status": "running"}

# 1. Email Verification
@app.post("/api/auth/verify-email")
async def verify_email(request: EmailVerifyRequest):
    try:
        # Check if user already exists
        existing_user = await db.users.find_one({"email": request.email})
        
        # Generate OTP
        otp = generate_otp()
        
        # Store OTP in database (expires in 10 minutes)
        await db.otps.update_one(
            {"email": request.email},
            {
                "$set": {
                    "otp": otp,
                    "created_at": datetime.utcnow(),
                    "expires_at": datetime.utcnow() + timedelta(minutes=10)
                }
            },
            upsert=True
        )
        
        # Send OTP via email
        await send_otp_email(request.email, otp)
        
        return {
            "success": True,
            "message": "OTP sent to your email",
            "otp": otp  # ONLY FOR TESTING - Remove in production
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 2. OTP Verification
@app.post("/api/auth/verify-otp")
async def verify_otp(request: OTPVerifyRequest):
    try:
        # Find OTP
        otp_record = await db.otps.find_one({"email": request.email})
        
        if not otp_record:
            raise HTTPException(status_code=404, detail="OTP not found")
        
        # Check if OTP is expired
        if datetime.utcnow() > otp_record["expires_at"]:
            raise HTTPException(status_code=400, detail="OTP expired")
        
        # Verify OTP
        if otp_record["otp"] != request.otp:
            raise HTTPException(status_code=400, detail="Invalid OTP")
        
        # Delete OTP after successful verification
        await db.otps.delete_one({"email": request.email})
        
        return {
            "success": True,
            "message": "Email verified successfully"
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 3. Mobile Number Verification
@app.post("/api/auth/verify-mobile")
async def verify_mobile(request: MobileVerifyRequest):
    try:
        # Update or create user with mobile number
        await db.users.update_one(
            {"email": request.email},
            {
                "$set": {
                    "mobile": request.mobile,
                    "country_code": request.country_code,
                    "mobile_verified_at": datetime.utcnow()
                }
            },
            upsert=True
        )
        
        return {
            "success": True,
            "message": "Mobile number verified"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 4. Profile Creation
@app.post("/api/auth/create-profile")
async def create_profile(request: ProfileCreateRequest):
    try:
        user_id = str(uuid.uuid4())
        partner_code = generate_partner_code()
        
        # Create user profile
        user_data = {
            "user_id": user_id,
            "email": request.email,
            "username": request.username,
            "dob": request.dob,
            "profile_photo_url": request.profile_photo_url,
            "partner_code": partner_code,
            "partner_id": None,
            "created_at": datetime.utcnow(),
            "is_profile_complete": True
        }
        
        await db.users.update_one(
            {"email": request.email},
            {"$set": user_data},
            upsert=True
        )
        
        return {
            "success": True,
            "message": "Profile created successfully",
            "user_id": user_id,
            "partner_code": partner_code
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 5. Upload Profile Photo to S3
@app.post("/api/upload/profile-photo")
async def upload_profile_photo(file: UploadFile = File(...), user_id: str = None):
    try:
        # Generate unique filename
        file_extension = file.filename.split('.')[-1]
        filename = f"profiles/{user_id}_{uuid.uuid4()}.{file_extension}"
        
        # Upload to S3
        s3_client.upload_fileobj(
            file.file,
            S3_BUCKET,
            filename,
            ExtraArgs={'ContentType': file.content_type}
        )
        
        # Generate S3 URL
        photo_url = f"https://{S3_BUCKET}.s3.ap-southeast-1.amazonaws.com/{filename}"
        
        return {
            "success": True,
            "photo_url": photo_url
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 6. Connect Partner
@app.post("/api/partner/connect")
async def connect_partner(request: PartnerConnectRequest):
    try:
        # Find partner by code
        partner = await db.users.find_one({"partner_code": request.partner_code})
        
        if not partner:
            raise HTTPException(status_code=404, detail="Invalid partner code")
        
        # Check if partner already connected
        if partner.get("partner_id"):
            raise HTTPException(status_code=400, detail="Partner already connected")
        
        # Update both users
        await db.users.update_one(
            {"user_id": request.user_id},
            {"$set": {"partner_id": partner["user_id"], "connected_at": datetime.utcnow()}}
        )
        
        await db.users.update_one(
            {"user_id": partner["user_id"]},
            {"$set": {"partner_id": request.user_id, "connected_at": datetime.utcnow()}}
        )
        
        return {
            "success": True,
            "message": "Partner connected successfully",
            "partner": {
                "user_id": partner["user_id"],
                "username": partner["username"],
                "profile_photo_url": partner.get("profile_photo_url"),
                "dob": partner["dob"]
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 7. Get User Profile
@app.get("/api/user/{user_id}")
async def get_user_profile(user_id: str):
    try:
        user = await db.users.find_one({"user_id": user_id}, {"_id": 0})
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Get partner info if connected
        partner_info = None
        if user.get("partner_id"):
            partner = await db.users.find_one(
                {"user_id": user["partner_id"]},
                {"_id": 0, "username": 1, "profile_photo_url": 1, "dob": 1}
            )
            partner_info = partner
        
        return {
            "success": True,
            "user": user,
            "partner": partner_info
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 8. Get Countdown (Auto-calculates nearest date)
@app.get("/api/countdown/{user_id}")
async def get_countdown(user_id: str):
    try:
        user = await db.users.find_one({"user_id": user_id})
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Get partner
        partner = None
        if user.get("partner_id"):
            partner = await db.users.find_one({"user_id": user["partner_id"]})
        
        # Calculate nearest important date
        today = datetime.utcnow().date()
        nearest_event = None
        min_days = float('inf')
        
        # Partner's birthday
        if partner and partner.get("dob"):
            partner_dob = datetime.strptime(partner["dob"], "%Y-%m-%d").date()
            next_birthday = partner_dob.replace(year=today.year)
            if next_birthday < today:
                next_birthday = next_birthday.replace(year=today.year + 1)
            days_until = (next_birthday - today).days
            
            if days_until < min_days:
                min_days = days_until
                nearest_event = {
                    "type": "birthday",
                    "title": f"{partner.get('username', 'Partner')}'s Birthday",
                    "date": next_birthday.isoformat(),
                    "days_until": days_until
                }
        
        # Check custom events
        custom_events = await db.events.find({"user_id": user_id}).to_list(100)
        for event in custom_events:
            event_date = datetime.strptime(event["date"], "%Y-%m-%d").date()
            if event_date >= today:
                days_until = (event_date - today).days
                if days_until < min_days:
                    min_days = days_until
                    nearest_event = {
                        "type": event.get("type", "custom"),
                        "title": event["title"],
                        "date": event_date.isoformat(),
                        "days_until": days_until
                    }
        
        return {
            "success": True,
            "countdown": nearest_event
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 9. Create Todo
@app.post("/api/todos/create")
async def create_todo(request: TodoCreateRequest):
    try:
        todo_id = str(uuid.uuid4())
        
        todo_data = {
            "todo_id": todo_id,
            "user_id": request.user_id,
            "title": request.title,
            "description": request.description,
            "date": request.date,
            "time": request.time,
            "emoji": request.emoji,
            "remind_before_days": request.remind_before_days,
            "completed": False,
            "created_at": datetime.utcnow()
        }
        
        await db.todos.insert_one(todo_data)
        
        return {
            "success": True,
            "message": "Todo created successfully",
            "todo_id": todo_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 10. Get All Todos
@app.get("/api/todos/{user_id}")
async def get_todos(user_id: str):
    try:
        todos = await db.todos.find(
            {"user_id": user_id},
            {"_id": 0}
        ).sort("date", 1).to_list(100)
        
        return {
            "success": True,
            "todos": todos
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 11. Update Countdown Event
@app.post("/api/events/update-countdown")
async def update_countdown(request: CountdownUpdateRequest):
    try:
        event_data = {
            "user_id": request.user_id,
            "type": request.countdown_type,
            "title": request.custom_title or request.countdown_type.replace('_', ' ').title(),
            "date": request.custom_date,
            "created_at": datetime.utcnow()
        }
        
        await db.events.insert_one(event_data)
        
        return {
            "success": True,
            "message": "Countdown event updated"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
