(async () => {

const div = document.querySelector('#pokemon')


const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const json = await response.json()
    const sprite = json.sprites
    const pokemonName = json.name

    const { name } = pokemonName
    const { front_default } = sprite

    return { front_default, name }
}

const renderPokemon = (pokeUrl, pokeAlt) => {
    getRandomPokemon()
    const img = document.createElement('img')
    img.src = pokeUrl// url of the image from the 'front_default' property
    img.alt = pokeAlt// name of the pokemon
    div.append(img)
}

renderPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", 'charizard')

})()

// There is an error that pops up when I run this:
//
// "Unhandled Promise Rejection: TypeError: null is not an object (evaluating 'div.append')"
//
// I'm trying to figure out how to display anything on the site before I move on to displaying
// the random pokemon. I'm not sure what that error means, do you know?

// Another issue I have is I'm not sure how to get the { front_default, name } values to my
// renderPokemon function. I tried just entering renderPokemon(sprite, pokemonName) but it
// couldn't find the variable sprite or pokemonName so I'm assuming I'm missing a step in
// the middle. Do you have any advice on how to bridge the two? Thanks!