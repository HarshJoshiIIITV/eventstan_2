import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { withRouter } from "react-router-dom";

class PopUp extends Component {
  constructor() {
    super();
    this.state = {
      filters: null,
      form_resp: {
        eventTypeId: "",
        userId: "3",
        filters: [],
      },
      startTime: "",
      endTime: "",
      time: "",
      date: "",
      startDate: "",
      endDate: "",
      minPeople: 0,
      maxPeople: 0,
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.eventstan.com/user/event-form?eventTypeId=${this.props.state.target_event_id}`
      )
      .then((resp) => {
        var x = {
          eventTypeId: this.props.state.target_event_id,
          userId: "3",
          filters: [],
        };
        this.setState({
          filters: resp.data.data.result.filters,
          form_resp: x,
        });
      });
  }

  createEvent = () => {
    let filt = [];
    this.state.filters.forEach((f) => {
      if (f.type === 6) {
        filt.push({
          filterId: f._id,
          type: 6,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
        });
      }
      if (f.type === 5) {
        filt.push({
          filterId: f._id,
          type: 5,
          time: this.state.time,
        });
      }
      if (f.type === 3) {
        filt.push({
          filterId: f._id,
          type: 3,
          date: this.state.date,
        });
      }
      if (f.type === 4) {
        filt.push({
          filterId: f._id,
          type: 4,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
        });
      }
      axios
        .post("https://api.eventstan.com/user/event", {
          ...this.state.form_resp,
          filters: filt,
        })
        .then((r) => {
          this.props.history.push(
            "/venuedetail/" + r.data.data.eventTypeId + "/" + r.data.data._id
          );
        });
    });
  };
  render() {
    return (
      <div className="popup">
        <h3
          style={{
            textAlign: "center",
            padding: "10px",
            borderBottom: "0.5px solid silver",
          }}
        >
          {this.props.state.title}
        </h3>
        <Row className="create_event_popup">
          {this.state.filters &&
            this.state.filters.map((filter) => {
              if (filter.type == 6) {
                return (
                  <Col>
                    <div>
                      <h6>Select Time</h6>
                      <div style={{ display: "flex", justifyContent: "left" }}>
                        <input
                          style={{ width: "120px" }}
                          type="time"
                          id="st"
                          name="st"
                          value={this.state.startTime}
                          onChange={(e) =>
                            this.setState({ startTime: e.target.value })
                          }
                        />
                        <input
                          style={{ marginLeft: "10px", width: "120px" }}
                          type="time"
                          id="et"
                          name="et"
                          value={this.state.endTime}
                          onChange={(e) =>
                            this.setState({ endTime: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </Col>
                );
              }
              if (filter.type == 7) {
                return (
                  <Col>
                    <h6>Number of Person's Range</h6>
                    <Range
                      min={this.state.minPeople}
                      max={this.state.maxPeople}
                      defaultValue={[3, 10]}
                      tipFormatter={(value) => `${value}%`}
                      onBeforeChange={(value) =>
                        this.setState({ minPeople: value })
                      }
                      onAfterChange={(value) =>
                        this.setState({ maxPeople: value })
                      }
                    />
                  </Col>
                );
              }
              // else if (filter.type == 8) {
              //     return (
              //         <Col>

              //             <h6>Location</h6>
              //             <select autoComplete="nope" required >
              //                 <option value="">Select</option>
              //                 <option value="delhi">delhi</option>
              //                 <option value="jaipur">jaipur</option>
              //                 <option value="nainital">nainital</option>
              //             </select>

              //         </Col>
              //     )
              // }
              if (filter.type == 5) {
                return (
                  <Col>
                    <div>
                      <h6>Select Time</h6>
                      <div style={{ display: "flex", justifyContent: "left" }}>
                        <input
                          style={{ width: "120px" }}
                          type="time"
                          id="appt"
                          name="appt"
                          value={this.state.time}
                          onChange={(e) =>
                            this.setState({ time: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </Col>
                );
              }
              if (filter.type == 3) {
                <Col>
                  <div>
                    <h6>Select Date</h6>
                    <input
                      type="date"
                      value={this.state.date}
                      onChange={(e) => this.setState({ date: e.target.value })}
                    />
                  </div>
                </Col>;
              }
              if (filter.type == 4) {
                <Col>
                  <div>
                    <h6>Date range</h6>
                    <div style={{ display: "flex", justifyContent: "left" }}>
                      <input
                        type="date"
                        value={this.state.startDate}
                        onChange={(e) =>
                          this.setState({ startDate: e.target.value })
                        }
                      />
                      <input
                        type="date"
                        value={this.state.endDate}
                        onChange={(e) =>
                          this.setState({ endDate: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </Col>;
              }
            })}

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
          <Button
            onClick={this.createEvent}
            style={{ margin: "15px auto", backgroundColor: "lightslategray" }}
          >
            Lets Create an Event
          </Button>
        </Row>
      </div>
    );
  }
}
export default withRouter(PopUp);
