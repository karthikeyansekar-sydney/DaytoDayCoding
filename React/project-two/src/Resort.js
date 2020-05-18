import React from 'react';

const Trail = props => (
  <div>
  {props.name}
    </div>
)

const Lift = props => (
  <div>
  <Trail name ={props.name} />
  </div>
)

class Resort extends React.Component {
  state = {
    name: "Snowtooth Mountain"
  }
  render() {
    return (
      <div>
      <Lift name={this.state.name} />
      </div>
    )
  }
}

export default Resort
