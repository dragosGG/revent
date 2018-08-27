import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decremnetCounter } from "./testActions";

const mapState = state => ({
  date: state.test.data
});

const actions = {
  incrementCounter,
  decremnetCounter
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decremnetCounter, data } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3> The answer is: {data} </h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decremnetCounter} color="red" content="Decrement" />
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
