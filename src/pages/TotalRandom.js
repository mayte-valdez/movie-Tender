import React from 'react';
import Header from '../components/Header';
import '../components/StyleGeneral.css'
import RandomTotalCards from '../components/RandomTotalCards';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';


const TotalRandom = (props) => {

    const [restart, setRestart] = useState(false);

    function addFavorite(film) {
        props.addFavFilm(film)
    }

    return (
        <>
            <Header />
            <h2 className='titleSection'>Total Random</h2>
            <div className='contentCards'>
                    <RandomTotalCards reset={restart} addFavorite={(film)=>addFavorite(film)}  />
                    <RandomTotalCards reset={restart} addFavorite={(film)=>addFavorite(film)}  />
                    <RandomTotalCards reset={restart} addFavorite={(film)=>addFavorite(film)}  />
                </div>

                <Button
                    variant="contained"
                    color="default"
                    className="greyBtn allBtn toutChanger"
                    startIcon={<SwapHorizIcon />}
                    onClick={()=>setRestart(!restart)}
                >Tout changer
                </Button>

        </>
    )
};

export default TotalRandom;