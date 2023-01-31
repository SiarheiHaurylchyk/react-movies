import React from 'react';
import Movie from "./Movie";
import classes from "./style/Movies.module.css";

const Movies = (props) => {
    const {movies} = props;
    return (
        <div className={classes.movies}>
            {movies ? movies.map(movie=>
                <div className={classes.cards}>
                    <Movie ket = {movie.imdbID} {...movie}/>
                    </div>
            ): <h2 className={classes.errorSearch}> Не чего не найдено</h2>}
        </div>
    );
};

export default Movies;