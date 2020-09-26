import os
import uvicorn
from src.routes import auth_router
from fastapi import FastAPI
from starlette.requests import Request
from src.db import models

port = os.getenv("PORT")
app = FastAPI()

app.include_router(auth_router, prefix="/auth", tags=["auth"])

#@app.middleware("http")
#async def db_session_middleware(request: Request, call_next):
#    try:
#        request.state.db = LocalSession()
#        response = await call_next(request)
#    finally:
#        request.state.db.close()
#    return response
