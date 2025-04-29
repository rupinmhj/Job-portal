import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//creating a component
export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`p-4  h-screen flex flex-col justify-center items-center ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white "
        }`}
      >
        <h1>Dark Light Mode Website</h1>
        <p className="">Hello, My react learners</p>
        <button onClick={handleToggleTheme}>
          {theme === "dark" ? "Switch to Light mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </>
  );
};
