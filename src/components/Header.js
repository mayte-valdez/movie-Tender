import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg'
import TuneIcon from '@material-ui/icons/Tune';
import '../components/StyleGeneral.css'

const Header = () => {
    
    return (
        <div className='header'>
            <div>
                <p className='slogan'>Trouve ton film sans perdre de temps</p>
                <Link to={'/'}>
                    <img src={Logo} alt='logo Mov(i)e Tender' />    
                </Link>
            </div>
            <div>
                <Link to={'/filtre'}>
                    <Button 
                        variant="contained"
                        color="default"
                        className="whiteBtn allBtn"
                        startIcon={<TuneIcon />}
                        >Personnaliser
                    </Button>
                </Link>
                <Link to={'/totalRandom'}>
                    <Button 
                        color="secondary"
                        variant="contained"
                        className="redBtn allBtn"
                        >Total Random
                    </Button>
                </Link>
            </div>
            

        </div>
    )
}
export default Header;