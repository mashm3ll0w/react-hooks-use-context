import React, {useState, createContext} from 'react'

const ThemeContext = createContext()


function ThemeProvider({children}){

  const [theme, setTheme] = useState("dark")
  const value = [theme, setTheme]

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}


export {ThemeContext, ThemeProvider}
