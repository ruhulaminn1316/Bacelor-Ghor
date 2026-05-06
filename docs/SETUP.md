# 🚀 সেটআপ গাইড

## পূর্বশর্ত

- Python 3.9+ 
- Node.js 16+
- PostgreSQL 12+
- Redis (Optional, for Celery)

---

## ✅ ব্যাকএন্ড সেটআপ (Django)

### ১. Virtual Environment তৈরি করুন

```bash
cd backend
python -m venv venv
```

**Windows এর জন্য:**
```bash
venv\Scripts\activate
```

**Linux/Mac এর জন্য:**
```bash
source venv/bin/activate
```

### ২. Dependencies ইনস্টল করুন

```bash
pip install -r requirements.txt
```

### ३. Environment Variables সেট করুন

```bash
cp .env.example .env
```

`.env` ফাইলটি এডিট করুন এবং নিচের মান গুলি পরিবর্তন করুন:

```env
DEBUG=True
SECRET_KEY=your-secret-key-here-change-in-production
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DB_ENGINE=django.db.backends.postgresql
DB_NAME=bachelor_ghor
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432

# Email
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# JWT
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### ४. PostgreSQL ডাটাবেস তৈরি করুন

```bash
# PostgreSQL তে লগইন করুন
psql -U postgres

# ডাটাবেস তৈরি করুন
CREATE DATABASE bachelor_ghor;
CREATE USER bachelor_ghor_user WITH PASSWORD 'your-password';
ALTER ROLE bachelor_ghor_user SET client_encoding TO 'utf8';
ALTER ROLE bachelor_ghor_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE bachelor_ghor_user SET default_transaction_deferrable TO on;
ALTER ROLE bachelor_ghor_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE bachelor_ghor TO bachelor_ghor_user;
\q
```

### ५. ডাটাবেস মাইগ্রেশন চালান

```bash
python manage.py makemigrations
python manage.py migrate
```

### ६. Superuser তৈরি করুন

```bash
python manage.py createsuperuser
```

### ७. ডেভেলপমেন্ট সার্ভার চালান

```bash
python manage.py runserver
```

Backend এখন `http://localhost:8000` এ চলছে।

Admin panel: `http://localhost:8000/admin/`

---

## ✅ ফ্রন্টএন্ড সেটআップ (React + Vite)

### ১. ফ্রন্টএন্ড ডিরেক্টরিতে যান

```bash
cd frontend
```

### २. Node Modules ইনস্টল করুন

```bash
npm install
```

### ३. Environment Variables সেট করুন

```bash
cp .env.example .env
```

`.env` ফাইলে সেটিংস:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Bachelor Ghor
```

### ४. ডেভেলপমেন্ট সার্ভার চালান

```bash
npm run dev
```

Frontend এখন `http://localhost:3000` এ চলছে।

---

## 🔧 প্রডাকশন ডিপ্লয়মেন্ট

### ব্যাকএন্ড (Render এ)

১. Render অ্যাকাউন্ট তৈরি করুন
२. নতুন Web Service তৈরি করুন
३. GitHub রিপোজিটরি সংযুক্ত করুন
४. Environment ভেরিয়েবল সেট করুন
५. ডিপ্লয়মেন্ট করুন

### ফ্রন্টএন্ড (Vercel এ)

१. Vercel অ্যাকাউন্ট তৈরি করুন
२. GitHub রিপোজিটরি ইম্পোর্ট করুন
३. বিল্ড সেটিংস: `npm run build`
४. Output Directory: `dist`
५. ডিপ্লয়মেন্ট করুন

---

## 🧪 টেস্টিং

### ব্যাকএন্ড টেস্ট চালান

```bash
python manage.py test
# বা
pytest
```

### ফ্রন্টএন্ড টেস্ট চালান

```bash
npm test
```

---

## 📝 সাধারণ কমান্ড

### Django
```bash
# নতুন App তৈরি করুন
python manage.py startapp app_name

# মাইগ্রেশন তৈরি করুন
python manage.py makemigrations

# মাইগ্রেশন চালান
python manage.py migrate

# Shell খুলুন
python manage.py shell

# Static ফাইল সংগ্রহ করুন
python manage.py collectstatic
```

### React
```bash
# বিল্ড করুন
npm run build

# Lint চেক করুন
npm run lint

# Format করুন
npm run format

# Preview করুন
npm run preview
```

---

## 🐛 সমস্যা সমাধান

### ডাটাবেস সংযোগ ত্রুটি
- PostgreSQL সার্ভার চলছে কিনা যাচাই করুন
- `.env` এ সঠিক ডাটাবেস শংসাপত্র যাচাই করুন

### CORS ত্রুটি
- `CORS_ALLOWED_ORIGINS` এ সঠিক ফ্রন্টএন্ড URL যাচাই করুন

### আমদানি ত্রুটি
- Virtual environment সক্রিয় কিনা যাচাই করুন
- প্যাকেজ পুনরায় ইনস্টল করুন: `pip install -r requirements.txt`

---

## 📞 সহায়তা

যে কোনো সমস্যার জন্য ইস্যু তৈরি করুন বা আমাদের সাথে যোগাযোগ করুন।

Happy Coding! 🚀
