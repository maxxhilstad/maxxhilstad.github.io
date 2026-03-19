
import { useState, useEffect } from 'react'

import StarRating from "./StarRating"

const Favorites = () => {
    const [ books, setBooks ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        (async () => {
            try {
            const url = './data/books.json'
            const response = await fetch(url)
            if (!response.ok) throw new Error('Failed to fetch books.')
            const data = await response.json()
            setBooks(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setIsLoading(false)
            }
        })()
    }, [])

    useEffect(() => {
        if (!isLoading) document.title = 'Favorite Books'
    }, [ isLoading ])

    if (isLoading) return <div>Loading books...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <>
        <section>
            <h2>Favorite Books</h2>

            {books.map(book => (
                <li key={book.id}>{book.title} ({book.genre} | {book.pages} pages) - {book.author}<StarRating initialRating={book.rating} color={'grey'}/></li>
            ))}
        </section>
        </>
    )
    
}

export default Favorites