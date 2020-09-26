from typing import Union
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from .models import UserAccount

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plaintext_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plaintext_password, hashed_password)


def encrypt_password(password: str) -> str:
    return pwd_context.hash(password)


def authenticate_user(
    db: Session, username: str, password: str
) -> Union[str, UserAccount]:
    user = db.query(UserAccount).filter(UserAccount.username == username).first()

    if not user or not verify_password(password, user.password):
        return False
    return user
