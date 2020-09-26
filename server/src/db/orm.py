from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import create_engine, Integer, String, Column
from typing import Optional
from .models import UserAccount, UserAccountDetails
from .hashing import encrypt_password
import os

DB_URL = os.getenv('DB_URL', 'postgresql+pg8000://postgres:@localhost:5432')

engine = create_engine(DB_URL, client_encoding='utf8')

LocalSession = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db_session():
    db = LocalSession()
    try:
        yield db
    finally:
        db.close()

def get_user_account(session: Session, model: UserAccount, username: str) -> Optional[str]:
    sess = session or LocalSession()
    result = sess.query(model).filter(model.username == username).first()
    if result is None:
        return None
    return result

def create_user_account(session: Session, user_account: UserAccountDetails):
    sess  = session or LocalSession()
    hashed_password = encrypt_password(user_account.password)
    user_account = UserAccount(username=username, password=password)
    sess.add(user_account)
    sess.commit()
    sess.refresh(user_account)
    return user_account
