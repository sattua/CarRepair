import { createRepair } from "../services/repairsApi";

export function useCreateRepair() {
  
  const submit = async (form) => {
    const token = localStorage.getItem("token");
    return await createRepair(token,{
      ...form,
      id: Number(form.id),
      cost: Number(form.cost)
    });
  };

  return { submit };
}