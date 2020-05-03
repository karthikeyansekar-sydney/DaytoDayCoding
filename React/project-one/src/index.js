import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: this.props.color}}>
      {this.props.msg}
      </h1>
      <p> I will be back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}

let cricScore = {
  total: 260,
  wicket: 8,
  overs: 46,
  target: 320
}

class CricScoreCounter extends React.Component {
  render() {
return (
  <section>
  <div>
<p> Total Score: {this.props.total} </p>
  </div>
  <div>
<p> Wickets Taken: {this.props.wicket} </p>
  </div>
  <div>
<p> Overs Bowled: {this.props.overs} </p>
  </div>
  <div>
<p> Target Score: {this.props.target} </p>
  </div>
  </section>
)
  }
}

const CricScoreCount = (props) => {
  return (
    <section>
    <div>
  <p> Total Score: {props.total} </p>
    </div>
    <div>
  <p> Wickets Taken: {props.wicket} </p>
    </div>
    <div>
  <p> Overs Bowled: {props.overs} </p>
    </div>
    <div>
  <p> Target Score: {props.target} </p>
    </div>
    </section>
  )
}
ReactDOM.render(
  // <Message msg="hello" color="green" minutes={4}/>, document.getElementById('root')
<CricScoreCount total={cricScore.total} wicket={cricScore.wicket} overs={cricScore.overs} target={cricScore.target}/>, document.getElementById('root'))
