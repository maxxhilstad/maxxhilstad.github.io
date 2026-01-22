const footerStyle = {
    backgroundColor: 'var(--darkblue)'
}

const Footer = () => {
    return (
        <>
            <footer style = { footerStyle } className = "full-width-bg">
                <p><small>&copy; 2026 Maxx Hilstad. All rights reserved.</small></p>
                <p>Email : maxxohilstad@gmail.com</p>
            </footer>
        </>
    )
}

export default Footer