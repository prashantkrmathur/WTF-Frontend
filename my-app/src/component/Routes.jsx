import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/gym' component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes