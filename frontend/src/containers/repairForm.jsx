import React from "react";
import { Link } from "react-router-dom";
import { useRepairForm } from "../hooks/useRepairForm";
import { useCreateRepair } from "../hooks/useCreateRepair";

export default function RepairForm() {
  const { form, handleChange, reset } = useRepairForm();
  const { submit } = useCreateRepair();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit(form);
    reset();
    alert("Repair created");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>

      <h2 className="mb-4">Create Repair</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

        <input
          className="form-control mb-2"
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="vehicle"
          placeholder="Vehicle"
          value={form.vehicle}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="issue"
          placeholder="Issue"
          value={form.issue}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="cost"
          placeholder="Cost"
          value={form.cost}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">
          Create Repair
        </button>
        
      </form>
      <div className="card">
        <button className="btn w-100"> <Link to="/">Go Back</Link> </button>
      </div>
      
    </div>
  );
}