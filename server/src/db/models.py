from sqlalchemy import create_engine, Integer, String, Column
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel

Base = declarative_base()

class UserAccount(Base):
    __tablename__ = 'user_accounts'

    user_id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)

    def __eq__(self, other):
        return (
            isinstance(other, UserAccount)
            and other.user_id == self.user_id
            and other.username == self.username
            and other.password == self.password
        )

    def __repr__(self):
        return f'UserAccount(id={self.user_id}, username={self.username}, password={self.password})'

class UserAccountDetails(BaseModel):
    username: str
    password: str


class UserAccountResponse(UserAccountDetails):
    user_id: int


class Token(BaseModel):
    access_token: str
    token_type: str
