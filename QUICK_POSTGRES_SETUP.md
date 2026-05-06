# 🚀 PostgreSQL দ্রুত শুরু গাইড

## ৩ মিনিটে PostgreSQL সেটআপ করুন

### Linux (Ubuntu/Debian)

```bash
# ১. ইনস্টল করুন
sudo apt update
sudo apt install postgresql postgresql-contrib

# २. স্টার্ট করুন
sudo systemctl start postgresql
sudo systemctl enable postgresql

# ३. ডাটাবেস তৈরি করুন
sudo -u postgres psql

# প্রম্পটে এই কমান্ড চালান:
CREATE DATABASE bachelor_ghor;
CREATE USER bachelor_ghor_user WITH PASSWORD 'bachelor_ghor_password';
ALTER ROLE bachelor_ghor_user SET client_encoding TO 'utf8';
ALTER ROLE bachelor_ghor_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE bachelor_ghor_user SET default_transaction_deferrable TO on;
ALTER ROLE bachelor_ghor_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE bachelor_ghor TO bachelor_ghor_user;
\q
```

---

### macOS (Homebrew)

```bash
# १. ইনস্টল করুন
brew install postgresql

# २. স্টার্ট করুন
brew services start postgresql

# ३. ডাটাবেস তৈরি করুন
psql postgres

# প্রম্পটে চালান:
CREATE DATABASE bachelor_ghor;
CREATE USER bachelor_ghor_user WITH PASSWORD 'bachelor_ghor_password';
ALTER ROLE bachelor_ghor_user SET client_encoding TO 'utf8';
ALTER ROLE bachelor_ghor_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE bachelor_ghor_user SET default_transaction_deferrable TO on;
ALTER ROLE bachelor_ghor_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE bachelor_ghor TO bachelor_ghor_user;
\q
```

---

### Windows

१. [PostgreSQL ডাউনলোড করুন](https://www.postgresql.org/download/windows/)
२. ইনস্টলার চালান এবং সেটআপ সম্পূর্ণ করুন
३. pgAdmin খোলুন (বা Command Prompt এ `psql -U postgres`)
४. নিচের কোয়েরি চালান:

```sql
CREATE DATABASE bachelor_ghor;
CREATE USER bachelor_ghor_user WITH PASSWORD 'bachelor_ghor_password';
ALTER ROLE bachelor_ghor_user SET client_encoding TO 'utf8';
ALTER ROLE bachelor_ghor_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE bachelor_ghor_user SET default_transaction_deferrable TO on;
ALTER ROLE bachelor_ghor_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE bachelor_ghor TO bachelor_ghor_user;
```

---

## Django সেটআপ

### ১. Backend ফোল্ডারে যান

```bash
cd backend
```

### २. Virtual Environment সক্রিয় করুন

```bash
source venv/bin/activate  # Linux/Mac
# বা
venv\Scripts\activate     # Windows
```

### ३. .env ফাইল তৈরি করুন

```bash
cp .env.example .env
```

### ४. .env এ এই কনটেন্ট যোগ করুন

```env
DEBUG=True
SECRET_KEY=django-insecure-test-secret-key-change-in-production

# Database
DB_ENGINE=django.db.backends.postgresql
DB_NAME=bachelor_ghor
DB_USER=bachelor_ghor_user
DB_PASSWORD=bachelor_ghor_password
DB_HOST=localhost
DB_PORT=5432

# JWT
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Frontend
FRONTEND_URL=http://localhost:3000
```

### ५. ডাটাবেস মাইগ্রেশন

```bash
python manage.py migrate
```

### ६. Superuser তৈরি করুন

```bash
python manage.py createsuperuser
```

প্রম্পট অনুযায়ী ডিটেইল এন্টার করুন।

### ७. কানেকশন চেক করুন

```bash
python check_db_connection.py
```

আউটপুট হওয়া উচিত:

```
🐘 PostgreSQL Connection Test
==================================================
Host: localhost:5432
Database: bachelor_ghor
User: bachelor_ghor_user

✅ Successfully connected to PostgreSQL!
...
```

### ८. সার্ভার চালু করুন

```bash
python manage.py runserver
```

---

## ✅ যাচাইকরণ তালিকা

- [ ] PostgreSQL ইনস্টল করা হয়েছে
- [ ] PostgreSQL সার্ভিস চলছে
- [ ] Database `bachelor_ghor` তৈরি করা হয়েছে
- [ ] User `bachelor_ghor_user` তৈরি করা হয়েছে
- [ ] `.env` ফাইল সেটআপ করা হয়েছে
- [ ] মাইগ্রেশন সফল হয়েছে
- [ ] Superuser তৈরি করা হয়েছে
- [ ] ডাটাবেস কানেকশন যাচাই করা হয়েছে

সব চেক দেখুন? তাহলে আপনি প্রস্তুত! 🎉

---

## 🐛 সমস্যা হলে

### "connection refused"

```bash
# চেক করুন PostgreSQL চলছে কিনা
sudo systemctl status postgresql  # Linux
brew services list               # macOS
```

### "password authentication failed"

.env ফাইলে পাসওয়ার্ড যাচাই করুন এবং আবার ট্রাই করুন।

### "database does not exist"

ডাটাবেস তৈরি করা হয়নি। PostgreSQL প্রম্পটে চালান:

```sql
CREATE DATABASE bachelor_ghor;
```

---

## আরও তথ্য

বিস্তারিত গাইডের জন্য দেখুন: [PostgreSQL Setup Guide](./POSTGRESQL_SETUP.md)

Happy Coding! 🚀
