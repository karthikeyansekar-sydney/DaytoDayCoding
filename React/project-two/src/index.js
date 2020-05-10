import React from 'react';
import {render} from 'react-dom';

// let bookList = [
//   {"title": "Hunger", "author": "Roxane gay", "pages": 300},
//   {"title": "The sun also rises", "author": "Ernest Hemingway", "pages": 200},
//   {"title": "White teeth", "author": "Zadie smith", "pages": 400},
//   {"title": "cat's cradle", "author": "kyurt vonnegut", "pages": 320}
//   ]
//
// class Library extends React.Component {
//
// state = { open: true,
// freeBookmark: false,
// hiring: true,
// data:[],
// loading: false
// } //alternate to constructor
//
// componentDidMount() {
//   this.setState({loading: true})
//   fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//   .then(data => data.json())
//   .then(data => this.setState({data, loading: false}))
// }
//
//
// componentDidUpdate() {
//   console.log("The component just updated");
// }
//
//   toggleOpenClosed = () => {
//     this.setState(prevState => ({
//       open: !prevState.open
//     }))
//   }
//   render(){
//     const {books} = this.props;
//     return (
//       <div>
//       {this.state.hiring ? <Hiring/> : <NotHiring />}
//       {this.state.loading
//           ? "loading..."
//           : <div>
//               {this.state.data.map(product => {
//                   return (
//                       <div key={product.id}>
//                           <h3>Library product of the week!</h3>
//                           <h4>{product.name}</h4>
//                           <img src={product.image} alt={product.name} height={100}/>
//                           </div>
//       )
//     })}
//     </div>
//   }
//       <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
//       <button onClick={this.toggleOpenClosed}>Change</button>
//       {books.map(
//         (book, i) =>
//         < Book
//         key ={i}
//         title = {book.title}
//         author = {book.author}
//         pages = {book.pages}
//         freeBookmark = {this.state.freeBookmark}
//       />
//       )}
//       </div>
//     )
//   }
// }
//
// //state as props
// const Book = ({title, author, pages, freeBookmark}) => {
//   return (
//     <section>
//     <h2> {title} </h2>
//     <p>by: {author} </p>
//     <p> Pages: {pages} pages </p>
//     <p>Free Bookmark Today" {freeBookmark ? 'yes' : 'No'} </p>
//   </section>
//   )
// }
//
// const Hiring = () =>
// <div>
// <p> The library is hiring. Go to www.library.com/jobs for more.</p>
// </div>
//
// const NotHiring = () =>
// <div>
// <p> The library is not hiring. check back to later for more.</p>
// </div>

class FavoriteColorForm extends React.Component {
  state = { value: ''}

  newColor = e => this.setState({ value: e.target.value })

  submit = e => {
  console.log(`New color code is: ${this.state.value}`);
  e.preventDefault()
}

render () {
  return (
    <form onSubmit={this.submit}>
    <label> Favorite Color:
    <input
    type="color" onChange={this.newColor} />
</label>
<button>submit</button>
</form>
  )
}
}

render(<FavoriteColorForm/>, document.getElementById('root'));
