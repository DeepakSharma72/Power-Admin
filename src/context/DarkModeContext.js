import React, { createContext, useState } from "react";

export const DarkModeContext = createContext('');

export const DarkModeProvider = (props) => {
    const [darkmode, setDarkMode] = useState(false);
    return(
        <DarkModeContext.Provider value={{darkmode, setDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}