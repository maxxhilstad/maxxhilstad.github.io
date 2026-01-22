const navStyle = {
    backgroundColor: 'var(--lightblue)'
}

const Nav = () => {
    return (
        <>
            <nav style = { navStyle } className = "full-width-bg">
            <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
            </nav>
        </>
    )
}

export default Nav