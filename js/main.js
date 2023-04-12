import {fetchMovie} from "./api.js"

let titleInputElement = document.querySelector("#movie-title")
let movieCardContainer = document.querySelector(".movie-container")
let form = document.querySelector(".input-form")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    let title = titleInputElement.value
    if (title === null || title.match(/^ *$/) !== null) {
        titleInputElement.classList.add("invalid")
    }
    else{
        titleInputElement.classList.remove("invalid")
        movieCardContainer.innerHTML = "";
        let movieData = await fetchMovie(title)
        console.log(movieData.Search)
        movieData.Search.forEach(movie => {
            console.log(movie)
            createMovieCard(movie)
        })
    }
})

const createMovieCard = (movieData) => {
    let card = document.createElement("div")
    card.classList.add("card")

    let div1 = document.createElement("div")

    let img = document.createElement("img")
    img.classList.add("poster", "mb")
    img.src = movieData.Poster
    
    let title = document.createElement("h2")
    title.innerText = movieData.Title

    let date = document.createElement("p")
    date.classList.add("mb")
    date.innerText = movieData.Year

    let viewMoreBtn = document.createElement("a")
    viewMoreBtn.classList.add("btn", "viewMore")
    viewMoreBtn.setAttribute("href", `movie.html?imdbID=${movieData.imdbID}`)
    viewMoreBtn.innerText = "View More"

    div1.append(title, date)
    card.append(div1, img, viewMoreBtn)
    movieCardContainer.insertBefore(card, movieCardContainer.firstChild)
}