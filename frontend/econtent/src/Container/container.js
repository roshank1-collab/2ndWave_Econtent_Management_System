import { Component } from 'react';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'
import Dashboard from '../Dashboard/Dashboard'
import ChannelsPage from '../ChannelsPage/ChannelsPage';
import UploadContent from '../UploadContent/uploadcontent';
import BeforeLogin from './beforeloginpage';
import AboutUs from './aboutus';
import OurTeam from './ourteam';
import CareerWithUs from './careerwithus';
import Profile from '../Profile/Profile';
import ContactUs from './contactus';
<<<<<<< HEAD
import Category from '../catagories/catagories';
=======
import Category from '../Container/Category';
import contents from '../UploadContent/contents';
import Services from '../Container/Services';
import Terms from '../Container/Termsand Condition'
import ProfileUpdate from '../Profile/ProfileUpdate';
>>>>>>> 5435bc15a4e06f62e19f56b31663e3ba539c7cb8


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
                        <Route exact path="/allchannel" component={ChannelsPage} />
                        <Route exact path="/uploadcontent/:id" component={UploadContent} />
                        <Route exact path="/uploadcontent/:id" component={UploadContent} />
                        <Route exact path="/aboutus" component={AboutUs} />
                        <Route exact path="/catagories/:item" component={Category} />
                        <Route exact path="/ourteam" component={OurTeam} />
                        <Route exact path="/career" component={CareerWithUs} />
                        <Route exact path="/userprofile/:id" component={Profile} />
                        <Route exact path="/profileupdate/:id" component={ProfileUpdate} />
                        <Route exact path="/contactus" component={ContactUs} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/terms" component={Terms}/>
                        <Route exact path="/category" component={Category}/>
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Container;
