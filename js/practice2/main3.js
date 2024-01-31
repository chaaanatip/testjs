// practice 002
// 1. class
class Book {
    constructor(title,author,yearPublished) {
      this.title = title;
      this.author = author;
      this.yearPublished = yearPublished;

    if (this.title === ''){
        this.title = 'no title' 
    }
    if (this.author === ''){
        this.author = 'no author'
    }
    if (this.yearPublished === 0 ){
        this.yearPublished = 0
    }
}
     getInfo() {
        return ${this.title} ${this.author} ${this.yearPublished}
     }


}
// 2. object

// Test cases
const book1 = new Book('Title1', 'Author1', 2000);
console.log(book1.getInfo()); // Output: Title1 Author1 2000

const book2 = new Book('', 'Author2', 0);
console.log(book2.getInfo()); // Output: no title Author2 0

const book3 = new Book('Title3', '', 
1990);
console.log(book3.getInfo()); // Output: Title3 no author 1990

const book4 = new Book('', '', 0);
console.log(book4.getInfo()); // Output: no title no author 0

// 3. class
// class Book {
//     constructor(title, author, pages, genre) {
//       this.title = title
//       this.author = author
//       this.pages = pages
//       this.genre = genre
//     }
//     getSummary() {
//       return Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}
//     }
//   }
//   class Library {
//     constructor(name) {
//       this.name = name
//       this.books = []
//     }
//     addBook(newBook) {
//       this.books.push(newBook)
//     }
//     getBooksByGenre(genre) {
//       return this.books.filter((Book) => Book.genre === genre)
//     }
//     getTotalPagesByGenre(genre) {
//       const filterbook = this.getBooksByGenre(genre)
//       return filterbook.reduce((totalpage, Book) => totalpage + Book.pages, 0)
//     }
//   }
//   //4 เรียกใช้ + สร้าง object
//   const mylib = new Library('SMD')
//   const mybook1 = new Book('SMD1', 'Totti', 535, 'Startown')
//   const mybook2 = new Book('SMD2', 'Muek', 351, 'Someday')
//   const mybook3 = new Book('SMD3', 'PaoIhave', 214, 'Newworld')
//   const mybook4 = new Book('SMD4', 'Resoa', 235, 'Newworld')

//   mylib.addBook(mybook1)
//   mylib.addBook(mybook2)
//   mylib.addBook(mybook3)
//   mylib.addBook(mybook4)

//   console.log(mylib.getBooksByGenre('Newworld'))

//   console.log('--------------')
//   console.log(mylib.getTotalPagesByGenre('Newworld'))

// 5

// class Elevator {
//     constructor(maxFloor,minFloor) {
//       this.maxFloor = maxFloor
//       this.minFloor = minFloor 
//       this.currentFloor = 0
//     }
//     goUp() {
//       if(this.currentFloor < this.maxFloor){
//         this.currentFloor++
//       }
//     }
//     goDown() {
//       if(this.currentFloor > this.minFloor){
//         this.currentFloor--
//       }
//     }
//     goToFloor(floor) {
//       if(floor >= this.minFloor && floor <= this.maxFloor){
//         this.currentFloor = floor

//       }
//     }
//     displayFloor(){
//     console.log(this.currentFloor)
//     }

// }
// //6 test
// const lip = new Elevator(10,0)

// lip.goUp()
// lip.displayFloor()
// lip.goDown()
// lip.displayFloor()
// lip.goToFloor(8)
// lip.displayFloor()