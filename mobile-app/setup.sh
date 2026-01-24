#!/bin/bash

# INAI Mobile App - Quick Setup Script
# Run this in your next session to continue development

echo "🚀 Starting INAI Mobile App Setup..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Creating React Native Project...${NC}"
npx react-native init InaiApp
cd InaiApp

echo -e "${GREEN}✓ Project created${NC}"

echo -e "${BLUE}Step 2: Installing Dependencies...${NC}"
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install axios
npm install react-native-image-picker
npm install @react-native-community/picker
npm install react-native-linear-gradient
npm install @react-native-async-storage/async-storage
npm install react-native-push-notification
npm install react-native-country-picker-modal

echo -e "${GREEN}✓ Dependencies installed${NC}"

echo -e "${BLUE}Step 3: Creating Project Structure...${NC}"
mkdir -p src/screens
mkdir -p src/components
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/navigation

echo -e "${GREEN}✓ Structure created${NC}"

echo -e "${BLUE}Step 4: API Configuration...${NC}"
cat > src/services/api.js << 'EOF'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://18.61.109.100';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth APIs
export const verifyEmail = (email) => api.post('/api/auth/verify-email', { email });
export const verifyOTP = (email, otp) => api.post('/api/auth/verify-otp', { email, otp });
export const verifyMobile = (email, mobile, country_code) => 
  api.post('/api/auth/verify-mobile', { email, mobile, country_code });
export const createProfile = (data) => api.post('/api/auth/create-profile', data);
export const uploadPhoto = (formData) => api.post('/api/upload/profile-photo', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

// Partner APIs
export const connectPartner = (user_id, partner_code) => 
  api.post('/api/partner/connect', { user_id, partner_code });
export const getUserProfile = (user_id) => api.get(`/api/user/${user_id}`);

// Countdown & Events
export const getCountdown = (user_id) => api.get(`/api/countdown/${user_id}`);
export const updateCountdown = (data) => api.post('/api/events/update-countdown', data);

// Todos
export const createTodo = (data) => api.post('/api/todos/create', data);
export const getTodos = (user_id) => api.get(`/api/todos/${user_id}`);

export default api;
EOF

echo -e "${GREEN}✓ API configured${NC}"

echo -e "${BLUE}Step 5: Color Theme Setup...${NC}"
cat > src/utils/colors.js << 'EOF'
export const COLORS = {
  // Purple gradient background
  bgPurpleDark: '#1B0729',
  bgPurpleLight: '#3D1755',
  
  // Gold colors
  goldPrimary: '#FFC300',
  goldSecondary: '#FF9934',
  
  // Text colors
  white: '#FFFFFF',
  textSecondary: '#AEAEAE',
  
  // Glass morphism
  glass: 'rgba(255, 255, 255, 0.08)',
  glassGold: 'rgba(255, 195, 0, 0.15)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
  glassGoldBorder: 'rgba(255, 195, 0, 0.4)',
};

export const GRADIENTS = {
  purple: ['#1B0729', '#3D1755'],
  gold: ['#FFC300', '#FF9934'],
};
EOF

echo -e "${GREEN}✓ Theme configured${NC}"

echo ""
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo "📱 Next Steps:"
echo "1. Start coding screens in src/screens/"
echo "2. Follow the order in MOBILE_APP_CONTINUATION_GUIDE.md"
echo "3. Deploy backend to EC2 (see guide)"
echo "4. Test complete flow"
echo ""
echo "🚀 Happy Coding!"
