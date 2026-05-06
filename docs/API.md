# 🔌 API Documentation

## Base URL
```
http://localhost:8000/api
```

---

## Authentication (인증)

### Register - রেজিস্ট্রেশন
```
POST /auth/register/
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "+8801700000000"
}

Response: 201 Created
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "message": "Registration successful. Please verify your email."
}
```

### Login - লগইন
```
POST /auth/login/
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}

Response: 200 OK
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Refresh Token - টোকেন রিফ্রেশ করুন
```
POST /auth/refresh-token/
Content-Type: application/json

{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response: 200 OK
{
  "access": "new-access-token"
}
```

### Logout - লগআউট
```
POST /auth/logout/
Authorization: Bearer {access_token}

Response: 200 OK
{
  "message": "Successfully logged out"
}
```

---

## Members (সদস্য)

### Get All Members - সব সদস্য পান
```
GET /members/
Authorization: Bearer {access_token}

Response: 200 OK
[
  {
    "id": 1,
    "user": {
      "id": 1,
      "username": "john_doe",
      "email": "john@example.com"
    },
    "member_id": "BG001",
    "phone": "+8801700000000",
    "emergency_contact": "Jane Doe",
    "emergency_contact_phone": "+8801700000001",
    "join_date": "2024-01-15",
    "is_active": true
  }
]
```

### Create Member - নতুন সদস্য তৈরি করুন
```
POST /members/
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "user_id": 1,
  "phone": "+8801700000000",
  "emergency_contact": "Jane Doe",
  "emergency_contact_phone": "+8801700000001"
}

Response: 201 Created
{
  "id": 1,
  "member_id": "BG001",
  "phone": "+8801700000000",
  "join_date": "2024-01-15"
}
```

### Get Member Detail - সদস্যের বিস্তারিত পান
```
GET /members/{id}/
Authorization: Bearer {access_token}

Response: 200 OK
{
  "id": 1,
  "user": {...},
  "member_id": "BG001",
  "phone": "+8801700000000",
  "join_date": "2024-01-15",
  "is_active": true
}
```

---

## Meals (খাবার)

### Get All Meals - সব খাবার পান
```
GET /meals/?date=2024-01-20
Authorization: Bearer {access_token}

Response: 200 OK
[
  {
    "id": 1,
    "member": 1,
    "member_name": "John Doe",
    "meal_type": "breakfast",
    "meal_date": "2024-01-20",
    "is_taken": true,
    "created_at": "2024-01-20T08:00:00Z"
  }
]
```

### Add Meal Entry - খাবার এন্ট্রি যোগ করুন
```
POST /meals/
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "member_id": 1,
  "meal_type": "breakfast",
  "meal_date": "2024-01-20",
  "is_taken": true
}

Response: 201 Created
{
  "id": 1,
  "member_id": 1,
  "meal_type": "breakfast",
  "meal_date": "2024-01-20",
  "is_taken": true
}
```

### Get Monthly Meal Report - মাসিক খাবার রিপোর্ট
```
GET /meals/monthly-report/?month=2024-01
Authorization: Bearer {access_token}

Response: 200 OK
{
  "month": "2024-01",
  "total_meals": 87,
  "meal_rate": 125.50,
  "members": [
    {
      "member_id": 1,
      "name": "John Doe",
      "breakfast_count": 15,
      "lunch_count": 18,
      "dinner_count": 20,
      "total": 53,
      "cost": 6661.50
    }
  ]
}
```

---

## Expenses (খরচ)

### Get All Expenses - সব খরচ পান
```
GET /expenses/?date=2024-01-20
Authorization: Bearer {access_token}

Response: 200 OK
[
  {
    "id": 1,
    "member": 1,
    "member_name": "John Doe",
    "category": "Vegetables",
    "expense_date": "2024-01-20",
    "total_amount": 500.00,
    "description": "Weekly vegetables",
    "created_at": "2024-01-20T10:00:00Z"
  }
]
```

### Add Expense Entry - খরচ এন্ট্রি যোগ করুন
```
POST /expenses/
Authorization: Bearer {access_token}
Content-Type: multipart/form-data

{
  "member_id": 1,
  "category_id": 1,
  "expense_date": "2024-01-20",
  "total_amount": 500.00,
  "description": "Weekly vegetables",
  "receipt_image": <file>
}

Response: 201 Created
{
  "id": 1,
  "member_id": 1,
  "category_id": 1,
  "expense_date": "2024-01-20",
  "total_amount": 500.00
}
```

### Get Monthly Expense Summary - মাসিক খরচ সারসংক্ষেপ
```
GET /expenses/monthly-summary/?month=2024-01
Authorization: Bearer {access_token}

Response: 200 OK
{
  "month": "2024-01",
  "total_expense": 15000.00,
  "categories": [
    {
      "category": "Vegetables",
      "amount": 5000.00,
      "percentage": 33.33
    }
  ]
}
```

---

## Rent (ভাড়া)

### Get Rent Entries - ভাড়া এন্ট্রি পান
```
GET /rent/
Authorization: Bearer {access_token}

Response: 200 OK
[
  {
    "id": 1,
    "month": "2024-01",
    "total_rent": 40000.00,
    "total_members": 8,
    "per_person_rent": 5000.00,
    "is_paid": false,
    "due_date": "2024-01-05"
  }
]
```

### Create Rent Entry - ভাড়া এন্ট্রি তৈরি করুন
```
POST /rent/
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "month": "2024-02",
  "total_rent": 40000.00,
  "total_members": 8,
  "due_date": "2024-02-05"
}

Response: 201 Created
{
  "id": 2,
  "month": "2024-02",
  "total_rent": 40000.00,
  "per_person_rent": 5000.00,
  "is_paid": false
}
```

---

## Dashboard (ড্যাশবোর্ড)

### Get Dashboard Data - ড্যাশবোর্ড ডেটা পান
```
GET /dashboard/
Authorization: Bearer {access_token}

Response: 200 OK
{
  "total_members": 8,
  "total_meals": 87,
  "meal_rate": 125.50,
  "total_expense": 15000.00,
  "total_rent": 40000.00,
  "total_utility": 8000.00,
  "active_members": [
    {
      "id": 1,
      "name": "John Doe",
      "current_balance": 25000.00,
      "total_meals": 53
    }
  ],
  "recent_transactions": [
    {
      "type": "expense",
      "description": "Vegetables",
      "amount": 500.00,
      "date": "2024-01-20"
    }
  ]
}
```

---

## Common Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Authentication Header

সব protected endpoints এ নিচের হেডার ব্যবহার করুন:

```
Authorization: Bearer {access_token}
```

---

আরও বিস্তারিত API ডকুমেন্টেশনের জন্য:
```
http://localhost:8000/api/docs/
```

Happy Coding! 🚀
