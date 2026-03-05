
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {

    const { inputRef, inactiveTheme, switchTheme } = useContext(ThemeContext)

    return (
        <div>
            <button
                ref={inputRef}
                onClick={switchTheme}
            >Switch to { inactiveTheme } Mode</button>
        </div>
    )
}

export default ThemeToggle