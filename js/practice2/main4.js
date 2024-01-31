class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

        if (this.title === '') {
            this.title = 'no title';
        }
        if (this.author === '') {
            this.author = 'no author';
        }
        if (this.yearPublished === '') {
            this.yearPublished = 0;
        }
    }

    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}`;
    }
}

const book1 = new Book('Title1', 'Author1', 2000);
console.log(book1.getInfo()); // Output: Title1 Author1 2000

const book2 = new Book('', 'Author2', 0);
console.log(book2.getInfo()); // Output: no title Author2 0

const book3 = new Book('Title3', '', 
1990);
console.log(book3.getInfo()); // Output: Title3 no author 1990

const book4 = new Book('', '', 0);
console.log(book4.getInfo()); // Output: no title no author 0
