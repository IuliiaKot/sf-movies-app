
export const searchMovies = (movies, title) => {
    let rg = RegExp(`^${title}`, 'g');
    let list = movies.filter((data, index, self) => self.findIndex((t) => {return t.title === data.title; }) === index)
    return list.filter((movie) => {
           return movie.title.toLowerCase().match(rg)
    })
};

export const findMovie = (movies, title) => {
    return movies.find(movie => {
        return movie.title === title
    })
}
