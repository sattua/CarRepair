from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# "DB en memoria"
repairs = [
    {
        "id": 1,
        "vehicle": "Toyota Corolla",
        "issue": "Brake failure",
        "cost": 320.0
    },
    {
        "id": 2,
        "vehicle": "Honda Civic",
        "issue": "Oil leak",
        "cost": 150.0
    },
    {
        "id": 3,
        "vehicle": "Ford Ranger",
        "issue": "Engine overheating",
        "cost": 500.0
    }
]

class Repair(BaseModel):
    id: int
    vehicle: str
    issue: str
    cost: float


@app.get("/")
def root():
    return {"message": "Backend OK"}

@app.get("/repairs")
def get_repairs():
    return repairs


@app.post("/repairs")
def create_repair(repair: Repair):
    repairs.append(repair)
    return repair