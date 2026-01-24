#!/bin/bash

# INAI Backend - AWS EC2 Deployment Script
# This script deploys your backend to EC2: 18.61.109.100

echo "🚀 Deploying INAI Backend to AWS EC2..."

EC2_IP="18.61.109.100"
PEM_FILE="/tmp/inai-ec2.pem"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Check if PEM file exists
if [ ! -f "$PEM_FILE" ]; then
    echo -e "${RED}Error: PEM file not found at $PEM_FILE${NC}"
    exit 1
fi

echo -e "${BLUE}Step 1: Copying files to EC2...${NC}"
scp -i $PEM_FILE -r /app/mobile-backend ubuntu@$EC2_IP:~/
echo -e "${GREEN}✓ Files copied${NC}"

echo -e "${BLUE}Step 2: Installing dependencies on EC2...${NC}"
ssh -i $PEM_FILE ubuntu@$EC2_IP << 'ENDSSH'
    # Update system
    sudo apt update
    sudo apt install -y python3-pip python3-venv nginx

    # Setup Python environment
    cd ~/mobile-backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

    # Create systemd service
    sudo tee /etc/systemd/system/inai-api.service > /dev/null <<EOF
[Unit]
Description=Inai Mobile API
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/mobile-backend
Environment="PATH=/home/ubuntu/mobile-backend/venv/bin"
ExecStart=/home/ubuntu/mobile-backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8000

[Install]
WantedBy=multi-user.target
EOF

    # Configure Nginx
    sudo tee /etc/nginx/sites-available/inai-api > /dev/null <<'EOF'
server {
    listen 80;
    server_name 18.61.109.100;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
EOF

    # Enable and start services
    sudo ln -sf /etc/nginx/sites-available/inai-api /etc/nginx/sites-enabled/
    sudo systemctl daemon-reload
    sudo systemctl enable inai-api
    sudo systemctl start inai-api
    sudo systemctl restart nginx

    echo "✅ Backend deployed and running!"
ENDSSH

echo -e "${GREEN}✓ Deployment complete!${NC}"

echo ""
echo "🎉 Your backend is now live at: http://$EC2_IP"
echo ""
echo "📊 Check status with:"
echo "ssh -i $PEM_FILE ubuntu@$EC2_IP"
echo "sudo systemctl status inai-api"
echo ""
echo "🔍 View logs with:"
echo "ssh -i $PEM_FILE ubuntu@$EC2_IP"
echo "sudo journalctl -u inai-api -f"
