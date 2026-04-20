# Vehicle Estimates App

* FastAPI backend (authentication and estimates management)
* Minimal React frontend (JSX compiled with Babel)
* Docker Compose for local orchestration

---

## Requirements

* Ubuntu (or any Linux distribution)
* Docker
* Docker Compose
* Git
* Node.js (for the frontend container build; `frontend/Dockerfile` uses Node 20)

---

## Install Docker (Ubuntu)

```bash
sudo apt update
sudo apt install docker.io
```

Enable and start Docker:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

---

## Install Docker Compose

```bash
sudo apt install docker-compose
```


## Python test
TODO
```bash
sudo docker-compose run backend pytest -v
```

---

## Frontend Dependencies (POC)

The frontend is intentionally minimal:

* **JSX compilation**: Babel (via npm dev dependencies)
* **Dev server**: `http-server` (serves `frontend/public` on port `5173`)
* **Routing**: React Router (loaded via UMD script in `frontend/public/index.html`)

Build scripts compile both `.js` and `.jsx` from `frontend/src` into `frontend/public` so the browser can load:

* `public/components/*`
* `public/containers/*`
* `public/hooks/*`
* `public/services/*`

---

## Environment Variables

Copy example environment files:

```bash
cp backend/.env.sample backend/.env
cp frontend/.env.sample frontend/.env
```

---

## Run the Application

From the root directory:

```bash
sudo docker compose up --build
```

This command will:

* Build backend and frontend images
* Start all services (no database in this POC yet)
* Run all services together

---

## Access the Application

* Backend API documentation:
  http://localhost:8000/docs

* Frontend:
  http://localhost:5173

---

## Stop the Application

```bash
sudo docker compose down
```

---

## Docker Compose Overview

The `docker-compose.yml` file defines multiple services:

* backend: FastAPI application
* frontend: React application
* db/storing: No db for this app, it's a POC. 

Docker Compose builds and runs all services together and connects them through a shared network.

---

## Dockerfile Overview

Each service has its own Dockerfile.

### Backend Dockerfile

Responsible for:

* Using a Python base image
* Installing dependencies from `requirements.txt`
* Copying application code
* Running the FastAPI server

### Frontend Dockerfile

Responsible for:

* Using a Node.js base image
* Installing npm dependencies
* Copying frontend code
* Running the development server

---

## Architecture

```
Browser → Frontend → Backend
```

* The frontend communicates with the backend via HTTP
* The backend will handle authentication (JWT) and estimates logic (TODO)
* No database is configured yet (POC)

---

## Notes

* Minimal setup without heavy tooling
* JSX compiled using Babel
* Clear separation between frontend and backend
* Designed for simplicity and clarity

---

