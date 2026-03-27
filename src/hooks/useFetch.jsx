
import { useState, useEffect } from 'react'

const useFetch = url => {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
            const response = await fetch(url)

            if (!response.ok) {
                setError(`Error: ${response.status}`)
                return
            }

            const json = await response.json()
            setData(json)
            setError(null)
            } catch (err) {
                setData(null)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        })()

    }, [ url ])

    return { data, loading, error }
}

export default useFetch