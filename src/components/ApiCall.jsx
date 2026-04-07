
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

import Card from './Card'

const ApiCall = () => {

    const [ pokemon, setPokemon ] = useState('cyndaquil')
    const [ inputValue, setInputValue ] = useState('')

    const url = pokemon
        ? `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        : null

    const { data, loading, error } = useFetch(url)

    const handleSubmit = () => {
        if (inputValue != '') setPokemon(inputValue.trim())
    }

    const handleRandomPokemon = () => {
        const randomPokemon = Math.floor(Math.random() * 1350) + 1
        setPokemon(String(randomPokemon))
    }

    return (
        <div>
            <h2>Search Pokemon</h2>
            <input 
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        handleSubmit()
                    }
                }}
                placeholder='Enter a Pokemon'
            />
            <button
                onClick={handleSubmit}
            >Search</button>
            <button
                onClick={handleRandomPokemon}
            >Random</button>
            <hr/>
            {data && (
                <Card data={data}/>
            ) ||
            error && <><h2>Not Found :(</h2></> ||
            loading && <><h2>Loading Pokemon . . .</h2></>}
            <hr/>
        </div>
    )
}

export default ApiCall