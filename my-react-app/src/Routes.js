import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Deals from './components/Deals';
import Contact from './components/Contact'
import Home from './components/Home';
import Offer from './components/Offer';
import Signin from './components/User/Signin';
import Signnup from './components/User/Signup';



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/offer" component={Offer} />
                <Route exact path="/signup" component={Signnup}/>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/deals" component={Deals} />
                <Route exact path="/contact" component={Contact}/>
                
                

            </Switch>

        </Router>
    )
}

export default Routes
