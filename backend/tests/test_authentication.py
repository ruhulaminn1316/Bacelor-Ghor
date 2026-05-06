from django.test import TestCase
from django.contrib.auth import get_user_model
from apps.members.models import Member

User = get_user_model()

class AuthenticationTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )
    
    def test_user_creation(self):
        self.assertIsNotNone(self.user.id)
        self.assertEqual(self.user.email, 'test@example.com')
    
    def test_user_password_hashing(self):
        self.assertNotEqual(self.user.password, 'testpass123')
        self.assertTrue(self.user.check_password('testpass123'))
