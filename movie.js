window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imdbID = urlParams.get('id');
console.log(imdbID)
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=d1a26e34`)
        .then(response => response.json())
        .then(movie => {
            document.getElementById('film-card').innerHTML = `
            <img id="film-poster" src="${movie.Poster}" alt="${movie.Title}">
            <div class="film-description">
            <h2 id="film-title">${movie.Title}</h2>
            <p id="film-year">Год: <span style="color: rgb(0, 179, 255);">${movie.Year}</span></p>
            <p id="film-rated">Рейтинг: <span style="color: rgb(0, 179, 255);">${movie.Rated}</span></p>
            <p id="film-Released">Дата выхода: <span style="color: rgb(0, 179, 255);>${movie.Released}</span></p>
            <p id="film-Runtime">Продолжительность: <span style="color: rgb(0, 179, 255);">${movie.Runtime}</span></p>
            <p id="film-genre">Жанр: <span style="color: rgb(0, 179, 255);">${movie.Genre}</span></p>
            <p id="film-director">Режиссер: <span style="color: rgb(0, 179, 255);">${movie.Director}</span></p>
            <p id="film-writer">Сценарий: <span style="color: rgb(0, 179, 255);">${movie.Writer}</span></p>
            <p id="film-actors">Актеры: <span style="  color: rgb(0, 179, 255);">${movie.Actors}</span></p>
            </div>
            `;
            document.getElementById('film-plot').innerHTML = `
            <p id="film-plot">${movie.Plot}</p>
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
// </div>            <img id="film-poster" src="${movie.Poster}" alt="${movie.Title}">
// {/* <div class="film-description">
// <h2 id="film-title">${movie.Title}</h2>
// <p id="film-year">Год:<span style="color: blue;">${movie.Year}</span></p>
// <p id="film-rated">Рейтинг:${movie.Rated}</p>
// <p id="film-Released">Дата выхода:${movie.Released}</p>
// <p id="film-Runtime">Продолжительность:${movie.Runtime}</p>
// <p id="film-genre">Жанр:${movie.Genre}</p>
// <p id="film-director">Режиссер: ${movie.Director}</p>
// <p id="film-writer">Сценарий:${movie.Writer}</p>
// <p id="film-actors">Актеры:${movie.Actors}</p>
// <p id="film-plot">${movie.Plot}</p> */}