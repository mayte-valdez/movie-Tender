import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import '../components/StyleGeneral.css';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Filtre.css';

const Filtre = (props) => {

    const [selectedButton, setSelectedButton] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [preferenceFilm, SetPreferenceFilm] = useState("");

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

    const handleClick = (id, event) => {
        //verifie si le genre est active et l"efface ou l'ajout dans le tableau de selectedGenres
        if (selectedGenres.includes(id)) {
            const selectId = selectedGenres.indexOf(id);
            selectedGenres.splice(selectId, 1);
            event.target.style.backgroundColor = 'gray';
        } else if ( selectedGenres.length < 3){
            selectedGenres.push(id);
            console.log(selectedGenres)
            event.target.style.backgroundColor = '#EFEFEF';
        }
        setSelectedGenres(selectedGenres);
    }
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    const handleChange = (event) => {
        let triePar = event.target.value;
        SetPreferenceFilm(triePar);
    };
    const SendSelection =()=> { 
        if(selectedGenres.length === 0 && preferenceFilm === "") {
            return <p>Choix au moins 1 option</p>
        } else {
        const genres = selectedGenres;
        const tri = preferenceFilm;
        props.history.push({
            pathname:'/MaSelection',
            state:{
                genresSelected:"&with_genres="+genres,
                sortBy:"&"+tri
            }
        })    
        }
        
    }

    
    return (
        <>
            <div className='header'>

                <div>
                    <p className='slogan'>Trouve ton film sans perdre de temps</p>
                    <Link to={'/'}>
                        <img src={Logo} alt='logo Mov(i)e Tender' />
                    </Link>
                </div>
            </div>
            <h2 className='titleSection'>Filtre</h2>
            <div className='filtreContent'>
                <div className='filtreSection'>
                    <p>Genres</p>
                    <div className="MuiChip-label">
                        {
                            genres.map((genre) => (
                                <button key={genre.id}
                                    className='chip'
                                    style={{ backgroundColor: selectedButton != true && 'gray' }}
                                    onClick={(event) => handleClick(genre.id, event)}
                                >{genre.name}</button>

                            ))}
                    </div>
                    
                </div>
                <div className='filtreSection'>
                <p>Préférences de recherche</p>
                <FormControl variant="filled"  className="">
                    <InputLabel >Les films ...</InputLabel>
                    <Select native
                    onChange={handleChange}
                    >
                    <option value=""></option>
                    <option value='sort_by=popularity.desc'>Les plus populaires</option>
                    <option value="sort_by=release_date.desc">Les plus recent</option>
                    <option value="sort_by=vote_average.desc">Les mieux notés</option>
                    </Select>
                </FormControl>
                
                </div>
                <Button
                    color="secondary"
                    variant="contained"
                    className="redBtn allBtn"
                    onClick={()=>SendSelection()}
                >Voir ma selection
                </Button>
                {
                    preferenceFilm === "" && selectedGenres.length === 0 &&
                    <p>*Choix au moins 1 option</p>
                }
            </div>
        </>
    )
};

export default Filtre;