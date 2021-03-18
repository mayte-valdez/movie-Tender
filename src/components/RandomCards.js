import { useState, useEffect } from 'react';
import ChoixFilmButton from "../components/ChoixFilmsButton.js";
import CardFilm from '../components/cardFilm';
import './RandomCards.css';
import Ranking5 from './Ranking5';
import Ranking4 from './Ranking4';
import Ranking3 from './Ranking3';
import Ranking2 from './Ranking2';
import Ranking1 from './Ranking1';
import SansRanking from './SansRanking';

const RandomCards = (props) => {

    const [data, setData] = useState([]);
    const [randomFilm, setRandomFilm] = useState(null);

    const [watchProviders, SetWatchProviders] = useState(null)
    const [casting, setCasting] = useState(null)

    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Aventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comédie" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentaire" },
        { id: 18, name: "Drame" },
        { id: 10751, name: "Familial" },
        { id: 14, name: "Fantastique" },
        { id: 36, name: "Histoire" },
        { id: 27, name: "Horreur" },
        { id: 10402, name: "Musique" },
        { id: 9648, name: "Mystère" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science-Fiction" },
        { id: 10770, name: "Téléfilm" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "Guerre" },
        { id: 37, name: "Western" }
    ];

    useEffect(() => {
        const min = 1;
        const max = 4;
        const x = Math.floor(Math.random() * (max - min) + min);
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=2f5db99c0d99450f670eee04fca7d32c&language=fr-FR&page='+x)
            .then((resp) => resp.json())
            .then((data) => { setFavorite(data.results)})
    }, [props.reset])

    const fetchMovieAgain = () => {
        const min = 1;
        const max = 5;
        const x = Math.floor(Math.random() * (max - min) + min);
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=2f5db99c0d99450f670eee04fca7d32c&language=fr-FR&page='+x)
            .then((resp) => resp.json())
            .then((data) => { setFavorite(data.results)})
    }

    /* cette formule stoque les donnes de la api dans un tableau et genere un numero aletoire pour avoir un seule film */
    const setFavorite = (data) => {
        setData(data);
        const min = 0;
        const max = 19;
        const rand = Math.floor(Math.random() * (max - min) + min);
        const film = data[rand];
        setRandomFilm(film);
        getCastings(film.id);
    }

    const getCastings =(id) => {
        fetch('https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=0eb1560cadbbc71b973ed8f868ef57fa&language=fr-FR')
            .then((resp) => resp.json())
            .then((data) => { setCasting(data)})
    }


    /* ça transforme les id des genres aux noms  */
    const getGenres = (idGenre) => {
        let genreName = [];
        for (let i = 0; i < idGenre.length; i++) {
            for (let k = 0; k < genres.length; k++){
               if (idGenre[i] === genres[k].id) {
                 genreName.push(genres[k].name) 
               } 
            } 
        };
        return genreName.join(" - ");
    }
    

    /* Pour generer les etoiles du Rannking à partir du la note */
    const getRanking = (note) => {
        let x = note;
        if (x >= 9) {
            return <Ranking5/>
        } else if (x >= 7.5){
            return <Ranking4/>
        } else if (x >= 5){
            return <Ranking3/>
        } else if (x >= 3){
            return <Ranking2/>
        } else if (x >= 2){
            return <Ranking1/>
        } else {
            return <SansRanking/>
        }
    }

    return (
        <div className='cardBlock'>
            {
                randomFilm !== null &&
                <div className='blockCardFilm'
                    key={randomFilm.id}>
                    <CardFilm 
                        title={randomFilm.title}
                        poster={'https://image.tmdb.org/t/p/w500/'+randomFilm.poster_path}
                        ranking={getRanking(randomFilm.vote_average)}
                        rankingNote={randomFilm.vote_average}
                        year={randomFilm.release_date.slice(0,4)}
                        genres={getGenres(randomFilm.genre_ids)}
                        infoFilm={randomFilm}
                        filmCasting={casting}
                    />
                    <ChoixFilmButton handleNext={fetchMovieAgain} handleFavorite={()=>props.addFavorite(randomFilm)} />



                </div>
            }
        </div>
    )
}

export default RandomCards
