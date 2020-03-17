import React, { Component } from 'react'

import '../styles/developersCSS.css'

import minSantiPhoto from '../assets/SAA-MiniFotoBigger.png'
import minThomasPhoto from '../assets/TM-Foto.png'

class Developers extends Component {
    render() {
        return (
            <div className='container-devs'>
                <h1 style={{marginBottom: '5%'}}>Desarrolladores!</h1>

                <div className='content-container'>

                    <div className='image-dev'>
                        <img src={minSantiPhoto} alt='Santiago'/>
                    </div>

                    <div className='description-dev'>
                        <h2>Santiago Agudelo Alvarez ES/EN</h2>
                        <p>
                            Soy desarrollador de Software FullStack, con conocimiento de diferentes lenguajes de
                            programación, como: JavaScript, Python y C. Además, de manejar diferentes Frameworks como:
                            Express, ReactJs, Flask, entre otros. <br/>
                            Siento, especialmente pasión por el desarrollo web, tanto en la parte del cliente, como
                            en el servidor utilizando tecnologías como NodeJs.<br /><br />
                            Soy una apasionado por la tecnología, por la web y su capacidad de conectar personas, brindar
                            soluciones, generar impacto y transformar la forma en que las sociedades se relacionan.
                        </p>
                    </div>

                    <div className='container-networks'>
                        <ul className='list-networks'>
                            <li><a href='https://github.com/sagudecod97'>GitHub</a></li>
                            <li><a href='https://www.linkedin.com/in/santi-agudelo/'>LinkedIn</a></li>
                            <li><a href='https://twitter.com/sagudecod97'>Twitter</a></li>
                        </ul>
                    </div>

                </div>
                <hr/>

                <div style={{marginTop: '10%'}} className='content-container'>

                    <div style={{order: 2}} className='image-dev'>
                        <img src={minThomasPhoto} alt='Thomas'/>
                    </div>

                    <div style={{order: 1}} className='description-dev'>
                        <h2>Thomas Montoya ES/EN</h2>
                        <p>
                            Soy un desarrollador de software full-stack no convencional. Mi pasión por la tecnología me motivó
                             a pasar de un rol de ventas y comercial donde tengo más de 5 años de experiencia. He trabajado con 
                             clientes de alto impacto.  <br/>
                             Creo que las cosas verdaderamente asombrosas se logran no por individuos aislados sino por equipos 
                             motivados y enfocados.<br /><br />
                             Soy una persona amigable y amable, analista y pensador abstracto, me gusta hablar con la gente. 
                             Estoy muy ansioso por ayudar. Soy eficaz en responder a las preguntas, comentarios y objeciones de los demás.
                        </p>
                    </div>

                    <div style={{order: 3}} className='container-networks'>
                        <ul className='list-networks'>
                            <li><a href='https://github.com/thomasmontoya123'>GitHub</a></li>
                            <li><a href='https://www.linkedin.com/in/thomas-montoya-05966a188/'>LinkedIn</a></li>
                            <li><a href='https://twitter.com/Thomasmontoya95'>Twitter</a></li>
                        </ul>
                    </div>

                </div>
                
            </div>
        )
    } 
}

export default Developers