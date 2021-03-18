import { useState, useEffect } from "react";
import FavCardFilm from "../components/FavCardFilm";
import React from "react";

const FavFilms = (props) => {
    const [favFilms, setFavFilms] = useState([]);
    
    useEffect(()=> {
        const filmsToAdd = props.films;
        setFavFilms(filmsToAdd);
    },[props.films])

    return (
        <div>
            <h2 className="titleSection">Coup de coeur</h2>
            <div className="contentCards">
            {favFilms.length !== 0 &&
                favFilms.map((film) => (
                <FavCardFilm
                    key={film.id}
                    poster={"https://image.tmdb.org/t/p/w500/" + film.poster_path}
                    infoFilm={film}
                    rankingNote={film.vote_average}
                    handleRemoveFavorite={()=>props.addFavFilm(film)}
                />
                ))}
            </div>
        </div>
    )
}

export default FavFilms;