import { useEffect, useState } from "react";
import { getRepairs } from "../services/repairsApi.js";

export function useRepairs() {
  const [repairs, setRepairs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const data = await getRepairs(token);

        setRepairs(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { repairs, loading };
}