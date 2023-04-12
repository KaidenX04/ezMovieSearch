import { fetchMovieByID } from "./api.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('imdbID')

window.addEventListener("load", async () => {
    let movie = await fetchMovieByID(id)
    console.log(movie)

    document.querySelector(".title").innerText = movie.Title

    document.querySelector(".year").innerText = movie.Year

    document.querySelector(".poster").src = movie.Poster

    document.querySelector(".rating").innerText = `Rated: ${movie.Rated}`

    document.querySelector(".genre").innerText = `Genre(s): ${movie.Genre}`

    document.querySelector(".runtime").innerText = `Runtime: ${movie.Runtime}`

    document.querySelector(".plot").innerText = movie.Plot

    let ratingObject = null
    movie.Ratings.forEach(rating => {
        if (rating.Source == "Rotten Tomatoes") {
            ratingObject = rating
        }
    })
    if (ratingObject == null) {
        ratingObject = movie.Ratings[0]
    }

    document.querySelector(".rotten-tomatoes").innerText = `Rating: ${ratingObject.Value}`
})
