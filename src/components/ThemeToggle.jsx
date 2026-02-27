
import { useRef } from 'react'

const ThemeToggle = ({ theme, setTheme }) => {

    const inputRef = useRef(null)

    let inactiveTheme = ''

    theme == 'Dark' ? inactiveTheme = 'Light' : inactiveTheme = 'Dark'

    const switchTheme = () => {
        theme == 'Light' ? setTheme('Dark') : setTheme('Light')
        inputRef.current.focus()
    }

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