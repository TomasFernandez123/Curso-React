const URL = 'https://rest.imdbapi.dev/v2/search/titles?query='

export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`${URL}${search}`)
        if (!response.ok) {
            throw new Error('Error searching movies')
        }
        const json = await response.json()

        const movies = json.titles

        return movies?.map(movie => ({
            id: movie.id,
            original_title: movie.original_title,
            primary_title: movie.primary_title,
            primary_image: movie.primary_image,
            year: movie.start_year
        }))
         
    } catch (e) {
        console.log(e)
    }
}