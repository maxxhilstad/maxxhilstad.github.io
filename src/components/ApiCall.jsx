
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

const ApiCall = () => {

    const [ pokemon, setPokemon ] = useState('Pikachu')
    const [ inputValue, setInputValue ] = useState('')

    const url = pokemon
        ? `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        : null

    const { data, loading, error } = useFetch(url)

    const capFirstLetter = string => {
        if (!string) return
        return [string.charAt(0).toUpperCase() + string.slice(1)]
    }

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
            {data && (
                <>
                    <h2>Pokemon: {capFirstLetter(data.name)}</h2>
                    <img src={data.sprites.front_default}></img>
                    <h3>Base Stats</h3>
                    <p>HP: {data.stats[0].base_stat}</p>
                    <p>Attack: {data.stats[1].base_stat}</p>
                    <p>Defense: {data.stats[2].base_stat}</p>
                    <p>Special Attack: {data.stats[3].base_stat}</p>
                    <p>Special Defense: {data.stats[4].base_stat}</p>
                    <p>Speed: {data.stats[5].base_stat}</p>
                </>
            )}
            { error && '' }
            {loading && 'Loading Pokemon info'}
        </div>
    )
}

export default ApiCall