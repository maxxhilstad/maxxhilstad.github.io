
import { createContext, useState, useRef } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('Light')

    const inputRef = useRef(null)

    let inactiveTheme = ''

    theme == 'Dark' ? inactiveTheme = 'Light' : inactiveTheme = 'Dark'

    const switchTheme = () => {
        theme == 'Light' ? setTheme('Dark') : setTheme('Light')
        inputRef.current.focus()
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, inputRef, inactiveTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}