import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app import config  # noqa: F401 — loads .env via config
from app.api.routes import auth as auth_routes
from app.api.routes import repairs as repairs_routes
from app.api.routes import root as root_routes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_ORIGIN", "*")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(root_routes.router)
app.include_router(repairs_routes.router)
app.include_router(auth_routes.router)
