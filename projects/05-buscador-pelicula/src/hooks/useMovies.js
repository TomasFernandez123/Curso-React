import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function UseMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const previousSearch = useRef(search)

    const getMovies = useCallback(
        async ({ search }) => {
            if (search === previousSearch.current) return
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        }, [])


    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => b.year - a.year)
            : movies
    }, [movies, sort])

    return { movies: sortedMovies, getMovies }
}
