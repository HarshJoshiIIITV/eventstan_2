import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
class PopUp extends Component {
    constructor() {
        super();
        this.state = {
            filters: null
        }
    }
    componentDidMount() {
        axios.get(`https://api.eventstan.com/user/event-form?eventTypeId=${this.props.state.target_event_id}`).then((resp) => {
            console.log()
            this.setState({
                filters: resp.data.data.result.filters
            })
        })

    }
    render() {
        return (
            <div className="popup">
                <h3 style={{ textAlign: 'center', padding: '10px', borderBottom: '0.5px solid silver' }}>{this.props.state.title}</h3>
                <Row className="create_event_popup">
                    {/* {
                        this.state.filters && this.state.filters.map((filter) => {
                            if (filter.name == 'Select Time Range')
                                return <div>
                                    <h6>Select Time</h6>
                                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                                        <input style={{ width: '120px' }} type="time" id="appt" name="appt" />
                                        <input style={{ marginLeft: '10px', width: '120px' }} type="time" id="appt" name="appt" />
                                    </div>
                                </div>
                        })
                    } */}

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
                        <div>
                            <h6>Select Time</h6>
                            <div style={{ display: 'flex', justifyContent: 'left' }}>
                                <input style={{ width: '120px' }} type="time" id="appt" name="appt" />
                                <input style={{ marginLeft: '10px', width: '120px' }} type="time" id="appt" name="appt" />
                            </div>
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