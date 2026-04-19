import { createRepair } from "../services/repairsApi";

export function useCreateRepair() {
  const submit = async (form) => {
    return await createRepair({
      ...form,
      id: Number(form.id),
      cost: Number(form.cost)
    });
  };

  return { submit };
}