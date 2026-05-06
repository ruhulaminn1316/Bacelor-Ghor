# PostgreSQL সেটআপ এবং কনফিগারেশন গাইড

## Linux (Ubuntu/Debian) এ PostgreSQL ইনস্টল করুন

```bash
# Package লিস্ট আপডেট করুন
sudo apt update

# PostgreSQL ইনস্টল করুন
sudo apt install postgresql postgresql-contrib

# PostgreSQL সার্ভিস শুরু করুন
sudo systemctl start postgresql

# সার্ভিসকে অটোস্টার্ট করতে সক্ষম করুন
sudo systemctl enable postgresql

# PostgreSQL এখন চলছে কিনা যাচাই করুন
sudo systemctl status postgresql
```

---

## macOS এ PostgreSQL ইনস্টল করুন (Homebrew ব্যবহার করে)

```bash
# Homebrew আপডেট করুন
brew update

# PostgreSQL ইনস্টল করুন
brew install postgresql

# PostgreSQL সার্ভিস শুরু করুন
brew services start postgresql

# স্ট্যাটাস চেক করুন
brew services list
```

---

## Windows এ PostgreSQL ইনস্টল করুন

১. [PostgreSQL অফিসিয়াল ওয়েবসাইট](https://www.postgresql.org/download/windows/) থেকে ইনস্টলার ডাউনলোড করুন
२. ইনস্টলার চালান এবং সেটআপ সম্পূর্ণ করুন
३. ডিফল্ট পোর্ট ৫৪३२ রাখুন
४. সুপারইউজার পাসওয়ার্ড সেট করুন (মনে রাখুন!)
५. Environment Variable যোগ করুন

---

## Django এর জন্য PostgreSQL কনফিগার করুন

### ১. psycopg2 ড্রাইভার ইনস্টল করুন

psycopg2 Django থেকে PostgreSQL এ সংযোগ স্থাপনের জন্য প্রয়োজনীয়। এটি ইতিমধ্যে `requirements.txt` তে রয়েছে।

যদি ম্যানুয়ালি ইনস্টল করতে হয়:

```bash
pip install psycopg2-binary
```

### २. ডাটাবেস এবং ইউজার তৈরি করুন

```bash
# PostgreSQL command-line tool খোলুন
sudo -u postgres psql
# বা Windows এ: psql -U postgres
```

একবার psql প্রম্পট পেলে, নিচের কমান্ডগুলি চালান:

```sql
-- ডাটাবেস তৈরি করুন
CREATE DATABASE bachelor_ghor;

-- ইউজার তৈরি করুন
CREATE USER bachelor_ghor_user WITH PASSWORD 'your-secure-password';

-- ইউজারের কনফিগারেশন সেট করুন
ALTER ROLE bachelor_ghor_user SET client_encoding TO 'utf8';
ALTER ROLE bachelor_ghor_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE bachelor_ghor_user SET default_transaction_deferrable TO on;
ALTER ROLE bachelor_ghor_user SET timezone TO 'UTC';

-- সব প্রিভিলেজ দিন
GRANT ALL PRIVILEGES ON DATABASE bachelor_ghor TO bachelor_ghor_user;

-- psql থেকে বের হন
\q
```

---

## Django সেটিংস কনফিগার করুন

### `.env` ফাইল আপডেট করুন

```bash
cd backend
cp .env.example .env
```

`backend/.env` এ নিচের সেটিংস যোগ করুন:

```env
DEBUG=True
SECRET_KEY=your-secret-key-here

# Database Configuration
DB_ENGINE=django.db.backends.postgresql
DB_NAME=bachelor_ghor
DB_USER=bachelor_ghor_user
DB_PASSWORD=your-secure-password
DB_HOST=localhost
DB_PORT=5432

# JWT Configuration
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# Email Configuration (Gmail SMTP)
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

**গুরুত্বপূর্ণ:** `.env` ফাইলটি `.gitignore` তে রয়েছে এবং গিটে কমিট হবে না।

---

## ডাটাবেস মাইগ্রেশন চালান

### ১. Virtual Environment সক্রিয় করুন

```bash
cd backend
source venv/bin/activate  # Linux/Mac
# বা
venv\Scripts\activate  # Windows
```

### २. মাইগ্রেশন তৈরি করুন

```bash
python manage.py makemigrations
```

এটি সব models এর জন্য মাইগ্রেশন ফাইল তৈরি করে।

### ३. মাইগ্রেশন চালান

```bash
python manage.py migrate
```

এটি ডাটাবেসে সব টেবিল তৈরি করে।

### ४. Superuser তৈরি করুন

```bash
python manage.py createsuperuser
```

প্রম্পট অনুযায়ী ইনফরমেশন এন্টার করুন:

```
Username: admin
Email: admin@example.com
Password: (পাসওয়ার্ড এন্টার করুন)
Password (again): (আবার এন্টার করুন)
```

---

## ডাটাবেস সংযোগ যাচাই করুন

### PostgreSQL এ সরাসরি সংযোগ করুন

```bash
psql -U bachelor_ghor_user -d bachelor_ghor -h localhost
```

যদি কানেকশন সফল হয়, আপনি প্রম্পট পাবেন:

```
bachelor_ghor=>
```

টেবিলগুলি দেখতে:

```sql
\dt
\q
```

### Django Shell থেকে যাচাই করুন

```bash
python manage.py shell
```

Python prompt এ:

```python
from django.db import connection

# ডাটাবেস সংযোগ পরীক্ষা করুন
with connection.cursor() as cursor:
    cursor.execute("SELECT 1")
    print("✓ Database connected!")

# Django ORM চেষ্টা করুন
from apps.authentication.models import CustomUser
users = CustomUser.objects.all()
print(f"✓ Total users: {users.count()}")

exit()
```

---

## ডাটাবেস ব্যাকআপ নেওয়া

### ব্যাকআপ তৈরি করুন

```bash
pg_dump -U bachelor_ghor_user -d bachelor_ghor > backup.sql
```

### ব্যাকআপ পুনরুদ্ধার করুন

```bash
psql -U bachelor_ghor_user -d bachelor_ghor < backup.sql
```

---

## সমস্যা সমাধান

### সংযোগ ত্রুটি: "could not connect to server"

```bash
# PostgreSQL সার্ভিস চলছে কিনা চেক করুন
sudo systemctl status postgresql  # Linux
brew services list               # macOS
```

### পাসওয়ার্ড সমস্যা

```bash
# PostgreSQL ইউজার পাসওয়ার্ড পরিবর্তন করুন
sudo -u postgres psql
ALTER USER bachelor_ghor_user WITH PASSWORD 'new-password';
\q
```

### ডাটাবেস সংযোগ সেটিংস সঠিক নয়

`.env` ফাইলে এই সেটিংসগুলি যাচাই করুন:

```env
DB_ENGINE=django.db.backends.postgresql
DB_NAME=bachelor_ghor
DB_USER=bachelor_ghor_user
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432
```

### মাইগ্রেশন এরর

```bash
# সম্পূর্ণ ডাটাবেস রিসেট করুন (শুধুমাত্র ডেভেলপমেন্টে)
python manage.py migrate zero
python manage.py migrate

# অথবা সব মাইগ্রেশন ফাইল দেখুন
ls apps/*/migrations/
```

---

## ডেভেলপমেন্ট সার্ভার চালান

সবকিছু সঠিকভাবে সেটআপ হয়ে গেলে:

```bash
python manage.py runserver
```

আউটপুট দেখবেন:

```
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
May 6, 2026 - 10:00:00
Django version 4.2.0, using settings 'core.settings'
Starting development server at http://127.0.0.1:8000/
```

---

## Admin প্যানেল অ্যাক্সেস করুন

ব্রাউজারে খোলুন:

```
http://localhost:8000/admin/
```

লগইন করুন superuser credentials দিয়ে যা আপনি তৈরি করেছেন।

---

## পরবর্তী ধাপ

১. Admin প্যানেলে কিছু ডেটা যোগ করুন (Rooms, Expense Categories, etc.)
२. API endpoints টেস্ট করুন Postman বা Thunder Client দিয়ে
३ ফ্রন্টএন্ড সেটআপ করুন এবং একসাথে পরীক্ষা করুন

---

সফল সেটআপের জন্য শুভেচ্ছা! 🚀
