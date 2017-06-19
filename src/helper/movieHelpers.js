
export const searchMovies = (movies, title, searchProp) => {
    let rg = RegExp(`^${title}`, 'g');
    debugger
    let list = movies.filter((data, index, self) => self.findIndex((t) => {return t[searchProp] === data[searchProp]; }) === index)
    return list.filter((movie) => {
           return movie[searchProp].toLowerCase().match(rg)
    })
};

export const findMovie = (movies, title, searchProp) => {
    return movies.find(movie => {
        return movie[searchProp].toLowerCase() === title.toLowerCase()
    })
}
