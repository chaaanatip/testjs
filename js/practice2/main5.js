class Book {
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }

    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }

    getTotalPagesByGenre(genre) {
        const booksOfGenre = this.getBooksByGenre(genre);
        return booksOfGenre.reduce((totalPages, book) => totalPages + book.pages, 0);
    }
}

// Example usage:
const myLibrary = new Library('My Library');

const book1 = new Book('Harry Wick', 'Conan', 345, 'Sci-Fi');
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'Fantasy');
const book3 = new Book('1984', 'George Orwell', 328, 'Dystopian');

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log(myLibrary.getBooksByGenre('Sci-Fi'));
console.log(myLibrary.getTotalPagesByGenre('Fantasy'));
