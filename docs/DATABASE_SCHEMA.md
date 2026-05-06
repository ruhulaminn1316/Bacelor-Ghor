# 📋 ডাটাবেস স্কিমা ডিজাইন

## টেবিল স্ট্রাকচার এবং সম্পর্ক

### 1. Auth Module

#### auth_user (CustomUser)
```
- id (PK)
- username
- email (UNIQUE)
- first_name
- last_name
- password
- phone
- profile_picture
- role (admin/user)
- is_email_verified
- email_verification_token
- is_active
- created_at
- updated_at
```

---

### 2. Members Module

#### members (Member)
```
- id (PK)
- user_id (FK → auth_user, UNIQUE)
- member_id (UNIQUE)
- phone
- emergency_contact
- emergency_contact_phone
- join_date
- is_active
- created_at
- updated_at
```

---

### 3. Rooms Module

#### rooms (Room)
```
- id (PK)
- room_number (UNIQUE)
- capacity
- description
- is_active
- created_at
- updated_at
```

#### room_assignments (RoomAssignment)
```
- id (PK)
- member_id (FK → members)
- room_id (FK → rooms)
- seat_number
- assigned_date
- is_current
- created_at
- updated_at
- UNIQUE(member_id, room_id, is_current)
```

---

### 4. Meals Module

#### meal_entries (MealEntry)
```
- id (PK)
- member_id (FK → members)
- meal_type (breakfast/lunch/dinner)
- meal_date
- is_taken
- created_at
- updated_at
- UNIQUE(member_id, meal_type, meal_date)
```

#### guest_meals (GuestMeal)
```
- id (PK)
- member_id (FK → members)
- guest_name
- meal_date
- meal_count
- meal_rate
- created_at
```

---

### 5. Expenses Module

#### expense_categories (ExpenseCategory)
```
- id (PK)
- name (UNIQUE)
- description
- created_at
```

#### bazar_entries (BazarEntry)
```
- id (PK)
- member_id (FK → members, NULL)
- category_id (FK → expense_categories)
- expense_date
- total_amount
- description
- receipt_image
- created_at
- updated_at
```

#### expense_items (ExpenseItem)
```
- id (PK)
- bazar_entry_id (FK → bazar_entries)
- item_name
- item_quantity
- item_price
- created_at
```

---

### 6. Rent Module

#### rent_entries (RentEntry)
```
- id (PK)
- month (YYYY-MM, UNIQUE)
- total_rent
- total_members
- per_person_rent
- is_paid
- due_date
- created_at
- updated_at
```

#### rent_payments (RentPayment)
```
- id (PK)
- member_id (FK → members)
- rent_entry_id (FK → rent_entries)
- amount_paid
- payment_date
- payment_method
- is_verified
- created_at
- UNIQUE(member_id, rent_entry_id)
```

---

### 7. Utilities Module

#### utility_types (UtilityType)
```
- id (PK)
- name (UNIQUE - electricity/gas/water/internet/cleaning/maintenance)
- description
- created_at
```

#### utility_entries (UtilityEntry)
```
- id (PK)
- utility_type_id (FK → utility_types)
- month (YYYY-MM)
- total_amount
- total_members
- per_person_amount
- bill_date
- due_date
- is_paid
- created_at
- updated_at
- UNIQUE(utility_type_id, month)
```

---

### 8. Payments Module

#### payments (Payment)
```
- id (PK)
- member_id (FK → members)
- amount
- payment_method (bkash/nagad/rocket/cash/bank)
- transaction_id
- status (pending/completed/failed/verified)
- screenshot
- payment_date
- verified_at
- created_at
```

---

### 9. Notifications Module

#### notifications (Notification)
```
- id (PK)
- member_id (FK → members)
- notification_type (rent_due/utility_due/meal_reminder/low_balance/duty_reminder/payment_confirmation/notice)
- title
- message
- is_read
- created_at
- updated_at
```

---

### 10. Chores Module

#### chore_types (ChoreType)
```
- id (PK)
- name (UNIQUE - cleaning/cooking/dish_washing/bazar)
- description
- created_at
```

#### chore_assignments (ChoreAssignment)
```
- id (PK)
- member_id (FK → members)
- chore_type_id (FK → chore_types)
- assigned_date
- due_date
- is_completed
- completed_date
- notes
- created_at
```

---

### 11. Analytics Module

#### member_stats (MemberStats)
```
- id (PK)
- member_id (FK → members, UNIQUE)
- total_meals
- total_expense
- total_paid
- current_balance
- total_contributions
- xp_points
- last_updated
```

#### dashboard_metrics (DashboardMetric)
```
- id (PK)
- metric_date
- total_meals
- meal_rate
- total_expense
- total_rent
- total_utility
- total_active_members
- created_at
```

---

## 💡 গুরুত্বপূর্ণ সূত্র

### Meal Rate (প্রতি খাবারের দাম)
```
Meal Rate = Total Food Cost / Total Meals
```

### Per Person Rent
```
Per Person Rent = Total Rent / Total Members
```

### Per Person Utility Cost
```
Per Person Utility Cost = Total Utility Bills / Total Members
```

### Member Balance
```
Final Balance = Added Money - (Meal Cost + Rent + Utility Cost)
```

### Guest Cost
```
Guest Cost = Guest Meals × Meal Rate
```

---

## 🔗 টেবিল সম্পর্ক ডায়াগ্রাম

```
auth_user
   ↓ (1:1)
members
   ↓ (1:many)
├── room_assignments ← room (many:1)
├── meal_entries
├── bazar_entries (1:many) → expense_categories
│   └── expense_items (1:many)
├── rent_payments (1:many) → rent_entries
├── payments
├── notifications
├── chore_assignments (1:many) → chore_types
└── guest_meals

analytics:
├── member_stats (1:1) ← members
└── dashboard_metrics (timestamp-based)
```

---

## 📌 ইন্ডেক্স সুপারিশ

```sql
-- Performance Optimization
CREATE INDEX idx_meal_entries_member_date ON meal_entries(member_id, meal_date);
CREATE INDEX idx_meal_entries_date ON meal_entries(meal_date);
CREATE INDEX idx_bazar_entries_date ON bazar_entries(expense_date);
CREATE INDEX idx_rent_payments_member ON rent_payments(member_id);
CREATE INDEX idx_notifications_member ON notifications(member_id);
CREATE INDEX idx_notifications_read ON notifications(member_id, is_read);
```

---

এই স্কিমা সম্পূর্ণ ব্যাচেলর ঘর ম্যানেজমেন্ট সিস্টেমের জন্য প্রস্তুত।
