import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
    CognitoUserPool,
    CognitoUserAttribute
} from "amazon-cognito-identity-js";
import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// import ReactDOM from "react-dom";
import appConfig from "../../config";
import '../../semantic/semantic.min.css';

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


/////// FUNCTIONS ==========================================================================

//Clearform -- Clears the login form
function clearform() {
    document.getElementById('emailinput').value = '';
    document.getElementById('passinput').value = '';
}
fetch("/", {
    method: "GET"
})
    .then((result) => {
        console.log("Result ", result);
    });
///// REACT CLASSES ==============================================================================


//Build the login form
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange=(e) => {
        this.setState({email: e.target.value});
    };

    handlePasswordChange=(e) => {
        this.setState({password: e.target.value});
    };

    handleSubmit= (e) => {
        // e.preventDefault();
        const email = this.state.email.trim();
        // const password = this.state.password.trim();
        // const attributeList = [
        //     new CognitoUserAttribute({
        //         Name: 'email',
        //         Value: email,
        //     })
        // ];
        console.log(email);
        // if (email === "admin@mail.com") {
        //     // window.location("/admin");
        //     this.transitionTo("/admin");
        // } else if (email === "buyer@mail.com") {
        //     window.location("/o_authenticated/dashboard");
        // } else if (email === "vendor@mail.com") {
        //     window.location("/a_authenticated/dashboard");
        // }

        // userPool.signUp(email, password, attributeList, null, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     console.log('user name is ' + result.user.getUsername());
        //     console.dir('call result: ' + result);
        //
        //     clearform();
        // });


    };

    render() {
        return (
            <div>
                <center><br/>
                    <div className={"ui raised card"} ref={"logincard"}>
                        <div style={{background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}} className={"content"}>
                            <div className={"ui container"}>
                                <div className={"header"}>
                                    <Image style={{width: "70%"}} src='../images/RemitSafe-logo-dark_small-transparent.png' />
                                </div>
                            </div>
                        </div>
                        <div className={"content"}>
                            <form style={{fontWeight: 700}} className={"ui form"}
                                  onSubmit={this.handleSubmit}>
                                <p>Login to access your account.</p>
                                <br/>
                                <label style={{
                                    display: "block",
                                    marginLeft: "-85%",
                                    paddingBottom: 2,
                                    fontWeight: 700
                                }}
                                       htmlFor="emailinput">Email</label>
                                <input type="text"
                                       ref="emailinput"
                                       className="field"
                                       value={this.state.email}
                                       placeholder={this.props.name}
                                       onChange={this.handleEmailChange}/>
                                <br/><br/>
                                <label style={{
                                    display: "block",
                                    marginLeft: "-75%",
                                    paddingBottom: 2,
                                    fontWeight: 700
                                }}
                                       htmlFor="passinput">Password</label>
                                <input type="password"
                                       ref="passinput"
                                       className="field"
                                       value={this.state.password}
                                       placeholder={this.props.name}
                                       onChange={this.handlePasswordChange}/>
                                <p style={{fontSize: '0.8em', marginLeft: '55%'}}>
                                    <Link
                                        style={{fontWeight: 300}} to="/help">Forgot your password?</Link></p>
                                <br/><br/>
                                {/*<input style={{color: '#003366', background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}  type="submit" value="Login" className="ui button info"/>*/}
                                <p style={{fontSize: '0.8em', marginLeft: '55%'}}>
                                    <Link
                                        style={{fontWeight: 300}} to="/help">Forgot your password?</Link></p>
                                <br/><br/>
                                <p style={{fontWeight: 300, width: "50%", padding: "4px", border: "2px solid ##bfbfbf", color: '#003366',
                                    background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}><Link
                                    style={{color: "#337aff"}}
                                    to="/admin">Login
                                </Link></p>
                                <br/><br/>
                                <hr/>
                                <br/>
                                <p style={{fontWeight: 300}}>Not a registered user? <Link style={{color: "#337aff"}}
                                                                                          onClick={() => clearform()}
                                                                                          to="/register">Register
                                    Now</Link></p>
                            </form>
                        </div>

                    </div>
                </center>
                <br/><br/>

                <div className={"ui center aligned section"}>
                    <div style={{textAlign: "center"}}
                         className={"ui-section center aligned ui-spacing-top-extra-large footer"}>


                        <div className={"ui-section ui-spacing-none ui-text-center"}>

  <span style={{fontSize: "0.8em"}} className={"ui-size-mini ui-color-secondary"}>
    © 2010-2018 NOWaccount Network Corporation. All rights reserved.
  </span>
                        </div>

                    </div>


                </div>
            </div>

        );
    }
}
