"""
Utility script to verify PostgreSQL connection
"""
import os
import sys
import psycopg2
from decouple import config

def check_postgresql_connection():
    """Check PostgreSQL database connection"""
    
    try:
        db_name = config('DB_NAME', default='bachelor_ghor')
        db_user = config('DB_USER', default='postgres')
        db_password = config('DB_PASSWORD', default='')
        db_host = config('DB_HOST', default='localhost')
        db_port = config('DB_PORT', default=5432, cast=int)
        
        print("🐘 PostgreSQL Connection Test")
        print("=" * 50)
        print(f"Host: {db_host}:{db_port}")
        print(f"Database: {db_name}")
        print(f"User: {db_user}")
        print()
        
        # Try to connect
        conn = psycopg2.connect(
            dbname=db_name,
            user=db_user,
            password=db_password,
            host=db_host,
            port=db_port
        )
        
        print("✅ Successfully connected to PostgreSQL!")
        print()
        
        # Get database info
        cursor = conn.cursor()
        
        # Get database version
        cursor.execute("SELECT version();")
        version = cursor.fetchone()
        print(f"PostgreSQL Version: {version[0]}")
        print()
        
        # Get tables
        cursor.execute("""
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        """)
        tables = cursor.fetchall()
        
        print(f"📊 Tables in database: {len(tables)}")
        for table in tables:
            print(f"   - {table[0]}")
        
        cursor.close()
        conn.close()
        
        return True
        
    except psycopg2.OperationalError as e:
        print(f"❌ Connection Error: {e}")
        print()
        print("Make sure:")
        print("1. PostgreSQL is installed")
        print("2. PostgreSQL service is running")
        print("3. Database credentials in .env are correct")
        return False
    
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

if __name__ == "__main__":
    success = check_postgresql_connection()
    sys.exit(0 if success else 1)
