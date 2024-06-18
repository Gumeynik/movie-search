window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imdbID = urlParams.get('id');
console.log(imdbID)
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=d1a26e34`)
        .then(response => response.json())
        .then(movie => {
            document.getElementById('film-card').innerHTML = `
            <img id="film-poster" src="${movie.Poster}" alt="${movie.Title}">
            <div class="film-description">
            <h2 id="film-title">${movie.Title}</h2>
            <p id="film-year">${movie.Year}</p>
            <p id="film-rated">${movie.Rated}</p>
            <p id="film-Released">${movie.Released}</p>
            <p id="film-Runtime">${movie.Runtime}</p>
            <p id="film-genre">${movie.Genre}</p>
            <p id="film-director">${movie.Director}</p>
            <p id="film-writer">${movie.Writer}</p>
            <p id="film-actors">${movie.Actors}</p>
            <p id="film-plot">${movie.Plot}</p>
            </div>
            `;
        })
        .catch(error => console.error('Error fetching movie details:', error));
};
// ------------------
// <img src="" alt="" class="poster"/>
// <div class="description">
// <h2 class="title">${movie.Title}</h2>
// <p class="year"> ${movie.Year}</p>
// <p class="type"> ${movie.Type}</p>
// </div>