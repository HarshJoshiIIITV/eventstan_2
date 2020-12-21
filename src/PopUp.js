import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
class PopUp extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="popup">
                <h3 style={{ textAlign: 'center', padding: '10px', borderBottom: '0.5px solid silver' }}>{this.props.state.title}</h3>
                <Row className="create_event_popup">
                    <Col>
                        <div>
                            <h6>Where will your event take place?</h6>
                            <input type="text" placeholder="Enter name here.." />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h6>How would you classify the event?</h6>
                            <div style={
                                { display: 'flex', justifyContent: 'left' }}>
                                <Button>Private</Button>
                                <Button style={{ marginLeft: '10px' }}>Corporate</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h6>Number of Person's Range</h6>
                            <input type="text" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h6>Select Date</h6>
                            <input type="text" type="date" />
                        </div>
                    </Col>
                    <Col>
                        <h6>Select Date</h6>
                        <div style={{ display: 'flex', justifyContent: 'left' }}>
                            <input style={{ width: '120px' }} type="time" id="appt" name="appt" />
                            <input style={{ marginLeft: '10px', width: '120px' }} type="time" id="appt" name="appt" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Button href='/venuedetail' style={{ margin: '15px auto', backgroundColor: 'lightslategray' }} >Lets Create an Event</Button>
                </Row>
            </div>
        )
    }
}
export default PopUp