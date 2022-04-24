import axios from '../custom-axios/axios';

const LibraryService ={
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchBookTypes: () => {
        return axios.get("/books/bookTypes");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, bookType, author, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "bookType" : bookType,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    editBook: (id, name, bookType, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "bookType" : bookType,
            "author" : author,
            "availableCopies" : availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    markAsTaken: (id) => {
        return axios.get(`/books/markAsTaken/${id}`);
    }
}

export default LibraryService;