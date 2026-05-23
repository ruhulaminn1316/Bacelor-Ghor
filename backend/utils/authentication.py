from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

User = get_user_model()

class EmailBackend(ModelBackend):
    """
    Custom Authentication Backend to authenticate using email instead of username
    """
    def authenticate(self, request, username=None, password=None, **kwargs):
        identifier = kwargs.get('identifier', username)
        if not identifier:
            return None

        try:
            if '@' in identifier:
                user = User.objects.get(email__iexact=identifier)
            else:
                user = User.objects.get(username__iexact=identifier)
        except User.DoesNotExist:
            return None
        
        if user.check_password(password) and self.user_can_authenticate(user):
            return user
        return None
