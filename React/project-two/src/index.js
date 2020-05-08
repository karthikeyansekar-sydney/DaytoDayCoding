import React from 'react';
import {render} from 'react-dom';

let bookList = [
  {"title": "Hunger", "author": "Roxane gay", "pages": 300},
  {"title": "The sun also rises", "author": "Ernest Hemingway", "pages": 200},
  {"title": "White teeth", "author": "Zadie smith", "pages": 400},
  {"title": "cat's cradle", "author": "kyurt vonnegut", "pages": 320}
  ]

class Library extends React.Component {

// state = { open: false} //alternate to constructor

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    //this.toggleOpenClosed = this.toggleOpenClosed.bind(this); //used for normal functions not for arrow
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render(){
    const {books} = this.props;
    return (
      <div>
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
      <button onClick={this.toggleOpenClosed}>Change</button>
      {books.map(
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
}

const Book = ({title, author, pages}) => {
  return (
    <section>
    <h2> {title} </h2>
    <p>by: {author} </p>
    <p> Pages: {pages} pages </p>
  </section>
  )
}

//Function Component
/*
const Library = ({books}) => {
  return (
    <div>
    {books.map(
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
*/

render(<Library books={bookList}/>, document.getElementById('root'));
