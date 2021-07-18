import { Component } from 'react';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Dashboard from '../Dashboard/Dashboard';
import Uploadcontent from '../Container/Uploadcontent';


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
                    <Route exact path="/login" component={Login} />  
                    <Route exact path="/Uploadcontent" component={Uploadcontent}/>  
                   
                </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Container;