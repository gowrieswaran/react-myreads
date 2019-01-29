import React, { Component } from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              changeShelf={this.props.changeShelf}
              name="Currently Reading"
              books={this.props.books.filter(
                b => b.shelf === "currentlyReading"
              )}
            />
            <BookShelf
              changeShelf={this.props.changeShelf}
              name="Want to Read"
              books={this.props.books.filter(b => b.shelf === "wantToRead")}
            />
            <BookShelf
              changeShelf={this.props.changeShelf}
              name="Read"
              books={this.props.books.filter(b => b.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default MainPage;
