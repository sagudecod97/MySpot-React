import React, { Component } from 'react'

import '../styles/signUpCSS.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: ''
        }

        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(event) {
        const { name, value } = event.target
        this.setState( prevState => {
            prevState[name] = value

            return {
                ...prevState
            }
        })
    }

    render() {
        return (
            <div className='container-signup'>
                <div style={{marginLeft: '13%'}}>
                    <h1>Ingreso</h1>
                </div>

                <div>
                    <form>

                        <label>Email: </label>
                        <input 
                        name='userName'
                        onChange={this.inputHandler}
                        value={this.state.email}
                        />

                        <label>Contraseña: </label>
                        <input
                        type='password'
                        name='password'
                        onChange={this.inputHandler}
                        value={this.state.password}
                        />
                    </form>
                </div>

                <div className='signup-btn'>
                    <button
                     value='Registrarse'
                     onClick={() => {console.log(this.state)}}
                     >
                    Ingresar
                    </button>
                </div>
                
            </div>
        )
    }
}

export default Login