import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Image, Button} from 'semantic-ui-react';

import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
    CognitoUserPool,
    CognitoUserAttribute
} from "amazon-cognito-identity-js";
import appConfig from "../../config";
// import '../semantic/semantic.min.css';

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


//Clearform -- Clears the email input in password Assist form
function clearform() {
    document.getElementById('emailinput').value = '';
}


export default class PasswordAssist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    handleChange = (e) => {
        this.setState({email: e.target.value});
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email.trim();
        const attributeList = [
            new CognitoUserAttribute({
                Name: 'email',
                Value: email
            })
        ];
        userPool.signUp(email, null, attributeList, null, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.dir('call result: ' + result);

            clearform();
        });
    };

    render() {
        return <div>
            <div className={"ui hidden divider"}/>
            <div style={{margin: '0 auto'}} className="ui container">
                <center>
                    <Image style={{marginBottom: '15px', width: '160px'}}
                           src='../images/RemitSafe-logo-dark_small-transparent.png' className={"ui item"}/>
                </center>
            </div>
            <center>
                <div className={"ui raised card"} ref="logincard">
                    <div className={"content"}>
                        <div className={"ui container"}>
                            <div className={"header"}>
                            </div>
                        </div>
                        <div className="content">
                            <form onSubmit={this.handleSubmit} style={{width: '150%'}} className={"ui form"}>
                                <h1 style={{textAlign: 'left', fontSize: 21, fontWeight: 500}}>Login Assistance</h1>
                                <p style={{fontSize: 12, textAlign: 'left'}}>Enter the email address associated with
                                    your RemitSafe account.</p>
                                <h2 ref="hiddenAssist" style={{display: 'none'}} className={"ui hidden"}>Please check
                                    your email for instructions on how to reset your account</h2>
                                <label style={{
                                    display: 'block',
                                    marginLeft: '-85%',
                                    paddingBottom: 2,
                                    fontSize: 12,
                                    fontWeight: 700
                                }} htmlFor="emailinput">Email</label>
                                <input type="text" ref="emailinput" className={"field"}
                                       value={this.state.email}
                                       placeholder="Email"
                                       onChange={this.handleChange}/>
                                <br/><br/>
                                <input style={{
                                    background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)',
                                    fontSize: 12,
                                    width: '100%'
                                }} onSubmit={this.handleSubmit} type="submit" defaultValue="Continue"
                                       className={"ui button info"}/>
                                <br/>
                            </form>
                        </div>
                    </div>
                </div>
            </center>
            <div className={"ui hidden divider"}/>
            <center>
                <div style={{width: '320px', borderColor: '#FFF'}} className={"ui center aligned grid"}>
                    <div className={"ui middle aligned grid"}>
                        <p style={{marginBottom: '5px', marginLeft: '70px', fontSize: '13px', fontWeight: 500}}>Has your
                            email
                            changed?</p>
                        <p style={{fontSize: '12px', textAlign: 'left'}}>If you are having trouble remembering or no
                            longer use the email address associated with your RemitSafe account, please contact <span>
                            <Button
                                style={{
                                    fontSize: '1em',
                                    border: 'none',
                                    padding: '0',
                                    background: 'none',
                                    fontWeight: '700',
                                    color: '#000',
                                    textShadow: "(-1px -1px 0 #878e98, 1px -1px #878e98,-1px 1px 0 #878e98, 1px 1px 0 #878e98')"
                                }}
                                as='a'
                                href='http://remitsafe.wpengine.com'
                                target='_blank'
                            > Customer Service </Button>for help restoring access to your account.</span></p>
                        {/*<Link to="remitsafe.net/support/"> Customer Service</Link> for help restoring access to your account.</p>*/}
                        <h2 ref="hiddenAssist" style={{display: 'none'}} className={"ui hidden"}>Please check your
                            email for instructions on how to reset your account</h2>
                    </div>
                </div>
            </center>
            <br/><br/>
            <div className={"ui hidden divider"}/>
            <div className={"ui center aligned grid"}>
                <div style={{textAlign: 'center'}}
                >
                    <div className={"ui hidden divider"}/>
                    <div className={"ui hidden divider inner"}/>
                    <div className={"ui-section ui-spacing-small ui-text-center ui-size-mini"}>
                        <span className={"ui footer separator"}/>
                        <div className={"ui center aligned grid"}>
                <span style={{fontSize: '0.8em'}}>
                © 2010-2018 NOWaccount Network Corporation. All rights reserved.
            </span>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    }
};





