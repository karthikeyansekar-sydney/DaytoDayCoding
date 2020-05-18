import React from 'react';

class CtrlComp extends React.Component
 {
state = {
  message: ''
}

handleChange = (e) => {
  this.setState({
    message: e.target.value})
}

handleSubmit = (e) => {
  alert(this.state.message)
  e.preventDefault()
}

render() {
  return (
    <form onSubmit  = {this.handleSubmit}>
    <label>
    Give a message to the world:
    <input type="text" value={this.state.message} onChange={this.handleChange}/>
    </label>
    <button>
    submit
    </button>
    </form>

  )
}
}

export default CtrlComp
