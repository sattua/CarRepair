from fastapi import FastAPI
from app.mocks.storage import get_estimates, create_estimate

app = FastAPI()

@app.get("/")
def root():
    return {"message": "API running"}

@app.get("/estimates")
def list_estimates():
    return get_estimates()

@app.post("/estimates")
def add_estimate(data: dict):
    return create_estimate(data)