// import React from 'react'
// import { Button, Table} from 'semantic-ui-react';
// const AddRow = () =>
//     return(
//         <Table.Row
//                 <Button style={{padding: '10px', marginTop: '-19px'}}
//                         role={"button"} floated='right' color='blue' size='small' icon='add'
//                         onClick={this.props.handleAdd}/>
//            ) ;
//
// export default AddRow;
import React, {Component} from 'react';
import {Button, Header, Icon, Modal, Divider, Image, Input} from 'semantic-ui-react';


export default class AddRow extends Component {
    state = {};

    handleOpen = () => {
        this.setState({modalOpen: true})
    }

    handleClose = () => {
        this.setState({modalOpen: false})
    };

    // handleUpDate = () => {
    //     // this.props.handleUpdate()
    //     this.handleClose()
    // }

    render() {
        const {value} = this.state;
        console.log(this.state);
        return (
            <Modal trigger={<Button style={{
                textAlign: 'center',
                background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)',
                color: '#003366'
            }} onClick={this.handleOpen}>Add New Vendor</Button>}
                   open={this.state.modalOpen}
                   onClose={this.handleClose}>

                <Modal.Header style={{background: 'linear-gradient(2deg, rgba(196, 205, 229, 0.1), rgba(206, 221, 246, 0.1), rgba(220, 236, 255, 0.1))'}}>
                    <Header as='h3' icon textAlign='center'>
                        <Icon name='user' circular/>
                        <Header.Content>
                            Send Vendor RemitSafe® Request
                        </Header.Content>
                    </Header>
                </Modal.Header>

                <Modal.Content style={{
                    background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}>
                    <form onSubmit={this.handleSubmit} className="ui form attached fluid segment">
                        <div className="field">
                            <label
                                htmlFor={'companyName'}>Company Name</label>
                            <div className="field">
                                <input required="true" style={{paddingBottom: 10}} type="text" name="companyName"
                                       placeholder="Company Name"/>
                            </div>
                        </div>
                        <Divider hidden/>
                        <div className="three fields">
                            <div className="field">
                                <label
                                    htmlFor={'contactName'}>Contact Name</label>
                                <Input required="true" type="text"
                                       name="contactName"
                                       placeholder="Jane Doe"/>
                            </div>
                            <br/>
                            <div className="field">
                                <label
                                    htmlFor={'contactPhone'}>Contact Phone Number</label>
                                <Input required="true" type="tel"
                                       name="contactPhone"
                                       placeholder="212-878-1876"/>
                            </div>
                            <br/>
                            <div className={"field"}>
                                <label
                                    htmlFor={'contactEmail'}>Email</label>
                                <Input required="true" type="email"
                                       name="contactEmail"
                                       placeholder="vendorEmail@abc.com"/>
                            </div>
                        </div>
                    </form>
                </Modal.Content>

                <Modal.Actions style={{background: '#b3bbbf'}}>
                    <Button style={{color:'#003366', background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)' }} onClick={this.handleClose}>
                        <Icon name='send'/> Send Request
                        Update
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
