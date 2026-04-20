from fastapi import APIRouter, HTTPException

from app.core.security import create_token
from app.data.store import users
from app.models.schemas import LoginRequest

router = APIRouter()


@router.post("/login")
def login(req: LoginRequest):
    # listMap hardcoded users
    if users.get(req.username) != req.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token({"sub": req.username})
    return {"access_token": token}
