import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from './screens/Home'
import User from './screens/User'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    path="/:user"
                    component={User}
                />
            </Switch>
        </BrowserRouter>
    )
}