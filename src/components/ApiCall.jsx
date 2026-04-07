
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

import Card from './Card'

const ApiCall = () => {

    const [ pokemon, setPokemon ] = useState('dugtrio')
    const [ inputValue, setInputValue ] = useState('')

    const url = pokemon
        ? `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        : null

    const { data, loading, error } = useFetch(url)

    return (
        <div>
            <h2>Search Pokemon</h2>
            <input 
                type='text'
                value={inputValue}
                onChange={e => {
                    const value = e.target.value
                    setInputValue(value)
                    setPokemon(value)
                }}
                placeholder='Enter a Pokemon'
            />
            <hr/>
            {data && (
                <Card data={data}/>
            ) || <p>No Pokemon Found</p>}
            { error && '' }
            {loading && 'Loading Pokemon info'}
            <hr/>
        </div>
    )
}

export default ApiCall