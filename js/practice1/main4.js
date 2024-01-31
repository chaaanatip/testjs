function arrEmpty(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

let value1 = [1, 2, 3];
let value2 = [];
let value3;

console.log(arrEmpty(value1)); // Output: false
console.log(arrEmpty(value2)); // Output: true
console.log(arrEmpty(value3)); // Output: false
