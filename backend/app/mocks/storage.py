from uuid import uuid4

estimates = []

def get_estimates():
    return estimates

def create_estimate(data):
    estimate = {
        "id": str(uuid4()),
        "customer_name": data["customer_name"],
        "vehicle": data["vehicle"],
        "cost": data["cost"],
        "status": "PENDING"
    }
    estimates.append(estimate)
    return estimate