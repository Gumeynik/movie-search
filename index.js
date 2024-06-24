//apikey d1a26e34
//fetch(`http://www.omdbapi.com/?i=tt1905041&apikey=d1a26e34`)(для поиска странички фильма по айдишнику)
const inputNode = document.querySelector('.input-js'); 
const btnNode = document.querySelector('.btn-js'); 
const result = document.querySelector('#result')
const error = document.querySelector('.error')

btnNode.addEventListener('click', search); 

function search() {
    const film = inputNode.value;
    fetch(`https://www.omdbapi.com/?s=${film}&apikey=d1a26e34`)
        .then(response => response.json())
        .then(json => {
            if (json.Response==='False') {
                console.log(123)
                result.innerHTML = '',
                error.textContent = 'Фильмы не найдены',
                inputNode.addEventListener('click', function() {
                    this.value = ''; 
                })
            }
            else {
                result.innerHTML = ''; 
                error.textContent = '';
                for (let i = 0; i < 3; i++) {
                    const movie = json.Search[i];
                    const movieElement = document.createElement('a');
                    movieElement.href = `movie.html?id=${movie.imdbID}&apikey=d1a26e34`;
                    movieElement.target = '_blank'; 
                    movieElement.classList.add('movie-list');
                        movieElement.innerHTML = `
                            <img src="${movie.Poster}" alt="${movie.Title}" class="poster"/>
                            <div class="description">
                            <h2 class="title">${movie.Title}</h2>
                            <p class="year"> ${movie.Year}</p>
                            <p class="type"> ${movie.Type}</p>
                            </div>
                        `;
                        result.appendChild(movieElement);
                        inputNode.value = '';
                }
            }
     
        })
        
}
//{Title: 'Fast & Furious 6', Year: '2013', imdbID: 'tt1905041', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg'}
// .catch(error => 
//     console.log('123'),
