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

const Player = ({name,matches,rank}) => {
  return (
    <section>
    <h2> {name} </h2>
    <p> played {matches}* </p>
    <p> ranking {rank}th in ODI </p>
    </section>
  )
}

const Stat = () => {
  return(
    <div>
<Player name="Kallis" matches={323} rank={7}/>
<Player name="Dravid" matches={303} rank={12}/>
<Player name="sachin" matches={365} rank={4}/>
<Player name="Taylor" matches={223} rank={5}/>
</div>
  )
}
ReactDOM.render(
  <Stat/>,document.getElementById('root'))
