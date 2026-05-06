#!/bin/bash

# Bachelor Ghor - PostgreSQL Setup Helper Script

echo "🐘 PostgreSQL Setup Helper"
echo "=========================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo -e "${RED}❌ PostgreSQL is not installed${NC}"
    echo ""
    echo -e "${YELLOW}Please install PostgreSQL first:${NC}"
    echo -e "${BLUE}Linux (Ubuntu/Debian):${NC}"
    echo "  sudo apt update && sudo apt install postgresql postgresql-contrib"
    echo ""
    echo -e "${BLUE}macOS (Homebrew):${NC}"
    echo "  brew install postgresql && brew services start postgresql"
    echo ""
    echo -e "${BLUE}Windows:${NC}"
    echo "  Download from https://www.postgresql.org/download/windows/"
    exit 1
fi

echo -e "${GREEN}✓ PostgreSQL found ($(psql --version))${NC}"
echo ""

# Check if PostgreSQL is running
if ! pg_isready -h localhost > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  PostgreSQL server is not running${NC}"
    echo -e "${YELLOW}Starting PostgreSQL...${NC}"
    
    # Try to start PostgreSQL (Linux)
    if command -v systemctl &> /dev/null; then
        sudo systemctl start postgresql
        sleep 2
    fi
fi

# Check again
if pg_isready -h localhost > /dev/null 2>&1; then
    echo -e "${GREEN}✓ PostgreSQL server is running${NC}"
else
    echo -e "${RED}❌ Could not start PostgreSQL${NC}"
    exit 1
fi

echo ""
echo "=== Database Creation ==="
echo ""

# Database configuration
DB_NAME="bachelor_ghor"
DB_USER="bachelor_ghor_user"
DB_PASSWORD="bachelor_ghor_password"
DB_HOST="localhost"

echo -e "${YELLOW}Database Configuration:${NC}"
echo "  Database Name: $DB_NAME"
echo "  Database User: $DB_USER"
echo "  Password: $DB_PASSWORD"
echo "  Host: $DB_HOST"
echo ""

read -p "Do you want to use these settings? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter database name (default: $DB_NAME): " input_db
    DB_NAME=${input_db:-$DB_NAME}
    
    read -p "Enter database user (default: $DB_USER): " input_user
    DB_USER=${input_user:-$DB_USER}
    
    read -sp "Enter password (default: $DB_PASSWORD): " input_pass
    echo
    DB_PASSWORD=${input_pass:-$DB_PASSWORD}
fi

echo ""
echo -e "${YELLOW}Creating database and user...${NC}"

# Create database and user
sudo -u postgres psql << EOF
-- Create database
CREATE DATABASE $DB_NAME;

-- Create user
CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';

-- Set configuration
ALTER ROLE $DB_USER SET client_encoding TO 'utf8';
ALTER ROLE $DB_USER SET default_transaction_isolation TO 'read committed';
ALTER ROLE $DB_USER SET default_transaction_deferrable TO on;
ALTER ROLE $DB_USER SET timezone TO 'UTC';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;

-- Display success message
\echo ''
\echo '✓ Database created successfully!'
\echo ''
EOF

echo ""
echo -e "${GREEN}✓ Database setup complete!${NC}"
echo ""

# Create or update .env file
echo -e "${YELLOW}Updating .env file...${NC}"

ENV_FILE="backend/.env"

if [ -f "$ENV_FILE" ]; then
    # Backup existing .env
    cp "$ENV_FILE" "$ENV_FILE.backup"
    echo -e "${GREEN}✓ Backed up existing .env to .env.backup${NC}"
fi

# Update or create .env
cat > "$ENV_FILE" << EOF
DEBUG=True
SECRET_KEY=django-insecure-test-secret-key-change-in-production

# Database Configuration
DB_ENGINE=django.db.backends.postgresql
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASSWORD
DB_HOST=$DB_HOST
DB_PORT=5432

# JWT Configuration
JWT_SECRET_KEY=your-jwt-secret-key-change-this
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# Email Configuration (Optional)
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Frontend URL
FRONTEND_URL=http://localhost:3000
EOF

echo -e "${GREEN}✓ .env file created/updated${NC}"
echo ""

# Next steps
echo -e "${BLUE}=== Next Steps ===${NC}"
echo ""
echo "1. Go to backend directory:"
echo -e "   ${YELLOW}cd backend${NC}"
echo ""
echo "2. Activate virtual environment:"
echo -e "   ${YELLOW}source venv/bin/activate  # Linux/Mac${NC}"
echo -e "   ${YELLOW}venv\\Scripts\\activate     # Windows${NC}"
echo ""
echo "3. Run migrations:"
echo -e "   ${YELLOW}python manage.py migrate${NC}"
echo ""
echo "4. Create superuser:"
echo -e "   ${YELLOW}python manage.py createsuperuser${NC}"
echo ""
echo "5. Start development server:"
echo -e "   ${YELLOW}python manage.py runserver${NC}"
echo ""
echo -e "${GREEN}Happy Coding! 🚀${NC}"
