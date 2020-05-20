import React from 'react';

const Context = React.createContext()

class Provider extends React.Component {
  state = {
    name: "snowtooth Mountain",
    status: "open"
  }
  render() {
    return (
      <Context.Provider value = {{
        state: this.state,
        changeStatus: () => this.setState({
          status: "closed"
        })
      }}>
      {this.props.children}
      </Context.Provider>
    )
  }
}
const Trail = props => (
  <div>
  <Context.Consumer>
  {(context) => (
    <div>
    <p>This is the context: {context.state.name}</p>
    <p>The resort is: {context.state.status}</p>
    <button onClick={context.changeStatus}>Close Resort</button>
    </div>
  )}
  </Context.Consumer>
    </div>
)

const Lift = props => (
  <div>
  <Trail/>
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
