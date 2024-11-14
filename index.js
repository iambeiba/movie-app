const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ0NWM5YmUxYWE4Zjk3NDMzMzdkNmE5MTk4MTgwYyIsIm5iZiI6MTczMTYwODU1OC4wNjg1MTM5LCJzdWIiOiI2NzM2M2VjZWQ0ZmZiYTFlOGIyYjAwZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.H_06Q-uUqfEK65iyiioLj0V1IWFjMZHfbQEVU_cQxdU'
const urlPopular = 'https://api.themoviedb.org/3/movie/popular'
const urlSearch = 'https://api.themoviedb.org/3/search/movie?query='

const movies = document.getElementById('movies')

function getPopular(searchTerm) {
    movies.innerHTML = ''
    if(searchTerm.trim().length > 0) {
        fetch(urlSearch + searchTerm, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
            .then(res => res.json())
            .then(data => {
                data.results
                    .forEach(movie => {
                        movies.innerHTML += `
        <a href="details.html?id=${movie.id}" class="movie">
            <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.backdrop_path}" alt=""
                 class="movie-img">
            <div class="text">
                <p class="movie-name">${movie.original_title}</p>
                <p class="movie-release">${movie.release_date}</p>
            </div>
        </a>`
                    })
            })
    } else {
        fetch(urlPopular, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
            .then(res => res.json())
            .then(data => {
                data.results
                    .forEach(movie => {
                        movies.innerHTML += `
        <a href="details.html?id=${movie.id}" class="movie">
            <img src="https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.backdrop_path}" alt=""
                 class="movie-img">
            <div class="text">
                <p class="movie-name">${movie.original_title}</p>
                <p class="movie-release">${movie.release_date}</p>
            </div>
        </a>`
                    })
            })
    }
}

getPopular("")


let prev;
function inputHandler(event) {
    clearTimeout(prev);
    setTimeout(() => getPopular(event.target.value), 700)
}