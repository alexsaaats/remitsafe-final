import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Checkout from './Checkout';


//AWS Cognito Imports
import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
    CognitoUserPool,
    CognitoUserAttribute
} from "amazon-cognito-identity-js";

// Component Imports

import Login from "./components/Login/login";
import Logout from "./components/Logout/logout";
import InitRegistration from "./components/Registration/Global Registration Page/globalregistrationpage";
import BuyerRegistration from "./components/Registration/Buyer/buyer";
import VendorRegistration from "./components/Registration/Vendor/vendor";
import PasswordAssist from "./components/PasswordAssist/passwordassist";
import VendorDashboard from './components/VendorDashboard/vendorDashboard';
import BuyerDashboard from './components/BuyerDashboard/buyerDashboard';
import NotFound from "./components/NotFound/NotFound";
import TableDynamic from "./components/BuyerDashboard/table";
import Admin from './components/AdminDash/AdminDash';
import VendorRevisited from './components/VendorDashboard/vendorRevisited';



//Config file imports
import appConfig from "./config";
import './semantic/semantic.min.css';


///SETTINGS AND CONSTANTS ==================================================================
//Basic AWS Config settings
Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: appConfig.IdentityPoolId
});

//Define the AWS User pool and get the config values from appConfig.js
const userPool = new CognitoUserPool({
    UserPoolId: appConfig.UserPoolId,
    ClientId: appConfig.ClientId,
});


const App = () =>
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={Login} />
                {/* Initial Registration */}
            <Route exact path="/register" component={InitRegistration} />
                {/* Vendors Registration */}
            <Route exact path="/register/alpha" component={VendorRegistration} />
            <Route exact path="/alpha_road" component={VendorRevisited} />
                {/* Buyers Registration */}
            <Route exact path="/register/omega" component={BuyerRegistration} />
                {/* Dashboards */}
            <Route exact path="/a_authenticated/dashboard" component={VendorDashboard} />
            <Route exact path="/o_authenticated/dashboard" component={BuyerDashboard} />
            <Route exact path='/admin' component={Admin} />

                {/* Help and Logout */}
            <Route exact path="/help" component={PasswordAssist} />
            <Route exact path="/logout" component={Logout} />
            {/*<Route exact path="/test" component={TableDynamic} />*/}
            <Route component={NotFound} />
            </Switch>
        </div>
    </Router>;

export default App;


