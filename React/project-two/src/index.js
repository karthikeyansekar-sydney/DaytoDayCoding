import React from 'react';
import {render} from 'react-dom';

let bookList = [
  {"title": "Hunger", "author": "Roxane gay", "pages": 300},
  {"title": "The sun also rises", "author": "Ernest Hemingway", "pages": 200},
  {"title": "White teeth", "author": "Zadie smith", "pages": 400},
  {"title": "cat's cradle", "author": "kyurt vonnegut", "pages": 320}
  ]
const Book = ({title, author, pages}) => {
  return (
    <section>
    <h2> {title} </h2>
    <p>by: {author} </p>
    <p> Pages: {pages} pages </p>
  </section>
  )
}

const Library = ({books}) => {
  return (
    <div>
    {bookList.map(
      (book, i) =>
      < Book
      key ={i}
      title = {book.title}
      author = {book.author}
      pages = {book.pages}
    />
    )}
    </div>
  )
}

render(<Library />, document.getElementById('root'));
