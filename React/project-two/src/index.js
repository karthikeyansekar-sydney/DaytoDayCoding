import React from 'react';
import {render} from 'react-dom';
import {Apps} from './Keyedfragments';
//const age = 18

// const data = [
//   {greeting: "Hello", id: 1},
//   {greeting: "how", id: 2},
//   {greeting: "are" ,id: 3},
//   {greeting: "you", id: 4}
//   ]
const skidictionary = [
{id: 1, name: "send", definition: "To throw one's body off of a cliff or rock"},
{id: 2, name: "chowder", definition: "snow or powder that has been skied"}
]

render(
  <Apps dictionary = {skidictionary}/>,
  document.getElementById('root')
);
