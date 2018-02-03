
import React from 'react';
import {Divider, Image, Menu, Button} from 'semantic-ui-react';
// import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';


const src = "../images/Number-4.png";
const srcMid = "../images/RemitSafe.net.ico";
const srcCartoon = "../images/404.png";

const NotFound = () => (
    <div>
        <Menu centered secondary style={{fontWeight: '700', background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}>
            <Menu.Item>
                <img style={{width: '7.5em'}} src='../images/RemitSafe-logo-dark_small-transparent.png'/>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item name='Logout' style={{color: '#3b5998'}}>
                    <Link to="/logout"> Logout </Link>
                </Menu.Item>
                <Menu.Item name='Register' style={{color: '#3b5998'}}>
                    <Link to="/register"> Register </Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        <Divider hidden/>
        <div className={"ui container center aligned"}>
            <Image.Group >
                <Image src={src} size='tiny' centered />
                <Image src={srcMid} size='tiny' centered />
                <Image src={src} size='tiny' centered />
            </Image.Group>
        </div>

        <Image src={srcCartoon} size='medium' centered />

        <div className={"ui container center aligned"}>
            <h2 style={{fontSize: '50px', textAlign: 'center'}} >
                Page Not Found
            </h2>
            <Divider hidden/>

        </div>
        <div style={{width: '50%'}} className={"ui container center aligned"}>
            <Divider hidden/>

            <h3 style={{textAlign: 'center'}} >
                No need to worry, we will make sure you get to your <Link to="/login">intended destination ... </Link> it's what we do.
            </h3>
        </div>
        <Divider hidden/>

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
);

export default NotFound;