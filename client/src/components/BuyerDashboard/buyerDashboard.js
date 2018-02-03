import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Statistic, Label, Button } from 'semantic-ui-react'
import AddRow from '../BuyerDashboard/EditTable/addRow';
import TableDynamic from '../BuyerDashboard/table';
import axios from 'axios';


// import EmailModal from '../BuyerDashboard/EditTable/emailModal';



import {Menu, Image, Divider} from 'semantic-ui-react';

export default class InitRegistration extends Component {
    state = {
        email: '',
        password: '',
        submittedEmail: '',
        submittedPassword: ''
    };

    constructor(props) {
        super(props);

        const vendors =  axios.get('/');
        this.state = {
            vendors
        }
    }

    // handleChange = (e, {name, value}) => this.setState({[name]: value});
    //
    // handleSubmit = () => {
    //     const {email, password} = this.state;
    //
    //     this.setState({
    //         submittedEmail: email,
    //         submittedPassword: password
    //     })
    // };


    render() {
        const name = this.state.name;
        return <div>
            <Menu secondary style={{fontWeight: '700', background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}>
                <Menu.Item>
                    <img style={{width: '7.5em'}} src='../../../../images/RemitSafe-logo-dark_small-transparent.png'/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='Logout' style={{color: '#3b5998'}}>
                        <Link to="/logout"> Logout </Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <div className="ui hidden padded divider"/>
            <div className="ui three statistics">
                <div style={{flex: '0 0 23.33%'}} className="ui statistic">
                    <div className="value">88</div>
                    <div className="label">Verified Vendors</div>
                </div>
                <div style={{flex: '0 0 23.33%'}} className="ui statistic">
                    <div className="value">12</div>
                    <div className="label">Unverified &amp; Pending Vendors</div>
                    <AddRow/>
                </div>
                <div style={{flex: '0 0 23.33%'}} className="ui statistic">
                    <div className="value">100</div>
                    <div className="label"># Vendors</div>
                </div>
            </div>
            <br/>
            <Divider hidden/>
            <div style={{marginBottom: '15%'}} className="ui container">
                <TableDynamic/>
            </div>
            <div style={{background: '#878e98'}} className="ui inverted center aligned footer segment">
                <div className="container">
                    <div className="ui hidden divider"/>
                    <Image style={{margin: "0 auto", width: "150px", height: "30px"}}
                           src='../../../../images/RemitSafe-logo-dark_small-transparent.png'
                           className={"ui item"}/>
                    <br/>
                    <p style={{fontSize: '.8em'}}>Copyright © 2010-2018 NOWaccount Network Corporation. All rights
                        reserved. Want to <span>
                            <Button
                                style={{fontSize: '0.95em', border: 'none', padding: '0', background: 'none', color: 'greenyellow', textShadow: "(-1px -1px 0 #878e98, 1px -1px #878e98,-1px 1px 0 #878e98, 1px 1px 0 #878e98')", fontWeight: '700'}}
                                as='a'
                                href='http://remitsafe.wpengine.com'
                                target='_blank'
                            > learn more </Button>?</span></p>
                </div>
                <br/>
            </div>


        </div>

    }
}