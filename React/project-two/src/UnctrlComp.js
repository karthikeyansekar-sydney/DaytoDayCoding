import React from 'react';

class UnctrlComp extends React.Component
 {
handleSubmit = (e) => {
  alert(this.input.value)
  e.preventDefault()
}

render() {
  return (
    <form onSubmit  ={this.handleSubmit}>
    <label>
    Give a message to the world:
    <input type="text" ref={input => this.input = input}/>
    </label>
    <button>
    submit
    </button>
    </form>

  )
}
}

export default UnctrlComp
