import React, {useContext} from 'react'
import { ThemeContext } from './DarkLight';
const Demo = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <div className={`p-4  h-screen flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white "
      }`}>

        <p>this is just an example</p>
      <button onClick={handleToggleTheme}>
          {theme === "dark" ? "Switch to Light mode" : "Switch to Dark Mode"}
        </button>
    </div>
  )
}

export default Demo
