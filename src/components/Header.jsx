const headerStyle = {
    backgroundColor: 'var(--darkblue)'
}

const Header = ({ name, tagLine, children }) => {
    return (
        <>
            <header style = { headerStyle }>
                <h1>{ name }</h1>
                <p>{ tagLine }</p>
                { children }
            </header>
        </>
    )
}

export default Header