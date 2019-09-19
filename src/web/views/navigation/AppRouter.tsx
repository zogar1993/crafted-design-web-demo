import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AncestriesScreen from "web/views/ancestries/AncestriesScreen";
import {provider} from "core/Provider"

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <AncestriesScreen provider={provider}/>}/>
            </Switch>
        </Router>
    )
}

