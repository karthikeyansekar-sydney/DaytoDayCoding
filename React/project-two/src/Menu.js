import React from 'react';


const NowEating = props => <h1>{props.meal}</h1>

class Menu extends React.Component {

state = {
  meal: "Spaghetti"
}
// constructor(props) {
//   super(props)
//   this.state = {
//     meal: "Spaghetti"
//   }
// }

addSideDish = () => {
  this.setState(prevState => {
    return { meal: `${prevState.meal} & Salad `}
  })
}
render() {
  return (
    <div>
    <NowEating meal={this.state.meal} />
    {(this.state.meal === "Spaghetti")
? <button onClick={this.addSideDish}> Add Side Dish</button>
: null
  }
  </div>
  )
}
}

export default Menu
