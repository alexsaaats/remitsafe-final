import React, {Component} from 'react';
import Nav from '../../Nav/Nav.js';
import TermsAndConditions from './termsAndConditions';
import {Link} from 'react-router-dom';
import {Button, Input, Image, Checkbox, Icon, Divider} from 'semantic-ui-react'
import axios from 'axios';

export default class InitRegistration extends Component {
    // state = {
    //     email: '',
    //     password: '',
    //     role: '',
    //     checked: false
    // };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            //role: '',
            checked: false
        }
    }

    toggle = () => this.setState({checked: !this.state.checked});

    handleChange = (e) => {
        const newState = this.state;
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password } = this.state;


        axios.post("/register", { email, password }) // Also add role here
            .then((result) => {
            //    if first if statement comes back push them back to login
                if (result === "Denied") {
                    window.location("/");
                } else if (result === "Buyer") {
                    window.location("/register/omega")
                } else if (result === "Vendor") {
                    window.location("register/alpha")
                }
            })

    };


    render() {
        return (
            <div>
                <Nav/>
                <Divider hidden/>
                <Divider hidden/>
                <div className="ui raised container segment"
                     style={{background: 'linear-gradient(2deg, rgba(196, 205, 229, 0.1), rgba(206, 221, 246, 0.1), rgba(220, 236, 255, 0.1))'}}>
                    <div className="ui container">
                        <div className="ui attached message">
                            <div className="header">
                                <h3>RemitSafe® Registration</h3>
                            </div>
                            <p><i>Please, fill out the form below to register for a new account.</i></p>
                        </div>
                        <form onSubmit={this.handleSubmit} className="ui form attached fluid segment">
                            <div className="two fields">
                                <div className="field">
                                    <label>Account Type</label>
                                    <select required="true" className="ui fluid dropdown">
                                        <option value/>
                                        <option name="role" value={this.state.role}>Remitter (Buyer)</option>
                                        <option name="role" value={this.state.role}>Remittee (Vendor)</option>
                                    </select>
                                </div>
                                <div className="field">
                                </div>
                            </div>
                            <div className={"two fields"}>
                                <div className={"field"}>
                                    <label
                                        htmlFor="email">Email</label>
                                    <Input
                                        required="true"
                                        placeholder="Enter your email address"
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}/>
                                </div>
                                <br/>
                                <div className="field">
                                    <label
                                        htmlFor="password">Password</label>
                                    <Input
                                        required="true"
                                        placeholder="Enter a password"
                                        type="password"
                                        name='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}/>
                                </div>
                            </div>
                            <TermsAndConditions/>
                            <div style={{paddingBottom: '5%'}} className="ui clearing inline field">
                                <br/><br/>
                                <Button animated style={{marginTop: '-4%', background: '#3b5998'}}
                                        className="ui right floated primary button">
                                    <Button.Content visible>
                                        <Link style={{color: '#FFF'}} to="#">Register</Link>
                                    </Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='right arrow'/>
                                    </Button.Content>
                                </Button>
                            </div>
                        </form>


                        <div className="ui attached primary message" style={{background: '#b3bbbf'}}>
                        </div>
                        <div className="ui hidden divider"/>
                    </div>
                </div>
                    <br/>
                    <div className="ui hidden divider"/>
                    <div className="ui hidden divider"/>
                    <div style={{background: '#878e98'}} className="ui inverted center aligned footer segment">
                        <div className="container">
                            <div className="ui hidden divider"/>
                            <Image
                                style={{margin: "0 auto", width: "150px", height: "30px"}}
                                src='../images/RemitSafe-logo-dark_small-transparent.png'
                                className={"ui item"}/>
                            <br/>
                            <p style={{fontSize: '.8em'}}>Copyright © 2010-2018 NOWaccount Network Corporation. All
                                rights
                                reserved. Want to <span>
                            <Button
                                style={{
                                    fontSize: '0.95em',
                                    border: 'none',
                                    padding: '0',
                                    background: 'none',
                                    color: 'greenyellow',
                                    textShadow: "(-1px -1px 0 #878e98, 1px -1px #878e98,-1px 1px 0 #878e98, 1px 1px 0 #878e98')"
                                }}
                                as='a'
                                href='http://remitsafe.wpengine.com'
                                target='_blank'
                            > learn more </Button>?</span></p>
                        </div>
                        <br/>
                    </div>
                </div>


        )
    }
}

