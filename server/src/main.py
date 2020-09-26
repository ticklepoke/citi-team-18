import os
import uvicorn
from src.routes import auth_router
from fastapi import FastAPI
from starlette.requests import Request
from src.db import models

port = os.getenv("PORT")
app = FastAPI()

app.include_router(auth_router, prefix="/auth", tags=["auth"])


@app.get("/")
async def healthcheckz():
    return "Hello"
