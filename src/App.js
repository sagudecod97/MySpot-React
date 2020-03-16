import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return(
            <div className='app-container'>
                <div className='main'>
                    <Navbar />
                    <div>
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App