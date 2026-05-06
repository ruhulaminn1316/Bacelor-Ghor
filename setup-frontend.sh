#!/bin/bash

# Bachelor Ghor - Frontend Setup Script

echo "🚀 Bachelor Ghor Frontend Setup Script"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js found ($(node -v))${NC}"

# Navigate to frontend directory
cd frontend || exit

# Create .env file
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}📝 Creating .env file...${NC}"
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Please edit .env with your settings${NC}"
fi

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Build Tailwind CSS
echo -e "${YELLOW}🎨 Building Tailwind CSS...${NC}"

echo -e "${GREEN}✅ Frontend setup complete!${NC}"
echo ""
echo -e "${GREEN}To start the development server, run:${NC}"
echo -e "${YELLOW}cd frontend${NC}"
echo -e "${YELLOW}npm run dev${NC}"
