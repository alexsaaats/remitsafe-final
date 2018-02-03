import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Image, Message, Menu, Button} from 'semantic-ui-react'

const srcAd = "../../../images/ad-1-nowaccount.png";

export default class Logout extends Component {
    state = {};

    render() {
        return (
            <div>
                <Menu secondary style={{fontWeight: '700', background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}>
                    <Menu.Item>
                        <img style={{width: '7.5em'}} src='../images/RemitSafe-logo-dark_small-transparent.png'/>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name='Login' style={{color: '#3b5998'}}>
                            <Link to="/"> Login </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <div className="ui hidden divider"/>
                <div className="ui container">
                    <h4 className="ui header">
                        Thank you for using RemitSafe®
                    </h4>
                    <div className="ui hidden divider"/>
                    <Image
                        src={srcAd} centered
                        height='250%'
                        size='massive'
                        as='a'
                        href='https://app.nowaccount.com/Account/Create?source=RemitSafe'
                        target='_blank'
                        fluid
                    />
                    <div className="ui hidden divider"/>
                    <div className="ui hidden divider"/>
                </div>
                <br/><br/>
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
        )
    }
}
