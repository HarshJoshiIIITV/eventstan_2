import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import client1 from './assets/Homeext/client1.png'
import client2 from './assets/Homeext/client2.png'
import client3 from './assets/Homeext/client3.png'
import client4 from './assets/Homeext/client4.png'
import client5 from './assets/Homeext/client5.png'
import './Homeext.css';
import React, { Component } from 'react';
import axios from 'axios';
import Form_ind from './Form_ind'
import Form_org from './Form_org'

class Homeext extends Component {
    constructor() {
        super();
        this.state = {
            individual: true,
        }
    }
    toggle_form = () => {
        this.setState({
            individual: false
        });
    }
    toggle_form2 = () => {
        this.setState({
            individual: true
        });
    }
    render() {
        var x, y;
        if (this.state.individual) {
            x = "highlight";
            y = "";
        }
        else {
            x = "";
            y = "highlight";
        }
        return (
            <div className="homeext">
                <div className="upper_part">
                    <div className="mob" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px', maxWidth: "1140px", margin: '5px auto' }}>
                        <a href="/eventstan" class="navbar-brand">Event<span className="colored">stan</span></a>
                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title bold_me">Want to join EVENTSTAN as a professional?</h2>
                        <p className="banner-text">You’ve made the right choice. let’s get started!</p>
                        <Button href="#contact_ext" style={{ backgroundColor: "#F47824" }} >Signup as a Professional</Button>
                    </div>
                </div>
                <div style={{ textAlign: 'center', backgroundColor: '#fef3e6', padding: '5% 0%' }} className="para" >
                    <div>
                        <Container>
                            <Row>
                                <Col xs={12} md={12}>
                                    <h2 class="title bold_me" style={{
                                        color: "#2D2D2D",
                                        fontFamily: "Campton"
                                    }}>EVENTSTAN is where you get to work with the most prestigious clients. we’ll take your career to unprecedented heights.</h2>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: '5% 0%' }}>
                    <div>
                        <Container>
                            <h4 style={{ color: '#F47824', fontWeight: 'bold' }} className="bold_me">We’d love to have you onboard.</h4>
                            <h2 className="title bold_me" style={{ color: '#2D2D2D', fontFamily: 'Campton', fontWeight: 'bold' }}>Why should you be here, on <br /> EVENTSTAN?</h2>
                            <h3 className="bold_me">Joining hands with us will bring you more than a <br /> bagful of benefits.</h3>

                        </Container>
                    </div>
                </div>
                <div className="client_section">
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6} style={{ paddingLeft: '0px', marginLeft: '0px' }}>
                            <img src={client1} />
                        </Col>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2 className="bold_me">Better connections</h2>
                                <br />
                                <h3>EVENTSTAN facilitates faster and more professional networking with your audience.</h3>

                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2 className="bold_me">Better schedule management</h2>
                                <br />
                                <h3>With the in-built dashboard, EVENTSTAN ensures your appointments never clash.</h3>

                            </div>
                        </Col>
                        <Col md={6} style={{ marginRight: '0px', paddingRight: '0px', textAlign: 'right' }}>
                            <img src={client2} />
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6} style={{ paddingLeft: '0px', marginLeft: '0px' }}>
                            <img src={client3} />
                        </Col>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2 className="bold_me">Better output</h2>
                                <br />
                                <h3>A streamlined scheduling and faster closure helps you enhance your productivity.</h3>

                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>

                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2 className="bold_me">Flexible work</h2>
                                <br />
                                <h3>Nobody will force you to do anything. choose your event as and when you deem fit.</h3>

                            </div>
                        </Col>
                        <Col md={6} style={{ marginRight: '0px', paddingRight: '0px', textAlign: 'right' }}>
                            <img src={client4} />
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col md={6} style={{ paddingLeft: '0px', marginLeft: '0px' }}>
                            <img src={client5} />
                        </Col>
                        <Col md={6}>
                            <div style={{ position: 'relative', top: '30%' }}>
                                <h2 className="bold_me">No hassles</h2>
                                <br />
                                <h3>From payment concerns to coordinating with the client, everything will be handled by EVENTSTAN</h3>

                            </div>
                        </Col>
                    </Row>
                    <br />
                </div>
                <div className="Contact_sec mr-0">
                    <Container className="contact_container" id="contact_ext">
                        <h2 style={{ color: '#2D2D2D', textAlign: 'center' }} className="title bold_me">Let’s get to know you better.</h2>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'left' }}>
                            <li class={"nav-item " + x} onClick={this.toggle_form2}>
                                Individual
                            </li>
                            <li class={"nav-item " + y} onClick={this.toggle_form}>
                                Organisation
                            </li>
                        </div>
                        <br />
                        {
                            this.state.individual ? (
                                <Form_ind />

                            ) :
                                <Form_org />

                        }
                    </Container>
                </div>


            </div>
        );
    }
}

export default Homeext;
