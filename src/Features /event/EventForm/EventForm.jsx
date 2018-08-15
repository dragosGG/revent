import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    event: {
      title: "",
      event: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: ""
    }
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.event);
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };
  render() {
    const { handleFormClose } = this.props;
    const { event } = this.state;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                onChange={this.onInputChange}
                value={event.title}
                placeholder="Events Title"
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                name="date"
                type="date"
                onChange={this.onInputChange}
                value={event.date}
                placeholder="Event Date"
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                name="city"
                placeholder="City event is taking place"
                onChange={this.onInputChange}
                value={event.city}
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                onChange={this.onInputChange}
                value={event.venue}
                placeholder="Enter the Venue of the event"
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                placeholder="Enter the name of person hosting"
                onChange={this.onInputChange}
                value={event.hostedBy}
              />
            </Form.Field>
            <Button
              positive
              type="submit"
              onChange={this.onInputChange}
              value={event.title}
            >
              Submit
            </Button>
            <Button onClick={handleFormClose} type="button">
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default EventForm;
