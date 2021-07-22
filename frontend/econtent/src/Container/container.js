import { Component } from 'react';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'
import Dashboard from '../Dashboard/Dashboard'
import ChannelsPage from '../ChannelsPage/ChannelsPage';
import UploadContent from '../UploadContent/uploadcontent';
import BeforeLogin from './beforeloginpage';
import AboutUs from './aboutus';
import WhyChooseUs from './whychooseus';
import OurTeam from './ourteam';
import CareerWithUs from './careerwithus';
import Profile from '../Profile/Profile';


class Container extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/" component={BeforeLogin} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/allchannel" component={ChannelsPage}/>   
                        <Route exact path="/uploadcontent" component={UploadContent}/>     
                        <Route exact path="/uploadcontent" component={UploadContent}/>   
                        <Route exact path="/aboutus" component={AboutUs}/>   
                        <Route exact path="/whychooseus" component={WhyChooseUs}/>  
                        <Route exact path="/ourteam" component={OurTeam}/>  
                        <Route exact path="/career" component={CareerWithUs}/>  
                        <Route exact path="/career" component={CareerWithUs}/>  
                        <Route exact path="/myprofile/:id" component={Profile}/>  
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Container;
