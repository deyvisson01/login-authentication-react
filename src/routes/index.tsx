import React from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import Home from '../pages/Home'
import NotFound from '../pages/components/NotFound'
import PrivateRoute from '../pages/components/PrivateRoute'
import {history} from '../history'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Cadastro} exact path="/cadastro"/>
            <PrivateRoute component={Home} exact path="/home"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Routes