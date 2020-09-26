import os
import uvicorn
from src.routes import auth_router
from fastapi import FastAPI
from starlette.requests import Request
from src.db import models
from fastapi.middleware.cors import CORSMiddleware

port = os.getenv("PORT")
app = FastAPI()
origins = ["http://localhost", "http://localhost:8080", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["auth"])


@app.get("/")
async def healthcheckz():
    return "Hello"
