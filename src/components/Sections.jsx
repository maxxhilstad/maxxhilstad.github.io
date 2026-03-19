
import { useReducer } from 'react'

import About from './About'
import Favorites from './Favorites'
import Contact from './Contact'

const Sections = () => {

    const initialState = {
        showAbout: true,
        showFavorites: true,
        showContact: true
    }
    
    const sectionReducer = (state, action) => {
        switch (action.type) {
            case 'TOGGLE_ABOUT':
                return { ...state, showAbout: !state.showAbout }
            case 'TOGGLE_FAVORITES':
                return { ...state, showFavorites: !state.showFavorites }
            case 'TOGGLE_CONTACT':
                return { ...state, showContact: !state.showContact }
            case 'RESET':
                return initialState
            default:
                return state
        }
    }

    const [ { showAbout, showFavorites, showContact }, dispatch ] = useReducer(sectionReducer, initialState)

    return (
        <>
            {showAbout && (
                <>
                <About/>
                <hr/>
                </>
            )}
            {showFavorites && (
                <>
                <Favorites/>
                <hr/>
                </>
            )}
            {showContact && (
                <>
                <Contact/>
                <hr/>
                </>
            )}

            <button onClick={() => dispatch({ type: 'TOGGLE_ABOUT'})}>Toggle About</button>
            <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITES'})}>Toggle Favorites</button>
            <button onClick={() => dispatch({ type: 'TOGGLE_CONTACT'})}>Toggle Contact</button>
            <button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
        </>
    )
}

export default Sections