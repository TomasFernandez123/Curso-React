export function ListOfMovies ({movies}) {
    return (
        <div className='cartelera'>
            {
                movies.map(movie => (
                    <div key={movie.id}>
                        <h3>{movie.original_title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.primary_image.url} alt={movie.primary_title} />
                    </div>
                ))
            }
        </div>
    )
}

export function NoMoviesResult() {
    return (
        <p>No se encontraron resultados</p>
    )
}

export function Movies ({movies}) {
    const hasMovies = movies?.length > 0
    
    return (
        hasMovies
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResult/>
    )
}