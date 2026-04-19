import { useState } from "react";

export function useRepairForm(initial = {
  id: "",
  vehicle: "",
  issue: "",
  cost: ""
}) {
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const reset = () => setForm(initial);

  return {
    form,
    setForm,
    handleChange,
    reset
  };
}