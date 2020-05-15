import React from 'react';
import {render} from 'react-dom';
import { Greetings } from './Arrayrendering';

const data = [
  {greeting: "Hello", id: 1},
  {greeting: "how", id: 2},
  {greeting: "are" ,id: 3},
  {greeting: "you", id: 4}
  ]

render(
  <Greetings data={data}/>,
  document.getElementById('root')
);
