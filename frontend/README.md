# 🎨 Bachelor Ghor - React Frontend

এটি Bachelor Ghor প্রজেক্টের React ফ্রন্টএন্ড।

## ✨ বৈশিষ্ট্য

- Modern React 18
- Tailwind CSS Styling
- State Management with Zustand
- JWT Authentication
- Responsive Design
- Real-time Updates

## 🛠️ প্রযুক্তি স্ট্যাক

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Charting**: Chart.js

## 🚀 দ্রুত শুরু

### १. ডিপেন্ডেন্সি ইনস্টল করুন

```bash
cd frontend
npm install
```

### २. পরিবেশ ভেরিয়েবল সেটআপ করুন

```bash
cp .env.example .env
```

`.env` ফাইলটি এডিট করুন:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Bachelor Ghor
```

### ३. ডেভেলপমেন্ট সার্ভার চালু করুন

```bash
npm run dev
```

অ্যাপ্লিকেশন এখন `http://localhost:3000` এ চলছে।

## 📁 প্রজেক্ট স্ট্রাকচার

```
frontend/
├── src/
│   ├── components/           # Reusable Components
│   ├── pages/                # Page Components
│   ├── hooks/                # Custom Hooks
│   ├── context/              # Context API
│   ├── services/             # API Services
│   ├── utils/                # Utility Functions
│   ├── styles/               # Global Styles
│   ├── assets/               # Images & Icons
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── public/                   # Static Assets
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .env
```

## 📦 npm Scripts

```bash
# ডেভেলপমেন্ট সার্ভার
npm run dev

# প্রোডাকশন বিল্ড
npm run build

# Preview বিল্ড
npm run preview

# Lint চেক করুন
npm run lint

# Code ফরম্যাট করুন
npm run format
```

## 🎨 Styling

Tailwind CSS ব্যবহার করা হয়েছে। কাস্টম কালার সেটিংস:

```javascript
// tailwind.config.js
theme: {
  colors: {
    primary: '#3B82F6',
    secondary: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
  }
}
```

## 🔐 Authentication

### লগইন ফ্লো

```javascript
// Request
POST /api/auth/login/
{
  "email": "user@example.com",
  "password": "password"
}

// Response
{
  "access": "jwt-token",
  "refresh": "refresh-token",
  "user": {...}
}
```

### Token ম্যানেজমেন্ট

- Access token localStorage এ সংরক্ষিত
- প্রতিটি request এ header এ পাঠানো হয়

## 🌐 API Endpoints

### Base URL
```
http://localhost:8000/api
```

### Headers
```
Authorization: Bearer {access_token}
Content-Type: application/json
```

আরও endpoints এর জন্য দেখুন: [API Documentation](../docs/API.md)

## 🧪 টেস্টিং

```bash
# টেস্ট চালান
npm test

# Watch মোডে
npm test -- --watch
```

## 🚀 প্রোডাকশন বিল্ড

```bash
npm run build
```

এটি `dist/` ফোল্ডারে অপটিমাইজড বিল্ড তৈরি করে।

## 📖 ডকুমেন্টেশন

- [API Documentation](../docs/API.md)
- [Setup Guide](../docs/SETUP.md)

## 🐛 সমস্যা সমাধান

### API সংযোগ ত্রুটি

`.env` এ সঠিক API URL যোগ করুন:

```env
VITE_API_URL=http://localhost:8000/api
```

### Port ইতিমধ্যে ব্যবহৃত

```bash
# বিভিন্ন পোর্টে চালান
npm run dev -- --port 3001
```

## 🚀 Vercel এ ডিপ্লয়

১. Vercel একাউন্ট তৈরি করুন
२. GitHub রিপোজিটরি ইম্পোর্ট করুন
३. Environment ভেরিয়েবল সেট করুন
४. ডিপ্লয় করুন

---

Happy Coding! 🎨
