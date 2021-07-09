import { Component } from 'react';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'
import Dashboard from '../Dashboard/Dashboard'


class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                   
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path = "/dashboard" component={Dashboard}/>
                </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Container;