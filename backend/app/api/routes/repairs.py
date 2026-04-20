from fastapi import APIRouter, Header

from app.core.security import verify_token
from app.data.store import repairs
from app.models.schemas import Repair

router = APIRouter()


@router.get("/repairs")
def get_repairs(authorization: str = Header(None)):
    verify_token(authorization)
    return repairs


@router.post("/repairs")
def create_repair(
    repair: Repair,
    authorization: str = Header(None),
):
    verify_token(authorization)
    repairs.append(repair)
    return repair
