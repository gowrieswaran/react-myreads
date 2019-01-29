import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

import { Route } from "react-router-dom";
import MainPage from "../src/components/MainPage";
import SearchPage from "../src/components/SearchPage";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({ books: response });
    });
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };
  render() {
    return (
      <div className="app">
        <Route exact path="/"
          render={() => (
            <MainPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )} />
        <Route exact path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )} />
      </div>
    );
  }
}

export default BooksApp;
