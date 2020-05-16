import React from 'react';
import {render} from 'react-dom';
import { Display } from './Children';

const age = 18

// const data = [
//   {greeting: "Hello", id: 1},
//   {greeting: "how", id: 2},
//   {greeting: "are" ,id: 3},
//   {greeting: "you", id: 4}
//   ]

render(
  <Display ifTruthy={age >= 18}>
  <h1>you are major</h1>
  </Display>,
  document.getElementById('root')
);
