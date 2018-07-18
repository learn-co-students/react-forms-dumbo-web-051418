// Code ControlledInput Component Here
import React, {Component} from 'react'

class ControlledInput extends Component {
  state = {
    value: ''
  }

  textChangeHandler = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.textChangeHandler} value={this.state.value}/>
      </form>
    )
  }
}

export default ControlledInput
