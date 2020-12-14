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
                            <h4>Eventstan</h4>
                            <p>Contact us</p>
                            <p>Professional</p>
                        </div>
                        <div>
                            <h4>Information</h4>
                            <p>Eventstan-Fze , DTech ,Technohub 1, Dubai Silicon Oasis, Dubai,</p>
                            <p><a href="mailto:eventstan@hotmail.com">hello@eventstan.com</a></p>
                            <p><a href="tel:9876543210">9876543210</a></p>
                        </div>
                    </div>
                    <hr class="bg-light" />
                    <div style={{ textAlign: 'center' }}>
                        <h4 class="navbar-brand">Event<span className="colored">stan</span></h4>
                        <h4 style={{ fontSize: '16px' }}>Copyrights © 2020 Eventstan. All Rights Reserved</h4>
                    </div>

                </Container>
            </div>
            <div className="footer_mob">
                <div style={{ padding: '10px' }}>
                    <div style={{ paddingTop: '8px' }}>
                        <h4>Eventstan</h4>
                        <p>Contact us</p>
                        <p>Professional</p>
                    </div>
                    <br />
                    <div>
                        <h4>Information</h4>
                        <p>Eventstan-Fze , DTech ,Technohub 1, Dubai Silicon Oasis, Dubai,</p>
                        <p><a href="mailto:eventstan@hotmail.com">hello@eventstan.com</a></p>
                        <p><a href="tel:9876543210">9876543210</a></p>
                    </div>

                    <hr class="bg-light" />
                    <div style={{ textAlign: 'center' }}>
                        <h4 class="navbar-brand">Event<span className="colored">stan</span></h4>
                        <h4 style={{ fontSize: '16px' }}>Copyrights © 2020 Eventstan. All Rights Reserved</h4>
                    </div>

                </div>

            </div>

        </div>
    );
}
export default Footer;