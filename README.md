# Bachelor Ghor - Room Management System

একটি সম্পূর্ণ **Bachelor House Management System** যা রুমে থাকা সদস্যদের জন্য খাবার, খরচ, ভাড়া এবং ইউটিলিটি ম্যানেজমেন্টের জন্য তৈরি।

## 🚀 প্রযুক্তি স্ট্যাক

### Backend
- **Framework**: Django + Django REST Framework
- **Database**: PostgreSQL
- **Authentication**: JWT (Simple JWT)
- **Task Queue**: Celery with Redis
- **API Documentation**: DRF Spectacular

### Frontend
- **Library**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Charting**: Chart.js

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: Heroku PostgreSQL / Render

## 📁 প্রজেক্ট স্ট্রাকচার

```
Bachelor Ghor/
├── backend/                    # Django Backend
│   ├── core/                   # Django Settings
│   ├── apps/                   # Django Apps
│   │   ├── authentication/    # User Authentication
│   │   ├── members/           # Member Management
│   │   ├── rooms/             # Room Management
│   │   ├── meals/             # Meal Management
│   │   ├── expenses/          # Expense/Bazar Management
│   │   ├── rent/              # Rent Management
│   │   ├── utilities/         # Utility Bills
│   │   ├── payments/          # Payment Processing
│   │   ├── notifications/     # Notifications
│   │   ├── chores/            # Chore/Duty Management
│   │   ├── analytics/         # Dashboard & Analytics
│   │   └── admin/             # Admin Features
│   ├── utils/                 # Utility Functions
│   ├── middleware/            # Custom Middleware
│   ├── static/                # Static Files
│   ├── media/                 # User Uploads
│   ├── manage.py
│   └── requirements.txt
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable Components
│   │   ├── pages/             # Page Components
│   │   ├── hooks/             # Custom Hooks
│   │   ├── context/           # Context API
│   │   ├── services/          # API Services
│   │   ├── utils/             # Utility Functions
│   │   ├── styles/            # Global Styles
│   │   └── assets/            # Images, Icons
│   ├── public/                # Static Assets
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── docs/                       # Documentation
    ├── API.md
    ├── DATABASE_SCHEMA.md
    └── SETUP.md
```

## ✨ প্রধান ফিচার

### 👤 Authentication & User System
- User Registration & Login
- Email Verification
- JWT Authentication
- Profile Management
- Role-based Access Control (Admin/User)

### 👥 Member & Room Management
- Member Registration
- Room Assignment
- Bed/Seat Assignment
- Member List & Contact

### 🍛 Meal Management
- Daily Meal Entry (Breakfast/Lunch/Dinner)
- Guest Meal Tracking
- Meal Calendar & History
- Meal Rate Calculation
- Meal Statistics

### 🛒 Expense Management
- Daily Bazar Entry
- Item-wise Expense Tracking
- Receipt Upload & OCR
- Expense Categories
- Monthly Summary

### 🏠 Rent Management
- Monthly Rent Entry
- Per-person Rent Calculation
- Payment Tracking
- Rent History & Due Date

### 💡 Utility Management
- Electricity, Gas, Water, Internet Bills
- Maintenance & Cleaning Costs
- Shared Cost Calculation
- Utility History & Analytics

### 💰 Finance & Balance System
- Add Money/Payment
- Balance Calculation
- Payment History
- Financial Analytics

### 💳 Payment Integration
- bKash Integration
- Nagad Integration
- Rocket Integration
- Payment Verification

### 📊 Dashboard & Analytics
- Real-time Dashboard
- Expense Charts & Graphs
- Member Statistics
- Top Contributors
- Leaderboard

### 🔔 Notifications
- Rent Due Reminder
- Utility Due Alert
- Payment Confirmation
- Low Balance Alert

---

## 🛠️ সেটআপ গাইড

### Backend Setup

```bash
# ১. Virtual Environment তৈরি করুন
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# or
venv\Scripts\activate  # Windows

# ২. Dependencies ইনস্টল করুন
pip install -r requirements.txt

# ৩. .env ফাইল তৈরি করুন
cp .env.example .env
# .env এ ডাটাবেস এবং অন্যান্য সেটিংস এডিট করুন

# ৪. ডাটাবেস মাইগ্রেশন
python manage.py migrate

# ৫. Superuser তৈরি করুন
python manage.py createsuperuser

# ৬. সার্ভার চালান
python manage.py runserver
```

### Frontend Setup

```bash
# ১. Frontend ডিরেক্টরিতে যান
cd frontend

# ২. Dependencies ইনস্টল করুন
npm install

# ৩. .env ফাইল তৈরি করুন
cp .env.example .env

# ৪. ডেভেলপমেন্ট সার্ভার চালান
npm run dev
```

---

## 🔌 API এন্ডপয়েন্ট (সংক্ষিপ্ত)

### Authentication
- `POST /api/auth/register` - রেজিস্ট্রেশন
- `POST /api/auth/login` - লগইন
- `POST /api/auth/logout` - লগআউট
- `POST /api/auth/refresh-token` - টোকেন রিফ্রেশ

### Members
- `GET /api/members/` - সব সদস্যদের তালিকা
- `POST /api/members/` - নতুন সদস্য যোগ করুন
- `GET /api/members/{id}/` - সদস্যের বিস্তারিত

### Meals
- `GET /api/meals/` - সব খাবার
- `POST /api/meals/` - খাবার এন্ট্রি যোগ করুন
- `GET /api/meals/monthly-report/` - মাসিক রিপোর্ট

### Expenses
- `GET /api/expenses/` - সব খরচ
- `POST /api/expenses/` - খরচ এন্ট্রি যোগ করুন
- `GET /api/expenses/monthly-summary/` - মাসিক সামারি

### Dashboard
- `GET /api/dashboard/` - ড্যাশবোর্ড ডেটা

---

## 📊 ডাটাবেস স্কিমা

প্রধান টেবিল সম্পর্ক:

```
CustomUser (1) ──→ (1) Member
Member (1) ──→ (many) MealEntry
Member (1) ──→ (many) BazarEntry
Member (1) ──→ (many) RentPayment
Member (1) ──→ (many) Payment
```

বিস্তারিত ডকুমেন্টেশনের জন্য `docs/DATABASE_SCHEMA.md` দেখুন।

---

## 📝 লাইসেন্স

এই প্রজেক্ট MIT লাইসেন্সের অধীন।

## 👨‍💻 ডেভেলপমেন্ট টিম

আপনার নাম এবং অবদানকারীদের তালিকা এখানে যোগ করুন।

---

**Happy Coding! 🚀**
