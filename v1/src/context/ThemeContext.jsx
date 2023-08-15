
import { createContext,useState } from "react";


//created themeContext
export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{

    const [myTheme, setmyTheme] = useState("light")


    return(
        <ThemeContext.Provider value={{myTheme,setmyTheme}}> {children}</ThemeContext.Provider>
    )
}


