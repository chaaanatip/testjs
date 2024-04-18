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

const practice1 = new Book("JavaScript Practice 002", "Your Name", 2024)

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

const book1 = new Book("Harry Potter", "J.K. Rowling", 400, "Fantasy")
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 300, "Fantasy")

const library = new Library("My Library")
library.addBook(book1)
library.addBook(book2)

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

const elevator = new Elevator(10, 0)

class Bus {
  constructor(busNumber, destinations) {
    this.busNumber = busNumber
    this.destinations = destinations
  }
}

const bus = new Bus(101, ["Stop1", "Stop2", "Stop3"])

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

const busStop = new BusStop("Main Street")
busStop.addBus(bus)
