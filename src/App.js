import React, { useState } from "react"; // ✅ Fix: Import useState
import NavBar from "./Components/NavBar";
import News from "./Components/News";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <NavBar onSearch={setSearchQuery} />
      <News searchQuery={searchQuery} />
    </div>
  );
};

export default App;
