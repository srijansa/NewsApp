import React, { useState } from "react";

const NavBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">Crypto News</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
          </ul>

          {/* Search Bar */}
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search news..."
            value={searchInput}
            onChange={handleSearchChange}
            style={{ width: "250px" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
