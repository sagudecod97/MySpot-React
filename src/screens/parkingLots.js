import React, { Component } from 'react'

import '../styles/parkinLotsCSS.css'
import Map from '../components/Map'

class ParkingLots extends Component {
    render() {
        return (
            <div className='container-parking'>
                
                <div>
                    <div>
                        <h1 className='title'>¡Haz tu reserva!</h1>
                    </div>
                    <div>
                        <p className='text-title'>
                            ¡Solamente ingresa la direccion que deseas y haz click en el
                            parquedero que prefieras!
                        </p>
                    </div>
                </div>

                <div className='reserve'>
                    <p className='reserve-text'>
                        Necesitas registrarte para reservar
                    </p>
                </div>
                
                <div className='map'>
                    <Map />
                </div>

            </div>
            
        )
    } 
}

export default ParkingLots