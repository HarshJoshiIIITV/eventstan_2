import React, { Component } from "react";
import Home from "./Home";
import Homeext from "./Homeext";
import Footer from "./Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Createevent from "./Createevent";
import Venuedetail from "./Venuedetail";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/eventstan" component={Home} />
          <Route exact path="/professional" component={Homeext} />
          <Route exact path="/create_event" component={Createevent} />
          <Route
            exact
            path="/venuedetail/:eventTypeId/:userEventId"
            component={Venuedetail}
          />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
