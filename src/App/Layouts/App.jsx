import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../Features /event/eventDashboard/EventDashboard";
import NavBar from "../../Features /event/Nav/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
