import React from 'react';

const Context = React.createContext()

class Provider extends React.Component {
  state = {
    name: "snowtooth Mountain"
  }
  render() {
    return (
      <Context.Provider value = {{state: this.state}}>
      {this.props.children}
      </Context.Provider>
    )
  }
}
const Trail = props => (
  <div>
  <Context.Consumer>
  {(context) => (
    <p>This is the context: {context.state.name}</p>
  )}
  </Context.Consumer>
    </div>
)

const Lift = props => (
  <div>
  <Trail  />
  </div>
)

class Resorts extends React.Component {
  state = {
    name: "Snowtooth Mountain"
  }
  render() {
    return (
      <Provider>
      <div>
      <Lift/>
      </div>
      </Provider>
    )
  }
}

export default Resorts
