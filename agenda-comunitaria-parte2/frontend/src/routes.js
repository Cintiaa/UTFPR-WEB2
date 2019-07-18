import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Evento from './pages/evento';
import { isAuthenticated } from './services/auth.js';


const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route
        { ... rest}
        render={props =>
            isAuthenticated() ? (
                <Component { ... props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )

        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="/evento" component={Evento} />
        </Switch>
    </BrowserRouter>
);


export default Routes;

