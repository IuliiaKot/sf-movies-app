import {searchMovies, findMovie} from './movieHelpers'

test('searchMovies should return array of all the expected items from an array', () => {
    const movies = [{
            actor_1: "Britt Robertson",
            release_year: "2017",
            title: "GirlBoss",
            writer: "Kay Cannon"
            },
            {
            actor_1: "Jonathan Groff",
            release_year: "2015",
            title: "Looking Season 2 ep 210",
            writer: "Michael Lannan"
        }]
        
    const expected = {
            actor_1: "Britt Robertson",
            release_year: "2017",
            title: "GirlBoss",
            writer: "Kay Cannon"
        }
    const result = searchMovies(movies, 'GirlBoss'.toLowerCase())

    console.log(result)    
    
    expect(result).toEqual([expected])

})

test('findMovie should return expected item from array', () => {
       const movies = [{
            actor_1: "Britt Robertson",
            release_year: "2017",
            title: "GirlBoss",
            writer: "Kay Cannon"
            },
            {
            actor_1: "Jonathan Groff",
            release_year: "2015",
            title: "Looking Season 2 ep 210",
            writer: "Michael Lannan"
        }]
        
    const expected = {
            actor_1: "Britt Robertson",
            release_year: "2017",
            title: "GirlBoss",
            writer: "Kay Cannon"
        }
    const result = findMovie(movies, 'GirlBoss')

    console.log(result)    
    
    expect(result).toEqual(expected)
})