import React, { useEffect, useState } from "react"; 
import NavBar from "./Components/NavBar";
import News from "./Components/News";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() =>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
  , [theme]);

  const onThemeToggle = () =>{
    const newTheme = theme === "light"? "dark":"light";
    setTheme(newTheme);
  }
  return (
    <div>
      <NavBar onSearch={setSearchQuery} onThemeToggle={onThemeToggle} theme = {theme}/>
      <News searchQuery={searchQuery} theme={theme}/>
    </div>
  );
};

export default App;
