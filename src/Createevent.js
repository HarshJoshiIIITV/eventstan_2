import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import './Createevent.css';
import card_pic from './assets/create_event/card.jpg'

class Createevent extends Component {
    render() {
        return (
            <div className="create_event">
                <div className="header_createevent">
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col xs={0} md={1} />
                        <Col xs={12} md={2} >
                            <a href="/eventstan" class="navbar-brand">Event<span className="colored">stan</span></a>
                        </Col>
                        <Col xs={0} md={2} />
                        <Col xs={12} md={7} >
                            <div className="create_event_mob1" style={{ display: 'flex', justifyContent: 'center' }}>
                                <input type="text" placeholder="Search here.." />
                                <Button href="/professional" style={{ backgroundColor: "#F47824", marginLeft: '20px' }}>Request for Demo</Button>
                                <Button href="/professional" style={{ backgroundColor: "#F47824", marginLeft: '20px' }}>Menu</Button>

                            </div>
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <Container>
                    <p ><a className="remove_anchor" href="/">BACK</a></p>
                    <h4>Select the Event type to</h4>
                    <h4>Hire a Professional</h4>
                    <div className="filter_buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button  >All</Button>
                            <Button  >Private</Button>
                            <Button  >Corporate</Button>
                            <Button  >Virtual</Button>
                        </div>
                        <div>
                            <input placeholder="Search here.." type="text" />
                        </div>
                    </div>
                    <br />
                    <div className="cards_create_event">
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>
                        <div className="card_create_event">
                            <img src={card_pic} height="150px" width='150px' />
                            <h6>Birthdays</h6>
                        </div>

                    </div>


                </Container>
            </div >
        )
    }
}
export default Createevent;