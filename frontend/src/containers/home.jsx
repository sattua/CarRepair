import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        
        <header className="home-header">
          <h1>Vehicle Repair System</h1>
          <p>Manage repair estimates in a simple way</p>
        </header>

        <div className="home-card">
          <h2>Repairs Dashboard</h2>
          <p>Create and track vehicle repair estimates.</p>

          <div className="home-actions">
            <Link to="/create" className="primary-button">
              Create Repair
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}