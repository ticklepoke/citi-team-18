from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import create_engine, Integer, String, Column
from typing import Optional
from .models import UserAccount, UserAccountDetails, User2FARequest, User2FA
from .hashing import encrypt_password
from uuid import uuid4
import random
import os

DB_URL = os.getenv("DB_URL", "postgresql://postgres:@localhost:5432")

engine = create_engine(DB_URL, client_encoding="utf8")

LocalSession = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db_session():
    db = LocalSession()
    try:
        yield db
    finally:
        db.close()


def get_user_account(session: Session, username: str):
    sess = session or LocalSession()
    result = sess.query(UserAccount).filter(UserAccount.username == username).first()
    if result is None:
        return None
    return result


def create_user_account(session: Session, user: UserAccountDetails):
    sess = session or LocalSession()
    hashed_password = encrypt_password(user.password)
    user_account = UserAccount(username=user.username, hashed_password=hashed_password)
    sess.add(user_account)
    sess.commit()
    sess.refresh(user_account)
    return user_account


def create_2fa_token(session: Session, user: User2FARequest):
    sess = session or LocalSession()
    random_token = " ".join([str(random.randint(0, 999)).zfill(3) for _ in range(2)])
    user_2fa_entry = User2FA(username=user.username, token=random_token)
    sess.add(user_account)
    sess.commit()
    sess.refresh(user_2fa_entry)
    return user_2fa_entry


def get_user_token(session: Session, username: str):
    sess = session or LocalSession()
    result = sess.query(User2FA).filter(User2FA.username == username).first()
    if result is None:
        return None
    return result
