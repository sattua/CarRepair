import { useEffect, useState } from "react";
import { getRepairs } from "../services/repairsApi.js";

export function useRepairs() {
  const [repairs, setRepairs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepairs()
      .then((data) => setRepairs(data))
      .finally(() => setLoading(false));
  }, []);

  return { repairs, loading };
}