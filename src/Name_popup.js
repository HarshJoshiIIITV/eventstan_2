import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
class Name_popup extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="popup_name">
                <Row>
                    <Col>
                        <div>
                            <h5 className="bold_me">What would you like to name your event?</h5>

                            <input style={{ marginTop: '10px', marginBottom: '10px', border: 'none', width: '100%', borderBottom: '2px solid black' }} onChange={this.props.onchange} type="text" name="title" placeholder="Enter name here.." />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={this.props.submit_popup_first} style={{ margin: '15px auto', backgroundColor: "lightslategray" }} >Submit</Button>
                </Row>
            </div>
        )
    }
}
export default Name_popup