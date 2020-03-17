import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Screens
import LandingPage from './screens/landingPage'
import MySpotAbout from './screens/mySpotAbout'
import ParkingLots from './screens/parkingLots'
import Developers from './screens/developers'

class App extends Component {
    render() {
        return(
            <Router>
                <div className='app-container'>
                    <Navbar />
                    <div className='main'>
                        <Switch>
                            <Route path='/' exact component={LandingPage}/>
                            <Route path='/about-myspot' component={MySpotAbout}/>
                            <Route path='/parking-lots' component={ParkingLots}/>
                            <Route  path='/devs' component={Developers}/>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App