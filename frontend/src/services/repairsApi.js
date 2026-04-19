const API_URL = "http://localhost:8000";

export async function getRepairs() {
  const res = await fetch(`${API_URL}/repairs`);
  return res.json();
}

export async function createRepair(data) {
  const res = await fetch(`${API_URL}/repairs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
}