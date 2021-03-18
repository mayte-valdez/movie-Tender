import React from 'react';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import RandomSelectionCards from '../components/RandomSelectionCards';

const MaSelection = (props) => {

    const [restart, setRestart] = useState(false);
   

    return (
        <>
            <Header />
            <h2 className='titleSection'>Ma selection</h2>
            <div className='contentCards'>
    
                <RandomSelectionCards reset={restart} addFavorite={false} preferences={props.location.state}/>
                <RandomSelectionCards reset={restart} addFavorite={false} preferences={props.location.state}/>
                <RandomSelectionCards reset={restart} addFavorite={false} preferences={props.location.state}/>
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

export default MaSelection;
