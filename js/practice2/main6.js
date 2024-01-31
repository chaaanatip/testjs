class Elevator {
    constructor(maxFloor, minFloor) {
        this.maxFloor = maxFloor;
        this.minFloor = minFloor;
        this.currentFloor = 0;
    }

    goUp() {
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++;
        }
    }

    goDown() {
        if (this.currentFloor > this.minFloor) {
            this.currentFloor--;
        }
    }

    goToFloor(floor) {
        if (floor >= this.minFloor && floor <= this.maxFloor) {
            this.currentFloor = floor;
        }
    }

    displayFloor() {
        console.log(`Current Floor: ${this.currentFloor}`);
    }
}

// Create an instance of Elevator
const myElevator = new Elevator(10, 0);

// Example usage
myElevator.goUp();
myElevator.displayFloor();  // Output: Current Floor: 1

myElevator.goDown();
myElevator.displayFloor();  // Output: Current Floor: 0

myElevator.goToFloor(5);
myElevator.displayFloor();  // Output: Current Floor: 5
