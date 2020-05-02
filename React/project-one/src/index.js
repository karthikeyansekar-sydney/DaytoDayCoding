import React from 'react';
import ReactDOM from 'react-dom';

var style = {
  backgroundColor: 'green',
  color: 'white',
  fontFamily: 'Arial'
}

const title = React.createElement(
  'h1',
  {id:'title' , className: 'header', style: style},
  'Hello world'
)

ReactDOM.render(
  title, document.getElementById('root')
)
