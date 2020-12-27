import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap'
import img1 from './assets/landing page pngs/insta.svg'
import img2 from './assets/landing page pngs/fb.svg'
import img3 from './assets/landing page pngs/twitter.svg'
import img4 from './assets/landing page pngs/google.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_desk">
                <Container>
                    <Row>
                        <Col md={2} xs={6} sm={6}>
                            <div>
                                <h5 className="bold_me">Eventstan</h5>
                                <p><a href="/eventstan#contactform_home"> <p>About us</p></a></p>
                                <p><a href="/eventstan#contactform_home"> <p>Contact us</p></a></p>
                                <p><a href="/professional">Partnership</a></p>
                            </div>
                        </Col>
                        <Col md={2} xs={6} sm={6}>
                            <div>
                                <h5 className="bold_me">Others</h5>
                                <p><a href="/eventstan#contactform_home"> <p>Request a demo</p></a></p>
                                <p><a href="/eventstan#contactform_home"> <p>Schedule a call</p></a></p>
                                <p><a href="/eventstan#contactform_home"> <p>FAQ</p></a></p>
                            </div>

                        </Col>
                        <Col md={3} xs={12} sm={12}>
                            <div className="mob_info">
                                <h5 className="bold_me">Information</h5>
                                <p>Eventstan-Fze , DTech ,Technohub 1, Dubai Silicon Oasis, Dubai,</p>
                                <p><a href="mailto:eventstan@hotmail.com">hello@eventstan.com</a></p>
                                <p><a href="tel:+971529415444">+971529415444</a></p>
                            </div>

                        </Col>
                        <Col md={1} />
                        <Col md={3} xs={12} sm={12}>
                            <div className="social_icons" style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img src={img1} />
                                <img src={img2} />
                                <img src={img3} />
                                <img src={img4} />

                            </div>
                        </Col>
                    </Row>
                    <br />
                    <hr class="bg-light" />
                    <div style={{ textAlign: 'center' }}>
                        <h4 class="navbar-brand" style={{ fontSize: '32.5px' }}>EVENT<span className="colored">STAN</span></h4>
                        <h4 style={{ fontSize: '16px' }}>Copyrights © 2020 Eventstan. All Rights Reserved</h4>
                    </div>

                </Container>
            </div>
            {/* <div className="footer_mob">
                <div style={{ padding: '10px' }}>
                    <div style={{ paddingTop: '8px' }}>
                        <h4 className="bold_me">Eventstan</h4>
                        <p><a href="/eventstan#contactform_home"> <p>Contact us</p></a></p>
                        <p><a href="/professional">Professional</a></p>
                    </div>
                    <br />
                    <div>
                        <h4 className="bold_me">Information</h4>
                        <p>Eventstan-Fze , DTech ,Technohub 1, Dubai Silicon Oasis, Dubai,</p>
                        <p><a href="mailto:eventstan@hotmail.com">hello@eventstan.com</a></p>
                        <p><a href="tel:+971529415444">+971529415444</a></p>
                    </div>

                    <hr class="bg-light" />
                    <div style={{ textAlign: 'center' }}>
                        <h4 class="navbar-brand">EVENT<span className="colored">STAN</span></h4>
                        <h4 style={{ fontSize: '16px' }}>Copyrights © 2020 Eventstan. All Rights Reserved</h4>
                    </div>

                </div>

            </div> */}

        </div>
    );
}
export default Footer;