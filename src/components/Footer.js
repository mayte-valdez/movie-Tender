import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
import Logo from '../images/logo.svg'


const Footer = () => {
    return (

        <div className='container-img-logo'>
            <div>
                <Link to={'/'} className='container-logo'>
                    <img src={Logo} alt='logo Mov(i)e Tender' className='footer-logo' />

                </Link>
                <p className='p-footer'>© Tous droits réservés 2021 <br /> Isabelle, Marie, Mayte et Tom</p>
            </div>


        </div >

    )
}

export default Footer
