import React from 'react';
import {render} from 'react-dom';
import { Display } from './Display';
import UnctrlComp from './UnctrlComp';

//const age = 18

// const data = [
//   {greeting: "Hello", id: 1},
//   {greeting: "how", id: 2},
//   {greeting: "are" ,id: 3},
//   {greeting: "you", id: 4}
//   ]

render(
  <UnctrlComp/>,
  document.getElementById('root')
);
