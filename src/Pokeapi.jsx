const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'
const URL_SPECIE = 'https://pokeapi.co/api/v2/pokemon-species/'

export async function GET_POKEMON(pokemon) {
    const response = await fetch(URL_POKEMON + pokemon, {
    method: "GET"
    })
    const data = await response.json()
    return data
}
export async function GET_SPECIE(pokemon) {
    const response = await fetch(URL_SPECIE + pokemon, {
    method: "GET"
    })
    const data = await response.json()
    return data
}