from pydantic import BaseModel


class LoginRequest(BaseModel):
    username: str
    password: str


class Repair(BaseModel):
    id: int
    vehicle: str
    issue: str
    cost: float
