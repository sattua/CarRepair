const API_URL = __API_URL__

export async function getRepairs(token) {
  const res = await fetch("http://localhost:8000/repairs", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Error fetching repairs");
  }

  return data;
}

export async function createRepair(token, repair) {
  const res = await fetch(`${API_URL}/repairs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(repair)
  });

  return res.json();
}