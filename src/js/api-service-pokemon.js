const BASE_URL = 'https://pokeapi.co/api/v2'

function fetchPokemon(pokemonId) {//Відправляємо запит fetch до pokemon api /по замовчуванню fetch використовує метод GET
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`)
  .then(response => response.json())
}

export default {fetchPokemon}//експортуємо в файл 01-pokemon_api.js