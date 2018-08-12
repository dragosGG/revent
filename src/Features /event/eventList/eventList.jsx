import React, { Component } from "react";
import EventListItem from "./eventListItem";

class EventList extends Component {
  render() {
    return (
      <div>
        <h1> Event List </h1>
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <h1> </h1>
      </div>
    );
  }
}
export default EventList;
