import React, {Component} from 'react';
import {Button, Modal, Icon, Form, Divider, Input, Header, Checkbox, Container, Popup} from 'semantic-ui-react';

export default class TermsAndConditions extends Component {
    state = {
        checked: false
    };


    toggle = () => this.setState({checked: !this.state.checked});

    handleOpen = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({modalOpen: true});
    };

    handleClose = () => {
        this.setState({modalOpen: false});
    };

    userAgreed = () => {
        this.setState({checked: true});
        this.handleClose();
    };

    unsatisfactoryTerms = () => {
        this.setState({checked: false});
        this.handleClose();
    };

    render() {
        const {value} = this.state;
        return (
            <Modal
                trigger={<Checkbox
                    onClick={this.handleOpen}
                    label= 'I agree to the terms and conditions 🌀'
                    checked={this.state.checked}
                />}
                open={this.state.modalOpen}
                onClose={this.handleClose}>
                <Modal.Header style={{background: 'linear-gradient(2deg, rgba(196, 205, 229, 0.1), rgba(206, 221, 246, 0.1), rgba(220, 236, 255, 0.1))'}}>
                    <Header as='h2' icon textAlign='center'>
                        <Header.Content>
                            <Icon name='handshake'/>
                            Terms and Conditions of Use
                        </Header.Content>
                    </Header>
                </Modal.Header>
                <Modal.Content style={{background: 'linear-gradient(2deg, rgba(196, 205, 229, 0.3), rgba(206, 221, 246, 0.3), rgba(220, 236, 255, 0.3))'}}>
                    {/*<div className="ui hidden padded divider"/>*/}
                    <div className="ui column stackable grid container">
                        <div className="column">
                            <div style={{background: 'linear-gradient(2deg,#c4cde5,#ceddf6,#dcecff)'}}
                                 className="ui attached segment">
                                <Container onSubmit={this.handleChange} className="ui form attached fluid segment">
                                    <br/>
                                    <p>These Website Standard Terms And Conditions (these “Terms” or these “Website
                                        Standard Terms And Conditions”) contained herein on this webpage, shall govern
                                        your use of this website, including all pages within this website (collectively
                                        referred to herein below as this “Website”). These Terms apply in full force and
                                        effect to your use of this Website and by using this Website, you expressly
                                        accept all terms and conditions contained herein in full. You must not use this
                                        Website, if you have any objection to any of these Website Standard Terms And
                                        Conditions. This Website is not for use by any minors (defined as those who are not at least
                                        18 years of age), and you must not use this Website if you a minor.</p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Intellectual Property Rights.</h4>

                                        Other than content you own, which you may have opted to include on this Website,
                                        under these Terms, RemitSafe®
                                        and/or its licensors own all rights to the intellectual property and material
                                        contained in this Website, and all such rights are reserved.
                                        You are granted a limited license only, subject to the restrictions provided in
                                        these Terms, for purposes of viewing the material contained on this Website,
                                    </p>
                                    <br/>
                                    <p><h4 style={{textAlign: 'center'}}>Restrictions.</h4>
                                        <br/>
                                        <p>You are expressly and emphatically restricted from all of
                                            the following:</p>
                                        <ul>
                                            <li>publishing any Website material in any media</li>
                                            <li>selling, sub licensing and/or otherwise commercializing any Website
                                                material
                                            </li>
                                            <li>publicly performing and/or showing any Website material</li>
                                            <li>using this Website in any way that is, or may be, damaging to this
                                                Website
                                            </li>
                                            <li>using this Website in any way that impacts user access to this Website
                                            </li>
                                            <li>using this Website contrary to applicable laws and regulations, or in a
                                                way that causes, or may cause, harm to the Website, or to any person or
                                                business entity
                                            </li>
                                            <li>engaging in any data mining, data harvesting, data extracting or any
                                                other similar activity in relation to this Website, or while using this
                                                Website
                                            </li>
                                            <li>using this Website to engage in any advertising or marketing</li>
                                        </ul>
                                        Certain areas of this Website are restricted from access by you and RemitSafe®
                                        may further restrict access by you to any areas of this Website, at any time, in
                                        its sole and absolute discretion. Any user ID and password you may have for this
                                        Website are confidential and you must maintain confidentiality of such
                                        information. …
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>No warranties</h4>

                                        This Website is provided “as is,” with all faults, and RemitSafe® makes no
                                        express or implied representations or warranties, of any kind related to this
                                        Website or the materials contained on this Website. Additionally, nothing
                                        contained on this Website shall be construed as providing consult or advice to
                                        you.
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Limitation of liability</h4>

                                        In no event shall RemitSafe®, nor any of its officers, directors and employees,
                                        be liable to you for anything arising out of or in any way connected with your
                                        use of this Website, whether such liability is under contract, tort or
                                        otherwise, and RemitSafe®, including its officers, directors and employees shall
                                        not be liable for any indirect, consequential or special liability arising out
                                        of or in any way related to your use of this Website.
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Indemnification</h4>

                                        You hereby indemnify to the fullest extent RemitSafe® from and against any and
                                        all liabilities, costs, demands, causes of action, damages and expenses
                                        (including reasonable attorney’s fees) arising out of or in any way related to
                                        your breach of any of the provisions of these Terms.
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Severability</h4>

                                        If any provision of these Terms is found to be unenforceable or invalid under
                                        any applicable law, such unenforceability or invalidity shall not render these
                                        Terms unenforceable or invalid as a whole, and such provisions shall be deleted
                                        without affecting the remaining provisions herein.
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Variation of Terms</h4>

                                        RemitSafe® is permitted to revise these Terms at any time as it sees fit, and by
                                        using this Website you are expected to review such Terms on a regular basis to
                                        ensure you understand all terms and conditions governing use of this Website.
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Assignment</h4>
                                        RemitSafe® shall be permitted to assign, transfer, and subcontract its rights
                                        and/or obligations under these Terms without any notification or consent
                                        required. However, you shall not be permitted to assign, transfer, or
                                        subcontract any of your rights and/or obligations under these Terms.
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Entire Agreement</h4>

                                        These Terms, including any legal notices and disclaimers contained on this
                                        Website, constitute the entire agreement between RemitSafe®
                                        and you in relation to your use of this Website, and supersede all prior
                                        agreements and understandings with respect to the same.
                                    </p>
                                    <br/>
                                    <p>
                                        <h4 style={{textAlign: 'center'}}>Governing Law & Jurisdiction</h4>
                                        These Terms will be governed by and construed in accordance with the laws of the
                                        State of Georgia, and you submit to the non-exclusive jurisdiction of the state
                                        and federal courts located in Georgia for the resolution of any disputes.
                                    </p>
                                    <br/>
                                </Container>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions style={{background: '#b3bbbf'}}>
                    <Button color='red'
                            onClick={this.unsatisfactoryTerms}>
                        <Icon name='close'/>
                        I do not agree
                    </Button>
                    <Button color='green'
                            onClick={this.userAgreed}>
                        <Icon name='check'/>
                        I agree to the terms and conditions

                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

