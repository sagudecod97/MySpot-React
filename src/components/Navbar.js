import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/NavbarCSS.css'
import MySpotLogo from '../assets/Logo myspot-01.png'

const linkStyle = {
    textDecoration: 'none',
    color: '#FFFFFF'
}


class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            isLogged: false
        }
    }

    render() {
        return (
            <div className='container-navbar'>
                <div className='banner'>
                    <strong><p>¡Tu primera opción en parqueo!</p></strong>
                </div>
                <div className='container'>
                    <div className='navbar'>
                        <div className='logo'>
                            <img src={MySpotLogo} alt='MySpot'/>
                        </div>
                        <div className='container-list'>
                            <ul className='list'>
                                <Link style={linkStyle} to='/'><li>Inicio</li></Link>
                                <Link style={linkStyle} to='/about-myspot'><li>Acerca de MySpot</li></Link>
                                <Link style={linkStyle} to='/parking-lots'><li>Parqueaderos</li></Link>
                                <Link style={linkStyle} to='/devs'><li>Devs</li></Link>
                            </ul>
                        </div>
                    </div>
                
                    <div className='container-loggin'>
                        {
                            !this.state.isLogged ? 
                            <div className='loggin'>
                                <div className='loggin-btn'>
                                    <button >Resgistrarse</button>
                                </div>
                                <div className='loggin-btn'>
                                    <button>Ingresar</button>
                                </div>
                            </div> :
                            <div className='loggin'>
                                <div className='loggin-btn-out'>
                                    <button>Cerrar sesión</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar