
import { NavLink } from 'react-router-dom'

const Nav = ({navStyle}) => {

    return (
        <nav style={navStyle} className = "full-width-bg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
        </nav>
    )
}

export default Nav
