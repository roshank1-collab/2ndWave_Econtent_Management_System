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
import Category from '../catagories/catagories';
import Services from '../Container/Services';
import Terms from '../Container/Termsand Condition'
import ProfileUpdate from '../Profile/ProfileUpdate';
import Buycontent from '../BuyContent/Buycontent';
import paywithkhalti from '../BuyContent/paywithkhalti';
import paywithesewa from '../BuyContent/paywithesewa';
import UserView from '../ChannelsPage/UserView';
import { video } from './../videoChat/video';
import LookInside from '../ChannelsPage/LookInside';
import Announcement from './announcement';
import Allcontent from './allcontent';
import Test from './test';
import indexlive from '../LiveCommunication/src/indexlive';




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
                        <Route exact path="/terms" component={Terms} />
                        <Route exact path="/buycontent/:id" component={Buycontent} />
                        <Route exact path="/paywithkhalti/:id" component={paywithkhalti} />
                        <Route exact path="/paywithesewa/:id" component={paywithesewa} />
                        <Route exact path="/viewuser/:id" component={UserView} />
                        <Route exact path = '/lookinside/:id' component = {LookInside}/>
                        <Route exact path = '/Location' component = {Location}/>
                        <Route exact path = '/communication' component = {indexlive}/>
                      
                        {/* <Route exact path = "/communication" component = {indexlive}/>*/}
                        <Route exact path="/communication" component={video} />

                        <Route exact path = '/lookinside/:id' component = {LookInside}/>
                        <Route exact path = '/announcement' component = {Announcement}/>
                        <Route exact path = '/allitem' component = {Allcontent}/>
                        <Route exact path = '/test' component = {Test}/>
                        
                 
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Container;
