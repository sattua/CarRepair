import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRepairs } from "../hooks/useRepairs.js";

export default function Home() {
  const { repairs, loading } = useRepairs();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Vehicle Repair System</h1>
        <p className="text-muted">Track and manage repairs easily</p>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <Link to="/create" className="btn btn-primary">
          + Create Repair
        </Link>
      </div>

      {loading && (
        <div className="text-center text-muted">
          Loading repairs...
        </div>
      )}

      <div className="row g-3">
        {repairs.map((r) => (
          <div className="col-md-4" key={r.id}>
            <div className="card shadow-sm border-0 h-100">

              <div className="card-body">
                <h5 className="card-title">{r.vehicle}</h5>

                <p className="card-text text-muted">
                  {r.issue}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-success">
                    ${r.cost}
                  </span>

                  <small className="text-muted">
                    ID: {r.id}
                  </small>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
      <div className="container" >
        <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
      </div>

    </div>
  );
}