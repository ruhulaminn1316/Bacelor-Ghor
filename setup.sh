#!/bin/bash

# Bachelor Ghor - Backend Setup Script

echo "🚀 Bachelor Ghor Backend Setup Script"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}❌ Python 3 is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Python 3 found${NC}"

# Navigate to backend directory
cd backend || exit

# Create virtual environment
echo -e "${YELLOW}📦 Creating virtual environment...${NC}"
python3 -m venv venv
source venv/bin/activate

# Upgrade pip
echo -e "${YELLOW}📦 Upgrading pip...${NC}"
pip install --upgrade pip

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
pip install -r requirements.txt

# Create .env file
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}📝 Creating .env file...${NC}"
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Please edit .env with your settings${NC}"
fi

# Run migrations
echo -e "${YELLOW}🗄️  Running migrations...${NC}"
python manage.py migrate

# Create superuser
echo -e "${YELLOW}👤 Creating superuser...${NC}"
python manage.py createsuperuser

# Collect static files
echo -e "${YELLOW}📁 Collecting static files...${NC}"
python manage.py collectstatic --noinput

echo -e "${GREEN}✅ Backend setup complete!${NC}"
echo ""
echo -e "${GREEN}To start the development server, run:${NC}"
echo -e "${YELLOW}cd backend${NC}"
echo -e "${YELLOW}source venv/bin/activate${NC}"
echo -e "${YELLOW}python manage.py runserver${NC}"
