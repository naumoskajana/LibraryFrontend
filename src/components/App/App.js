import './App.css'
import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route, Redirect, Navigate} from "react-router-dom";
import Countries from "../Countries/CountryList/countries";
import Authors from "../Authors/AuthorList/authors"
import Books from "../Books/BookList/books"
import Header from "../Header/header"
import BookEdit from "../Books/BookEdit/bookEdit"
import BookAdd from "../Books/BookAdd/bookAdd"
import LibraryService from "../../repository/libraryRepository";

class App extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            countries: [],
            authors: [],
            books: [],
            bookTypes: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path={"/countries"} exact element={<Countries countries={this.state.countries}/>}/>
                        <Route path={"/authors"} exact element={<Authors authors={this.state.authors}/>}/>
                        <Route path={"/books/add"} exact element={<BookAdd authors={this.state.authors} bookTypes={this.state.bookTypes} onAddBook={this.addBook}/>} />
                        <Route path={"/books/edit/:id"} exact element={<BookEdit authors={this.state.authors} bookTypes={this.state.bookTypes} onEditBook={this.editBook} book={this.state.selectedBook}/>}/>
                        <Route path={"/books"} exact element={<Books books={this.state.books} onDelete={this.deleteBook} onAddBook={this.addBook} onEdit={this.getBook} onMarkAsTaken={this.markAsTaken}/>}/>
                        <Route path={"/"} element={<Navigate replace to={"/books"}/>}/>
                    </Routes>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadCountries();
        this.loadAuthors();
        this.loadBooks();
        this.loadBookTypes();
    }
    
    loadCountries = () => {
        LibraryService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadBookTypes = () => {
        LibraryService.fetchBookTypes()
            .then((data) => {
                this.setState({
                    bookTypes: data.data
                })
            });
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    addBook = (name, bookType, author, availableCopies) => {
        LibraryService.addBook(name, bookType, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id, name, bookType, author, availableCopies) => {
        LibraryService.editBook(id, name, bookType, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    markAsTaken = (id) => {
        LibraryService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            })
    }

}

export default App;
