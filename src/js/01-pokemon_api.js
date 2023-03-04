import pokemonCardTpl from '../templates/pokemon-card.hbs'; //імпортуємо hbs шаблон
import API from './api-service-pokemon' //імпортуємо з файлу api-service-pokemon.js

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form')
}

refs.searchForm.addEventListener('submit', onSearch)

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;//отримуємо значення інпуту
  const searchQuery = form.elements.query.value;//отримуємо значення інпуту

  API.fetchPokemon(searchQuery)//тут виклик ф-ції з файлу api-service-pokemon.js
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset()) //очищаємо інпут після сабміту
}



function renderPokemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon)//передаємо в ф-цію шаблон hbs одного покемона
    console.log(markup)
    refs.cardContainer.innerHTML = markup
}
  
function onFetchError(error) {
  alert('Введено невірне значення. Введіть цифру')
}