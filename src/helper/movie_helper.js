
const searchMovies = (movies, title) => {
    return movies.filter(movie => {
        return movie.title === title
    })
};

const findMovie = (movies, title) => {
    return movies.find(movie => {
        return movie.title === title
    })
}

exports.default = {
    search: searchMovies,
    find: findMovie
}