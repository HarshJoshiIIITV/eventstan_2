import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Createevent.css";
import card_pic from "./assets/create_event/card.jpg";
import "./Venuedetail.css";
import { withRouter } from "react-router-dom";
import axios from "axios";

import search_ico from "./assets/landing page pngs/search.svg";

class Venuedetail extends Component {
  constructor() {
    super();
    this.state = {
      addOns: [],
      filters: [],
      primary: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.eventstan.com/user/event-filters?eventTypeId=${this.props.match.params.eventTypeId}&userEventId=${this.props.match.params.userEventId}`
      )
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          filters: res.data.data.filters,
          addOns: res.data.data.result.addOns,
          title: res.data.data.eventName,
          primary: res.data.data.result.primary,
        });
      });
  }

  render() {
    return (
      <div className="create_event">
        <div className="header_createevent">
          <Row style={{ margin: "0px", padding: "0px" }}>
            <Col xs={0} md={1} />
            <Col xs={12} md={2}>
              <a href="/eventstan" class="navbar-brand">
                Event<span className="colored">stan</span>
              </a>
            </Col>
            <Col xs={0} md={2} />
            <Col xs={12} md={7}>
              <div
                className="create_event_mob1"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div style={{ position: "relative" }}>
                  <input
                    style={{
                      padding: "4px 8px",
                      width: "250px",
                      border: "none",
                      borderRadius: "8px",
                      paddingRight: "30px",
                    }}
                    type="text"
                    placeholder="Search here.."
                  />
                  <img
                    style={{
                      position: "absolute",
                      right: "3px",
                      height: "20px",
                      top: "10px",
                    }}
                    className="search_icon_top1"
                    src={search_ico}
                    height="50px"
                  />
                </div>
                <Button
                  href="/professional"
                  style={{ backgroundColor: "#F47824", marginLeft: "20px" }}
                >
                  Request for Demo
                </Button>
                <Button
                  href="/professional"
                  style={{ backgroundColor: "#F47824", marginLeft: "20px" }}
                >
                  Menu
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <Container>
          <div
            className="filter_buttons"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button>All</Button>
              <Button>Private</Button>
              <Button>Corporate</Button>
              <Button>Virtual</Button>
            </div> */}
            {/* <div>
              <input placeholder="Search here.." type="text" />
            </div> */}
          </div>
          <br />
          <h3 className="bold_me">{this.state.title}</h3>
          <h6 className="bold_me" style={{ color: "grey" }}>
            Add your favorite Venue, Cater, Decorator etc or You can select
            package also for your event.
          </h6>
          <br />
          <div className="packages">
            {this.state.primary.map((p, i) => (
              <div className="package_card" key={i}>
                <div>
                  <h5
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    className="bold_me"
                  >
                    {p.serviceId.name}
                  </h5>
                  <h6
                    style={{ color: "rgb(244, 120, 36)" }}
                    className="bold_me"
                  >
                    ADD
                  </h6>
                </div>
                <div style={{ color: "grey" }}>
                  <h6 className="bold_me">342 Available</h6>
                  <h6 className="bold_me">Own Venue</h6>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h5
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "rgb(244, 120, 36)",
            }}
          >
            Add-Ons
          </h5>
          <br />
          <div className="packages">
            {this.state.addOns.map((addOn, i) => (
              <div className="package_card" key={i}>
                <div>
                  <h5
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    className="bold_me"
                  >
                    {addOn.serviceId.name}
                  </h5>
                  <h6
                    style={{ color: "rgb(244, 120, 36)" }}
                    className="bold_me"
                  >
                    ADD
                  </h6>
                </div>
                <div style={{ color: "grey" }}>
                  <h6 className="bold_me">342 Available</h6>
                  <h6 className="bold_me">Own Venue</h6>
                </div>
              </div>
            ))}
          </div>
          <div style={{ margin: "100px 0px", textAlign: "center" }}>
            <Button
              style={{
                padding: "15px 30px",
                backgroundColor: "lightslategray",
              }}
              disabled
            >
              {" "}
              Book Now Paying 10%
            </Button>
          </div>
        </Container>
        <div className="all_packages">
          <Container>
            <h4 style={{ fontWeight: "bold" }} className="bold_me">
              All Packages
            </h4>
            <div className="all_packages_combo">
              <div className="card_all_packages">
                <img src={card_pic} />
                <h5 style={{ paddingRight: "18px" }} className="rating">
                  {" "}
                  &#9733; 4.5
                </h5>
                <div>
                  <h6 style={{ marginBottom: "1px" }}>House party package</h6>
                  <h6>$1200</h6>
                </div>
              </div>
              <div className="card_all_packages">
                <img src={card_pic} />
                <h5 style={{ paddingRight: "18px" }} className="rating">
                  {" "}
                  &#9733; 4.5
                </h5>
                <div>
                  <h6 style={{ marginBottom: "1px" }}>House party package</h6>
                  <h6>$1200</h6>
                </div>
              </div>
              <div className="card_all_packages">
                <img src={card_pic} />
                <h5 style={{ paddingRight: "18px" }} className="rating">
                  {" "}
                  &#9733; 4.5
                </h5>
                <div>
                  <h6 style={{ marginBottom: "1px" }}>House party package</h6>
                  <h6>$1200</h6>
                </div>
              </div>
              <div className="card_all_packages">
                <img src={card_pic} />
                <h5 style={{ paddingRight: "18px" }} className="rating">
                  {" "}
                  &#9733; 4.5
                </h5>
                <div>
                  <h6 style={{ marginBottom: "1px" }}>House party package</h6>
                  <h6>$1200</h6>
                </div>
              </div>
              <div className="card_all_packages">
                <img src={card_pic} />
                <h5 style={{ paddingRight: "18px" }} className="rating">
                  {" "}
                  &#9733; 4.5
                </h5>
                <div>
                  <h6 style={{ marginBottom: "1px" }}>House party package</h6>
                  <h6>$1200</h6>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default withRouter(Venuedetail);
