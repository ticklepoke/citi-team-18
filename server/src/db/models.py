from sqlalchemy import create_engine, Integer, String, Column
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel

Base = declarative_base()


class UserAccount(Base):
    __tablename__ = "user_accounts"

    userid = Column(Integer, primary_key=True)
    username = Column(String)
    hashed_password = Column(String)
    mobile_number = Column(String)

    def __eq__(self, other):
        return (
            isinstance(other, UserAccount)
            and other.user_id == self.user_id
            and other.username == self.username
            and other.hashed_password == self.hashed_password
            and other.mobile_number == self.mobile_number
        )

    def __repr__(self):
        return f"UserAccount(id={self.user_id}, username={self.username}, password={self.hashed_password}, mobile_number={self.mobile_number})"


class User2FA(Base):
    __tablename__ = "user_tokens"
    username = Column(String, primary_key=True)
    token = Column(String)

    def __eq__(self, other):
        return (
            isinstance(other, User2FA)
            and other.username == self.username
            and other.token == self.token
        )

    def __repr__(self):
        return f"UserAccount(username={self.username} and token={self.token})"


class UserAccountDetails(BaseModel):
    username: str
    password: str
    mobile_number: str


class UserAccountResponse(UserAccountDetails):
    user_id: int


class User2FARequest(BaseModel):
    username: str


class User2FAKey(BaseModel):
    username: str
    token: str


class Token(BaseModel):
    access_token: str
    token_type: str


class Token2FA(BaseModel):
    token: str
