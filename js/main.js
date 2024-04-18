//1.Class Book:
class Book {
  constructor(title, author, yearPublished) {
    this.title = title || "no title"
    this.author = author || "no author"
    this.yearPublished = yearPublished || 0
  }

  getInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}`
  }
}
//2.Create an object Book reference 'practice 1':
const practice1 = new Book("JavaScript Practice 002", "Your Name", 2024)
//3.Class Library:
class Library {
  constructor(name) {
    this.name = name
    this.books = []
  }

  addBook(newBook) {
    this.books.push(newBook)
  }

  getBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre)
  }

  getTotalPagesByGenre(genre) {
    return this.books
      .filter((book) => book.genre === genre)
      .reduce((total, book) => total + book.pages, 0)
  }
}
//4.Create a 'Book' object and a 'Library' object for 'Practice 3':
const book1 = new Book("Harry Potter", "J.K. Rowling", 400, "Fantasy")
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 300, "Fantasy")

const library = new Library("My Library")
library.addBook(book1)
library.addBook(book2)
//5.Class Elevator:
class Elevator {
  constructor(maxFloor, minFloor) {
    this.currentFloor = 0
    this.maxFloor = maxFloor
    this.minFloor = minFloor
  }

  goUp() {
    if (this.currentFloor < this.maxFloor) {
      this.currentFloor++
    }
  }

  goDown() {
    if (this.currentFloor > this.minFloor) {
      this.currentFloor--
    }
  }

  goToFloor(floor) {
    if (floor >= this.minFloor && floor <= this.maxFloor) {
      this.currentFloor = floor
    }
  }

  displayFloor() {
    console.log(`Current Floor: ${this.currentFloor}`)
  }
}
//6.Create a 'Elevator' object for 'Practice 5':
const elevator = new Elevator(10, 0)
//7.Class bus
class Bus {
  constructor(busNumber, destinations) {
    this.busNumber = busNumber
    this.destinations = destinations
  }
}
//8.Create a 'Bus' object for 'Practice 7':
const bus = new Bus(101, ["Stop1", "Stop2", "Stop3"])
//9.Class BusStop:

class BusStop {
  constructor(destinations) {
    this.destinations = destinations
    this.buses = []
  }

  addBus(bus) {
    if (bus.destinations.includes(this.destinations)) {
      this.buses.push(bus)
      return true
    }
    return false
  }

  removeBus(busNumber) {
    const index = this.buses.findIndex((bus) => bus.busNumber === busNumber)
    if (index !== -1) {
      this.buses.splice(index, 1)
      return true
    }
    return false
  }

  listBuses() {
    return this.buses.map((bus) => ({
      busNumber: bus.busNumber,
      destinations: bus.destinations,
    }))
  }
}
//10.Create a 'Bus' and 'BusStop' object for 'Practice 9':
const busStop = new BusStop("Main Street")
busStop.addBus(bus)
