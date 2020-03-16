import React from 'react'
import '../styles/FooterCSS.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='my-spot' style={{width: '50%'}}>
                <h3 style={{marginLeft: '5%', paddingTop: '2%', marginBottom: 0}}>MySpot</h3>
                <ul className='info-myspot'>
                    <li>Medellín, Antioquia</li>
                    <li>contacto@myspot.com</li>
                    <div>App Store, Play Store</div>
                </ul>
            </div>
            
            <div className='info' style={{width: '50%'}}>
                <h3 style={{marginLeft: '5%', paddingTop: '2%', marginBottom: 0}}>Redes Sociales</h3>
                <ul className='info-myspot'>
                    <li><a href='www.google.com'>Twitter</a></li>
                    <li><a href='www.google.com'>Instagram</a></li>
                    <div><a href='www.google.com'>Linkedin</a></div>
                </ul>
            </div>
            <div className='copy-right'>
                <p>© Copyright 2020 MySpot</p>
            </div>
        </div>
    )
}

export default Footer