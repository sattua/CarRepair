from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def root():
    return {"message": "Backend OK"}

@router.get("/test")
def root():
    return {"message": "Backend OK"}
