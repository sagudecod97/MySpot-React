import React, { Component } from 'react'

import '../styles/aboutMySpotCSS.css'
import pMySpot from '../assets/P-MySPOT.png'


class MySpotAbout extends Component {
    render() {
        return (
            <div className='about-container'>
                <div>
                    <h1>¿Por qué MySpot?</h1>
                </div>
                <div className='why'>
                    <div className='text-why'>
                        <p>
                            MySpot nace a partir de la necesidad de encontrar un espacio disponible para parquear en diferentes
                            situaciones tales como: un concierto, un partido de fútbol, una reunión . . .<br/>
                            Es por esto que decidimos crear una plataforma que conecte parqueaderos con los usuarios, brindando
                            una app que permite al usario comodamente reservar una celda de parqueo. <br />
                            Optimizando la experiencia del usuario, ahorrando tiempo de busqueda de un parqueadero cerca del lugar
                            que el usario necesita, y generando un mayor flujo de usuarios para el parqueadero.
                        </p>
                    </div>
                    <div className='logo-why'>
                        <img src={pMySpot} alt='M from MySpot logo'/>
                    </div>
                </div>

                <div className='separator'>
                    <hr />
                </div>

                <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingRight: '13%' }}>
                    <div>
                        <h2>MySpot Recursos</h2>
                    </div>
                </div>

                <div className='resources-container' style={{marginBottom: "10%"}}>

                    <div className='resources-text'>
                        <p>
                            <strong><a className='links' href='https://github.com/sagudecod97/MySpot---API'>REST API</a>: </strong> 
                            RESTful API creada para recibir y responder todas las peticiones hechas por la aplicación.<br/>
                            Desarrolada con Express, Mongoose y MongoDB. Manejo de encriptación de contraseña e email, además de autenticación
                            y autorización por medio de Tokens.
                            <br /><br />

                            <strong><a className='links' href='https://github.com/sagudecod97/MySpot-React'>WEB APP</a>: </strong>
                            Aplicación web desarrollada con la librería React JS.
                            <br /><br />

                            <strong><a className='links' href='https://github.com/thomasmontoya123/MySpot_Front'>APP MOVIL USUARIO</a>: </strong>
                            Aplicación movil desarrollda con el SDK Flutter para manejar la interfaz del usuario.
                            <br /><br />

                            <strong><a className='links' href='https://github.com/thomasmontoya123/MySpot_Front'>APP MOVIL ADMIN</a>: </strong>
                            Aplicación movil desarrollda con el SDK Flutter para manejar la interfaz del usuario del administrador del parqueadero.
                        
                        </p>
                    </div>
                </div>
                
            </div>
        )
    } 
}

export default MySpotAbout