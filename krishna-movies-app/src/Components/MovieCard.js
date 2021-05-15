import React from 'react'
import { MovieControls } from './MovieControls'

export const MovieCard = ({movie, type}) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            {movie.poster_path ? (
                    
                    <div className="image-col">
                    
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}>
                        
                    </img>
                    <h3 className="movie-title">{movie.title}</h3>
                    
    </div>
                    
                ):
                <>
                    
                    <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1938&q=80" alt="fillerimage"></img>
                    <h3 className="movie-title">{movie.title}</h3>
                   </>}
            
            <MovieControls type={type} movie={movie}/>
        </div>
    )
}
