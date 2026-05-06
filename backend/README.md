# 🚀 Bachelor Ghor - Django Backend

এটি Bachelor Ghor প্রজেক্টের Django REST Framework ব্যাকএন্ড।

## ✨ বৈশিষ্ট্য

- JWT Authentication
- User Management
- Member Management
- Room Management
- Meal Tracking
- Expense Management
- Rent Management
- Utility Tracking
- Payment Integration
- Notifications
- Chore Management
- Analytics & Dashboard

## 🛠️ প্রযুক্তি স্ট্যাক

- **Framework**: Django 4.2
- **REST API**: Django REST Framework 3.14
- **Database**: PostgreSQL
- **Authentication**: JWT (Simple JWT)
- **Task Queue**: Celery (Optional)

## 📋 প্রয়োজনীয়তা

- Python 3.9+
- PostgreSQL 12+
- pip

## 🚀 দ্রুত শুরু

### ১. Virtual Environment সেটআপ করুন

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# বা
venv\Scripts\activate  # Windows
```

### २. ডিপেন্ডেন্সি ইনস্টল করুন

```bash
pip install -r requirements.txt
```

### ३. পরিবেশ ভেরিয়েবল সেটআপ করুন

```bash
cp .env.example .env
```

`.env` ফাইলটি এডিট করুন এবং আপনার সেটিংস যোগ করুন।

### ४. ডাটাবেস মাইগ্রেশন

```bash
python manage.py migrate
```

### ५. Superuser তৈরি করুন

```bash
python manage.py createsuperuser
```

### ६. ডেভেলপমেন্ট সার্ভার চালু করুন

```bash
python manage.py runserver
```

সার্ভার এখন `http://localhost:8000` এ চলছে।

## 📚 প্রধান Endpoints

### Authentication
- `POST /api/auth/register/` - নতুন ব্যবহারকারী রেজিস্ট্রেশন
- `POST /api/auth/login/` - লগইন এবং টোকেন পান
- `POST /api/auth/logout/` - লগআউট

### Members
- `GET /api/members/` - সব সদস্য দেখুন
- `POST /api/members/` - নতুন সদস্য যোগ করুন
- `GET /api/members/{id}/` - সদস্যের বিস্তারিত

### Meals
- `GET /api/meals/entries/` - সব খাবার এন্ট্রি
- `POST /api/meals/entries/` - নতুন খাবার যোগ করুন
- `GET /api/meals/entries/monthly-report/` - মাসিক রিপোর্ট

আরও endpoints এর জন্য দেখুন: [API Documentation](../docs/API.md)

## 🧪 টেস্টিং

### pytest চালান

```bash
pytest
```

### কভারেজ রিপোর্ট সহ

```bash
pytest --cov=apps
```

## 📁 প্রজেক্ট স্ট্রাকচার

```
backend/
├── core/                       # Django settings
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── apps/                       # Django Apps
│   ├── authentication/        # User Auth
│   ├── members/               # Member Management
│   ├── rooms/                 # Room Management
│   ├── meals/                 # Meal Management
│   ├── expenses/              # Expense Management
│   ├── rent/                  # Rent Management
│   ├── utilities/             # Utility Management
│   ├── payments/              # Payment Integration
│   ├── notifications/         # Notifications
│   ├── chores/                # Chore Management
│   ├── analytics/             # Analytics
│   └── admin/                 # Admin Features
├── utils/                     # Utility Functions
├── middleware/                # Custom Middleware
├── tests/                     # Test Cases
├── manage.py
├── requirements.txt
├── pytest.ini
└── conftest.py
```

## 🔧 কনফিগারেশন

### ডাটাবেস

`.env` ফাইলে PostgreSQL সেটিংস যোগ করুন:

```env
DB_ENGINE=django.db.backends.postgresql
DB_NAME=bachelor_ghor
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432
```

### Email

Gmail SMTP সেটআপ করুন:

```env
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

### JWT

```env
JWT_SECRET_KEY=your-jwt-secret
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24
```

## 📖 ডকুমেন্টেশন

- [API Documentation](../docs/API.md)
- [Database Schema](../docs/DATABASE_SCHEMA.md)
- [Setup Guide](../docs/SETUP.md)
- [Roadmap](../docs/ROADMAP.md)

## 🐛 সমস্যা সমাধান

### CORS ত্রুটি

`.env` এ সঠিক ফ্রন্টএন্ড URL যোগ করুন:

```env
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

### মাইগ্রেশন ত্রুটি

```bash
python manage.py makemigrations
python manage.py migrate
```

### ডাটাবেস সংযোগ ত্রুটি

PostgreSQL চলছে কিনা যাচাই করুন এবং `.env` সেটিংস সঠিক কিনা দেখুন।

## 🚀 প্রডাকশন ডিপ্লয়মেন্ট

### Render এ ডিপ্লয় করুন

1. Render একাউন্ট তৈরি করুন
२. GitHub রিপোজিটরি সংযুক্ত করুন
३. Environment ভেরিয়েবল সেট করুন
४. ডিপ্লয় করুন

ডিটেইলস: [Deployment Guide](../docs/DEPLOYMENT.md)

## 📞 সহায়তা

যেকোনো সমস্যার জন্য ইস্যু তৈরি করুন।

## 📄 লাইসেন্স

MIT License

---

Happy Coding! 🚀
