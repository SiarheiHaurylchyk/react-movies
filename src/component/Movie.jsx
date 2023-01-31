import React from 'react';

const Movie = (props) => {
    const {Title, Year, imdbID, Type, Poster} = props;
    return (
        <div>
            <div id={imdbID} className="card">
                <div className="card__image">
                    {
                        Poster === "N/A" ? <img className="activator" src={`https://via.placeholder.com/400x415?text=${Title}`}/> :
                        <img className="activator" src={Poster}/>
                    }
                </div>
                <div className="card__content">
                    <span className="card__title">{Title}</span>
                    <p>{Year}
                        <span>{Type}</span>
                    </p>
                </div>
            </div>
        </div>
    );

};

export default Movie;