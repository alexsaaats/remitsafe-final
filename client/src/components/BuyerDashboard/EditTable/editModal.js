import React, {Component} from 'react';
import {Button, Modal, Icon, Form, Divider, Input, Select, Header} from 'semantic-ui-react';
import EditHoverStyle from '../EditTable/EditHoverStyle';

const options = [
    { key: 'y', text: 'Yes', value: 'yes' },
    { key: 'n', text: 'No', value: 'no' },
    { key: 'p', text: 'Pending', value: 'pending' },
]
export default class EditorV extends Component {
    state = {};

    handleChange = (e, { value }) => this.setState({ value });


    handleOpen = () => {
        this.setState({modalOpen: true})
    };

    handleClose = () => {
        this.setState({modalOpen: false})
    };

    render() {
        const { value } = this.state;
        return (
            <Modal
                trigger={<Button role={"button"} style={{background: 'transparent'}} onClick={this.handleOpen} icon>
        <EditHoverStyle/>
    </Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>



                <Modal.Header style={{background: 'linear-gradient(2deg, rgba(196, 205, 229, 0.1), rgba(206, 221, 246, 0.1), rgba(220, 236, 255, 0.1))'}}>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular />
                    <Header.Content>
                        Edit Vendor
                    </Header.Content>
                </Header>
                </Modal.Header>
                <Modal.Content style={{background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}>
                    <Form>
                    <Form.Group widths='equal'>
                    <Form.Field control={Input} label='Company Name' type="text" placeholder='Company Name' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Contact Name' type="text" placeholder='Contact Name' />
                        <Form.Field control={Input} label='Phone Number' type="tel" placeholder='Phone number' />
                    <Form.Field control={Input} label='Email' type="email" placeholder='Email' />
                    </Form.Group>
                    <Divider hidden/>
                    </Form>
                </Modal.Content>
                <Modal.Actions style={{background: '#b3bbbf'}}>
                    <Button style={{color:'#003366', background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)' }} onClick={this.handleClose}>Update</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
