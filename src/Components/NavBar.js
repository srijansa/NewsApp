import React, { useState } from "react";

const NavBar = ({ onSearch, onThemeToggle, theme }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value); 
  };


  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} shadow`}>
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

          <input
            type="text"
            className="form-control me-2"
            placeholder="Search news..."
            value={searchInput}
            onChange={handleSearchChange}
            style={{ width: "250px" }}
          />
      
           <button className="btn btn-outline-light ms-2" onClick={onThemeToggle}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
