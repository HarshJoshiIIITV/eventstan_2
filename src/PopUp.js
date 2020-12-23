import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
class PopUp extends Component {
    constructor() {
        super();
        this.state = {
            filters: null,
            form_resp: {
                eventTypeId: "",
                userId: "3",
                filters: [
                    //   {
                    //     "filterId": "5fdc621a0f6f510e2790165b",
                    //     "type": 6,
                    //     "startTime":  "11:11:00",
                    //       "endTime" :  "12:12:00"
                    //   },
                    // {
                    //     "filterId": "5fdc621a0f6f510e2790165b",
                    //     "type": 6,
                    //     "startTime":  "11:11:00",
                    //       "endTime" :  "12:12:00"
                    //   }
                ]
            },
            filterId: "",
            type: "",
            startTime: "",
            endTime: ""

        }
    }
    componentDidMount() {
        axios.get(`https://api.eventstan.com/user/event-form?eventTypeId=${this.props.state.target_event_id}`).then((resp) => {
            var x = {
                eventTypeId: this.props.state.target_event_id,
                userId: "3",
                filters: []
            }
            this.setState({
                filters: resp.data.data.result.filters,
                form_resp: x
            })
        })

    }
    render() {
        return (
            <div className="popup">
                <h3 style={{ textAlign: 'center', padding: '10px', borderBottom: '0.5px solid silver' }}>{this.props.state.title}</h3>
                <Row className="create_event_popup">
                    {
                        this.state.filters && this.state.filters.map((filter) => {
                            if (filter.type == 6) {
                                return (
                                    <Col>
                                        <div>
                                            <h6>Select Time</h6>
                                            <div style={{ display: 'flex', justifyContent: 'left' }}>
                                                <input style={{ width: '120px' }} type="time" id="appt" name="appt" />
                                                <input style={{ marginLeft: '10px', width: '120px' }} type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }

                            else if (filter.type == 7) {
                                return (
                                    <Col>
                                        <h6>Number of Person's Range</h6>
                                        <select autoComplete="nope" required >
                                            <option value="">Select</option>
                                            <option value="1-20">1-20</option>
                                            <option value="20-50">20-50</option>
                                            <option value="50-100">50-100</option>
                                        </select>

                                    </Col>
                                )
                            }
                            else if (filter.type == 8) {
                                return (
                                    <Col>

                                        <h6>Location</h6>
                                        <select autoComplete="nope" required >
                                            <option value="">Select</option>
                                            <option value="delhi">delhi</option>
                                            <option value="jaipur">jaipur</option>
                                            <option value="nainital">nainital</option>
                                        </select>

                                    </Col>
                                )
                            }
                            else if (filter.type == 5) {
                                return (
                                    <Col>
                                        <div>
                                            <h6>Select Time</h6>
                                            <div style={{ display: 'flex', justifyContent: 'left' }}>
                                                <input style={{ width: '120px' }} type="time" id="appt" name="appt" />
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                            else if (filter.type == 3) {
                                <Col>
                                    <div>
                                        <h6>Select Date</h6>
                                        <input type="text" type="date" />
                                    </div>
                                </Col>
                            }
                            else if (filter.type == 4) {
                                <Col>
                                    <div>
                                        <h6>Date range</h6>
                                        <div style={{ display: 'flex', justifyContent: 'left' }}>
                                            <input type="text" type="date" />
                                            <input type="text" type="date" />
                                        </div>
                                    </div>

                                </Col>

                            }
                        })
                    }

                    {/* <Col>
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
                            <h6>Select Time</h6>
                            <div style={{ display: 'flex', justifyContent: 'left' }}>
                                <input style={{ width: '120px' }} type="time" id="appt" name="appt" />
                                <input style={{ marginLeft: '10px', width: '120px' }} type="time" id="appt" name="appt" />
                            </div>
                        </div>

                    </Col> */}
                </Row>
                <Row>
                    <Button href='/venuedetail' style={{ margin: '15px auto', backgroundColor: 'lightslategray' }} >Lets Create an Event</Button>
                </Row>
            </div>
        )
    }
}
export default PopUp