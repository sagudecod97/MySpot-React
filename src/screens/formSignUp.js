import React, { Component } from 'react'

import '../styles/signUpCSS.css'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                name: '',
                lastName: '',
                userName: '',
                phone: '',
                email: '',
                password: ''
            },
            isVisible: false,
            nameErr: ''
            
        }

        this.inputHandler = this.inputHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    inputHandler(event) {
        const { name, value } = event.target
        this.setState( prevState => {            
            if (name === 'email') {
                prevState.userName = value
                prevState.email = value
            } else if(name !== 'userName') {
                prevState.user[name] = value
            }

            return {
                ...prevState
            }
        })
    }

    submitHandler() {
        console.log(this.state.isVisible && this.state.nameErr === 'name')
        console.log(this.state)
        let submitObj = this.state.user

        if (
            submitObj.name.length === 0 || submitObj.lastName.length === 0 || submitObj.phone.length === 0
            || submitObj.email.length === 0 || submitObj.phone.length === 0 || submitObj.password.length === 0
            ) {
                return this.setState({ isVisible: true, nameErr: 'button'})
            }

        if (submitObj.name.length > 40) {
            return this.setState({ isVisible: true, nameErr: 'name'})
        } else if (submitObj.lastName.length > 40) {
            return this.setState({ isVisible: true, nameErr: 'lastName'})
        } else if (submitObj.phone.length !== 10) {
            return this.setState({ isVisible: true, nameErr: 'phone'})
        } else if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g.test(submitObj.email) === false) {
            return this.setState({ isVisible: true, nameErr: 'email'})
        } else if (submitObj.password.length < 6) {
            return this.setState({ isVisible: true, nameErr: 'password'})
        }

        console.log(this.state.user)
        this.setState({ isVisible: false, nameErr: false })
        fetch('http://18.233.97.235:3000/api/v1/user-signup/', {
            body: JSON.stringify(this.state.user),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div className='container-signup'>
                <div>
                    <h1>Registro Usuario</h1>
                </div>

                <div>
                    <form>
                        <label>Name: </label>
                        <input name='name'
                        onChange={this.inputHandler}
                        value={this.state.name}
                        />
                        <p 
                        className={
                            this.state.isVisible && this.state.nameErr === 'name' ? 'input-err' : 'hidden'
                        }
                        >
                            Nombre debe ser menor a 40 caracteres
                        </p>

                        <label>Apellidos: </label>
                        <input 
                        name='lastName'
                        onChange={this.inputHandler}
                        value={this.state.lastName}
                        />
                        <p
                        className={
                            this.state.isVisible && this.state.nameErr === 'lastName' ? 'input-err' : 'hidden'
                        }
                        >
                            Apellidos deben ser menor a 40 caracteres
                        </p>

                        <label>Celular: </label>
                        <input 
                        name='phone'
                        onChange={this.inputHandler}
                        value={this.state.phone}
                        />
                        <p
                        className={
                            this.state.isVisible && this.state.nameErr === 'phone' ? 'input-err' : 'hidden'
                        }
                        >
                            Celular debe tener 10 dígitos
                        </p>

                        <label>Email: </label>
                        <input 
                        name='email'
                        onChange={this.inputHandler}
                        value={this.state.email}
                        />
                        <p
                        className={
                            this.state.isVisible && this.state.nameErr === 'email' ? 'input-err' : 'hidden'
                        }
                        >
                            Debe ser un email correcto
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
                            La contraseña debe tener más de 6 caracteres
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
                     onClick={this.submitHandler}
                     >
                    Registrarse
                    </button>
                </div>
                
            </div>
        )
    }
}

export default SignUp