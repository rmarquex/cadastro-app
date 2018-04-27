import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Cadastro from '../cadastro/cadastro'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/cadastro' />
    </Router>
)