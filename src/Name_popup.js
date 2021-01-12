import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
class Name_popup extends Component {
  render() {
    return (
      <div className="popup_name">
        <Row>
          <Col>
            <div>
              <h5 className="bold_me">
                What would you like to name your event?
              </h5>

              <input
                style={{
                  outline: "none",
                  marginTop: "10px",
                  marginBottom: "10px",
                  border: "2px solid #d0d0d0",
                  padding: "6px",
                  borderRadius: "8px",
                  width: "100%",
                }}
                onChange={this.props.onchange}
                type="text"
                name="title"
                placeholder="Enter name here.."
              />
              <p style={{ fontWeight: "bold", color: "red" }}>
                {this.props.error}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Button
            onClick={this.props.submit_popup_first}
            style={{
              margin: "15px auto",
              backgroundColor: "#d0d0d0",
              padding: "8px 50px",
              color: "black",
            }}
          >
            Submit
          </Button>
        </Row>
      </div>
    );
  }
}
export default Name_popup;
