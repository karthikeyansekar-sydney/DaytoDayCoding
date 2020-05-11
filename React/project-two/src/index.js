import React from 'react';
import {render} from 'react-dom';
import Library from './Library';


let bookList = [
  {"author": "Roxane gay", "pages": 300},
  {"title": "The sun also rises", "author": "Ernest Hemingway", "pages": 200},
  {"title": "White teeth", "author": "Zadie smith", "pages": 400},
  {"title": "cat's cradle", "author": "kyurt vonnegut", "pages": 320}
]


render(<Library books={bookList}/>, document.getElementById('root'));
