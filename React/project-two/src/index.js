import React from 'react';
import {render} from 'react-dom';

let bookList = [
  {"title": "Hunger", "author": "Roxane gay", "pages": 300},
  {"title": "The sun also rises", "author": "Ernest Hemingway", "pages": 200},
  {"title": "White teeth", "author": "Zadie smith", "pages": 400},
  {"title": "cat's cradle", "author": "kyurt vonnegut", "pages": 320}
  ]

class Library extends React.Component {

state = { open: true,
freeBookmark: false,
hiring: true,
data:[],
loading: false
} //alternate to constructor



componentDidMount() {
  console.log("The component just mounted");

}
componentDidUpdate() {
  console.log("The component just updated");
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
      {this.state.hiring ? <Hiring/> : <NotHiring />}
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
      <button onClick={this.toggleOpenClosed}>Change</button>
      {books.map(
        (book, i) =>
        < Book
        key ={i}
        title = {book.title}
        author = {book.author}
        pages = {book.pages}
        freeBookmark = {this.state.freeBookmark}
      />
      )}
      </div>
    )
  }
}

//state as props
const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
    <h2> {title} </h2>
    <p>by: {author} </p>
    <p> Pages: {pages} pages </p>
    <p>Free Bookmark Today" {freeBookmark ? 'yes' : 'No'} </p>
  </section>
  )
}

const Hiring = () =>
<div>
<p> The library is hiring. Go to www.library.com/jobs for more.</p>
</div>

const NotHiring = () =>
<div>
<p> The library is not hiring. check back to later for more.</p>
</div>


render(<Library books={bookList}/>, document.getElementById('root'));
