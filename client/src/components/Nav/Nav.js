import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react';




const Nav = () =>
    <Menu secondary style={{fontWeight: '700', background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}>
        <Menu.Item>
            <img style={{width: '7.5em'}} src='../images/RemitSafe-logo-dark_small-transparent.png'/>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item name='Logout' style={{color: '#3b5998'}}>
                <Link to="/logout"> Logout </Link>
            </Menu.Item>
        </Menu.Menu>
    </Menu>;

export default Nav;

