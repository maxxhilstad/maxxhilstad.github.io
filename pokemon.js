(async () => {

const div = document.querySelector('#pokemon') // This line returns null. Is that normal?

const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const json = await response.json()
    const sprite = json.sprites
    const pokemonName = json.name

    // const { name } = pokemonName
    const { front_default } = sprite

    return { front_default, pokemonName }
}

const renderPokemon = async a => {
    const img = document.createElement('img')
    img.src = a.front_default // url of the image from the 'front_default' property
    img.alt = a.pokemonName // name of the pokemon
    div.append(img)

    console.log(a.front_default)
    console.log(a.pokemonName)
}

const pokemon = await getRandomPokemon()
// console.log(pokemon)

await renderPokemon(pokemon)

})()