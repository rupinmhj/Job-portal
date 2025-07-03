import { useEffect,useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState(()=>
        localStorage.getItem("theme")||"light"
    )

    const toggleTheme=()=>{
        const newTheme=theme==="light"?"dark":"light";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme);
    }

    useEffect(()=>{
        const root=window.document.documentElement;
        if(theme==="dark"){
            root.classList.add("dark");
        } else{
            root.classList.remove("dark");
        }
    },[theme]);

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;