import React, { Component } from 'react'
import '../styles/NavbarCSS.css'
import MySpotLogo from '../assets/Logo myspot-01.png'


class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            isLogged: false
        }
    }

    render() {
        return (
            <div>
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
                                <li>Inicio</li>
                                <li>Acerca de MySpot</li>
                                <li>Parqueaderos</li>
                                <li>Devs</li>   
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