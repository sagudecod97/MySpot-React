import React from 'react'

import '../styles/LandingPageCSS.css'
import Map from '../assets/Mapa-iphone-stores.PNG'


const LandingPage = () => {
    return (
        <div className='container-map'>
            <div className='background'>
                <img src={Map} alt='MySpot app stores'/>
            </div>
            <div className='text-myspot'>
                <h1 className='text-map'>MySpot  ¡Parqueo fácil!</h1>
                <p className='text-landing'>
                    Descarga la applicación movil de MySpot completamente<br/> gratis y comienza a disfrutar
                    de todos los beneficios <br/> de acceder al servicio de parqueadero sin <br/>
                    complicaciones, ni preocupaciones.
                </p>
            </div>
        </div>
    )
}

export default LandingPage
