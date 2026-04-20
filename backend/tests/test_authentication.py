from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_login_success():
    response = client.post("/login", json={
        "username": "admin",
        "password": "1234"
    })

    assert response.status_code == 200
    assert "access_token" in response.json()


def test_login_fails_with_wrong_password():
    response = client.post("/login", json={
        "username": "admin",
        "password": "wrong"
    })

    assert response.status_code == 401