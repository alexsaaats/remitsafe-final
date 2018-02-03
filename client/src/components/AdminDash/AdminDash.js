import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
import {createBut, deleteVenBut, editVenBut} from "../helpers";

import { Menu, Image, Divider } from 'semantic-ui-react';

export default class InitRegistration extends React.Component {
    state = {
        email: '',
        password: '',
        submittedEmail: '',
        submittedPassword: ''
    };


    render() {
        return (
            <div>
                <Nav/>
                <div className='ui container'>
                    <div className='ui hidden padded divide'/>
                    <div className="ui three statistics">
                        <div className="ui statistic">
                            <div className="value">
                                50/50
                            </div>
                            <div className="label">
                                Verified Buyers
                            </div>
                        </div>
                        <div className="ui statistic">
                            <div className="text value" style={{textAlign: "center"}}>
                                EIGHTY
                            </div>
                            <div className="label">
                                Buyers/Vendors
                            </div>
                        </div>
                        <div className="ui statistic">
                            <div className="value">
                                25/30
                            </div>
                            <div className="label">
                                Verified Vendors
                            </div>
                        </div>
                        {/* close ui statistics */}
                    </div>
                    {/* close three statistics */}
                </div>
                {/* close ui container */}
                <div className="error"
                     style={{width: '100%', textAlign: 'center', marginTop: '1%', background: '#ff9c95'}}>
                    <a style={{color: 'black'}}>5 Unverifed Buyers/Vendors</a>
                </div>
                <div className='ui hidden padded divider'/>
                {/*   Admin Table  */}
                <table className='ui table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Something</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Coke a Cola</td>
                        <td>Vendor</td>
                        <td>Verified</td>
                        <td>Hmmm</td>
                    </tr>
                    <tr>
                        <td>My Company</td>
                        <td>Buyer</td>
                        <td>Pedingn</td>
                        <td>Hmmmmm</td>
                    </tr>
                    <tr>
                        <td>Info</td>
                        <td>Info</td>
                        <td>Info</td>
                        <td>Info</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan='4'>
                            <button className="ui button green" id="createVenBuyButton" onClick= {createBut}> Add
                                Vendor/Buyer
                            </button>
                            <button className="ui button red" id="deleteVenBuy" onClick={deleteVenBut}> Delete
                            </button>
                            <button className="ui button blue" id="editVenBuy" onClick={editVenBut}> Edit Vendor/Buyer
                            </button>

                            <div className="ui right floated pagination menu">
                                <a className="icon item">
                                    <i className="left chevron icon"></i>
                                </a>
                                <a className="item">1</a>
                                <a className="item">2</a>
                                <a className="item">3</a>
                                <a className="item">4</a>
                                <a className="icon item">
                                    <i className="right chevron icon"></i>
                                </a>
                            </div>
                        </th>
                    </tr>
                    </tfoot>
                </table>

                {/* close main */}          </div>
    )}
}