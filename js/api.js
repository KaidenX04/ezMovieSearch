const fetchMovie = async (title) => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=87d778e2&s=${title}/`)
    let data = await response.json()
    return data
}

const fetchMovieByID = async (id) => {
    let response = await fetch(`http://www.omdbapi.com/?apikey=87d778e2&i=${id}/`)
    let data = await response.json()
    return data
}

export {fetchMovie, fetchMovieByID}