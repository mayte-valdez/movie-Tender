import React from 'react';
import Header from '../components/Header';
import '../components/StyleGeneral.css';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Button from '@material-ui/core/Button';
import RandomCards from '../components/RandomCards';
import { useState, useEffect } from 'react';
import FavCardFilm from '../components/FavCardFilm';
import { PinDropSharp } from '@material-ui/icons';

const Home = (props) => {

    /*const [favFilms, setFavFilms] = useState([]);*/
    const [restart, setRestart] = useState(false);

    function addFavorite(film) {
        props.addFavFilm(film)
    }

    return (
        <>
            <Header />
            <div>
                <h2 className='titleSection'>Les plus populaires cette semaine</h2>
                <div className='contentCards'>
                    <RandomCards reset={restart} addFavorite={(film)=>addFavorite(film)} />
                    <RandomCards reset={restart} addFavorite={(film)=>addFavorite(film)} />
                    <RandomCards reset={restart} addFavorite={(film)=>addFavorite(film)} />
                </div>

                <Button
                    variant="contained"
                    color="default"
                    className="greyBtn allBtn toutChanger"
                    startIcon={<SwapHorizIcon />}
                    onClick={()=>setRestart(!restart)}
                >Tout changer
                </Button>
            </div>
        </>
    )
};

export default Home;