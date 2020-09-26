from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, Response, status
from fastapi.security import OAuth2PasswordRequestForm
from starlette.requests import Request
from .auth import ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token
from .db.orm import create_user_account, get_db_session
from .db.hashing import authenticate_user
from .db.models import Token, UserAccountResponse, UserAccountDetails

auth_router = APIRouter()


@auth_router.get(
    "/health"
)
async def health_check(
    session: Session = Depends(get_db_session)
):
    return "Health good"

@auth_router.post(
    "/users/", response_model=UserAccountResponse, status_code=201
)
async def create_user(
    user_account_details: UserAccountDetails,
    session: Session = Depends(get_db_session)
):
    db_user = get_user_account(session, UserAccount, user_account_details.username)
    if db_user is not None:
        raise HTTPException(
            status_code=400, detail="User has already registered"
        )

    created_user = create_user_account(session, user_account_details)
    response = {'id': created_user.id, "username": created_user.username}
    return response


@auth_router.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db_session),
):
    user = authenticate_user(
        db, form_data.username, form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
