const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ0NWM5YmUxYWE4Zjk3NDMzMzdkNmE5MTk4MTgwYyIsIm5iZiI6MTczMTYwODU1OC4wNjg1MTM5LCJzdWIiOiI2NzM2M2VjZWQ0ZmZiYTFlOGIyYjAwZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.H_06Q-uUqfEK65iyiioLj0V1IWFjMZHfbQEVU_cQxdU'
const main = document.getElementById('main');

const url = `https://api.themoviedb.org/3/movie/${id}`


fetch(url, {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})
    .then(res => res.json())
    .then(json => {
        main.innerHTML = `
        <a href="index.html" class="back"><-back</a>
        <h2 class="title">${json.title}</h2>
        <img class="main-img" src="https://media.themoviedb.org/t/p/w440_and_h660_face/${json.backdrop_path}" alt="">
        <div class="movie-description">
            <div class="description">
                <p class="description-synopsis">Synopsis: ${json.overview}</p>
                <p class="description-rating">Rating: ${json.vote_average}</p>
                <p class="description-runtime">Runtime: ${json.runtime}</p>
            </div>
        </div>
        `;
    })