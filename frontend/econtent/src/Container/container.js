import { Component } from 'react';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'
import Dashboard from '../Dashboard/Dashboard'
import ChannelsPage from '../ChannelsPage/ChannelsPage';
import UploadContent from '../UploadContent/uploadcontent';
import Profile from '../Profile/Profile';


class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/allchannel" component={ChannelsPage} />
                        <Route exact path="/uploadcontent" component={UploadContent} />
                        <Route exact path='/userprofile/:id' component={Profile} />
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Container;