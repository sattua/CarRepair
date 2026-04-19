import React from "react";
import { Link } from "react-router-dom";

export default function RepairForm() {
  return (
    <div className="container">
      <h1>Create Repair</h1>

      <form>
        <input placeholder="Car model" />
        <input placeholder="Issue description" />
        <button type="submit">Save</button>
      </form>

      <Link to="/">Back</Link>
    </div>
  );
}