import React, { Component } from 'react';
import './Footer.css';
import { Container, Row } from 'react-bootstrap'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_desk">
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h4 className="bold_me">Eventstan</h4>
                            <p><a href="/eventstan#contactform_home"> <p>Contact us</p></a></p>
                            <p><a href="/professional">Professional</a></p>
                        </div>
                        <div>
                            <h4 className="bold_me">Information</h4>
                            <p>Eventstan-Fze , DTech ,Technohub 1, Dubai Silicon Oasis, Dubai,</p>
                            <p><a href="mailto:eventstan@hotmail.com">hello@eventstan.com</a></p>
                            <p><a href="tel:+971529415444">+971529415444</a></p>
                        </div>
                    </div>
                    <hr class="bg-light" />
                    <div style={{ textAlign: 'center' }}>
                        <h4 class="navbar-brand" style={{ fontSize: '32.5px' }}>EVENT<span className="colored">STAN</span></h4>
                        <h4 style={{ fontSize: '16px' }}>Copyrights © 2020 Eventstan. All Rights Reserved</h4>
                    </div>

                </Container>
            </div>
            <div className="footer_mob">
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

            </div>

        </div>
    );
}
export default Footer;