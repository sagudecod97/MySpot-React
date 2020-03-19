import React, { Component } from 'react'

import '../styles/signUpCSS.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                userName: '',
                password: ''
            },
           nameErr: '',
           isVisible: false
        }

        this.inputHandler = this.inputHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    inputHandler(event) {
        const { name, value } = event.target
        this.setState( prevState => {
            prevState['user'][`${name}`] = value
            return {
                ...prevState
            }
        })
    }
    submitHandler() {
        let submitObj = this.state['user']

        if (submitObj.userName.length === 0 || submitObj.password.length === 0) {
                return this.setState({ isVisible: true, nameErr: 'button'})
        }

        if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g.test(submitObj.userName) === false) {
            return this.setState({ isVisible: true, nameErr: 'userName'})
        } else if (submitObj.password < 6) {
            return this.setState({ isVisible: true, nameErr: 'password'})
        }

        this.setState({ isVisible: false, nameErr: false })
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
                        <p
                        className={
                            this.state.isVisible && this.state.nameErr === 'userName' ? 'input-err' : 'hidden'
                        }
                        >
                            El email no está registrado o es incorrecto
                        </p>

                        <label>Contraseña: </label>
                        <input
                        type='password'
                        name='password'
                        onChange={this.inputHandler}
                        value={this.state.password}
                        />
                        <p
                        className={
                            this.state.isVisible && this.state.nameErr === 'password' ? 'input-err' : 'hidden'
                        }
                        >
                            Contraseña incorrecta
                        </p>

                    </form>
                </div>

                <div className='signup-btn'>
                    <p
                    className={
                        this.state.isVisible && this.state.nameErr === 'button' ? 'fields-error' : 'hidden'
                    }
                    >
                        Todos los campos son requeridos
                    </p>
                    <button
                     value='Registrarse'
                     name='submit'
                     onClick={this.submitHandler}
                     >
                    Ingresar
                    </button>
                </div>
                
            </div>
        )
    }
}

export default Login