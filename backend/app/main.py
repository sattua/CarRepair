from fastapi import FastAPI, HTTPException, Header
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import jwt
from datetime import datetime, timedelta

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# FAKE DB
# -------------------------
repairs = [
    {"id": 1, "vehicle": "Toyota Corolla", "issue": "Brake failure", "cost": 320.0},
    {"id": 2, "vehicle": "Honda Civic", "issue": "Oil leak", "cost": 150.0},
    {"id": 3, "vehicle": "Ford Ranger", "issue": "Engine overheating", "cost": 500.0}
]

users = {
    "admin": "1234"
}

# -------------------------
# AUTH CONFIG
# -------------------------
SECRET_KEY = "carrepair-secret"
ALGORITHM = "HS256"

class LoginRequest(BaseModel):
    username: str
    password: str

class Repair(BaseModel):
    id: int
    vehicle: str
    issue: str
    cost: float


# -------------------------
# JWT HELPERS
# -------------------------
def create_token(data: dict):
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(minutes=30)
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def verify_token(authorization: str):
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing token")

    try:
        token = authorization.replace("Bearer ", "")
        jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except:
        raise HTTPException(status_code=401, detail="Invalid token")


# -------------------------
# ROUTES
# -------------------------
@app.get("/")
def root():
    return {"message": "Backend OK"}


@app.get("/repairs")
def get_repairs(authorization: str = Header(None)):
    verify_token(authorization)
    return repairs


@app.post("/repairs")
def create_repair(
    repair: Repair,
    authorization: str = Header(None)
):
    verify_token(authorization)

    repairs.append(repair)
    return repair


@app.post("/login")
def login(req: LoginRequest):
    if users.get(req.username) != req.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token({"sub": req.username})
    return {"access_token": token}