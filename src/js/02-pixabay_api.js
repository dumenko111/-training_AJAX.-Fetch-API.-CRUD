

// fetch('https://pixabay.com/api/?key=26979018-8f50a5ae15f0c572be2195341&q=dog&image_type=photo')
//   .then(r => r.json)
//   .then(console.log)





//newsAPI eeda972c75574db08cda1ad756be828c ключ можемо передавати як заголовок другим параметром у fetch
const url = 'https://newsapi.org/v2/everything?q=cars';
const option = {
  headers: {
    'X-Api-Key': 'eeda972c75574db08cda1ad756be828c'
  }
}
fetch(url, option)
  .then(r => r.json())
  .then(console.log)