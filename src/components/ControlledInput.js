// Code ControlledInput Component Here
import React from 'react'

class ControlledInput extends React.Component {
  state = {
    value: ""
  }

  handleChange = (event) => {
    event.persist();
    this.setState((previousEvent) => {
      return {
        value: event.target.value
      }
    }, console.log(this.state))
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default ControlledInput
