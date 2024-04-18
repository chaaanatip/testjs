//1.
function findMin(arr) {
    return Math.min(...arr);
}

let numbers = [34, 1, 58, 8, 21, 5, 13, 3, 89, 7];
console.log(findMin(numbers)); // 1

//2.
let numString = "1234";
let num = parseInt(numString);
console.log(typeof num); // Number

//3.
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5

//4.
let value1 = [1, 2, 3];
let value2 = [];
let value3;
console.log(value1.length !== 0); // value1 false
console.log(value2.length === 0); // value2 true
console.log(value3 !== undefined && value3.length !== 0); // value3 false


//5.
let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, 
                true, 56, false, {name: "John", surname: "Smith"}, 
                {name: "Joy", surname: "Stein"}];

mixedArray.forEach(item => {
    if (typeof item === "object" && !Array.isArray(item)) {
        console.log(item);
    }
});

//6.
let x = 10;
let y = "20";
let result = x + y;
console.log(result); // "1020"
console.log(typeof result); // "string"

//7.
let person = {
    name: "John",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "painting"]
};

person.age = 30;
delete person.isStudent;

//8.
let peopleObj1 = { name: "John", surname: "Doe" };
let peopleObj2 = { name: "Sarah", surname: "Wilson" };
let peopleObj3 = { name: "David", surname: "Brown" };
if (peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() && 
    peopleObj2.name.toLowerCase() === peopleObj3.name.toLowerCase()) {
    console.log("These three objects have the same name.");
}

//9.
let people = [
    { name: "John", surname: "Doe" },
    { name: "olivia", surname: "Smith" },
    { name: "john", surname: "Johnson" },
    { name: "Sarah", surname: "Wilson" },
    { name: "David", surname: "Brown" },
    { name: "Emily", surname: "Davis" },
    { name: "David", surname: "Miller" },
    { name: "Olivia", surname: "Taylor" },
    { name: "david", surname: "Anderson" },
    { name: "Sophia", surname: "Clark" }
];
let result = [];
let names = {};
for (let person of people) {
    let nameLower = person.name.toLowerCase();
    if (!names[nameLower]) {
        names[nameLower] = true;
        result.push(person.name);
    }
}
console.log(result); // ["John", "olivia", "Sarah", "David", "Emily", "Olivia", "Sophia"]

//10.
function uniqueElements(arrayValue) {
    return Array.from(new Set(arrayValue));
}

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
numbers = uniqueElements(numbers);
console.log(numbers); // [1, 3, 8, 21, 13, 7]

//11.
function reverseArray(arrayValue) {
    return arrayValue.reverse();
}

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
numbers = reverseArray(numbers);
console.log(numbers); // [7, 8, 3, 13, 8, 21, 8, 3, 1, 1]

//12.
const users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Dave', age: 24 }
];  

users.forEach(({ id, name, age }) => {
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
});


//13.
const numbers = [1, 2, 3, 4, 5];
const [first, second, , , last] = numbers;
console.log(first, second, last); // 1 2 5


//14.
function multiplicationTable(number) {
    const table = [];
    for (let i = 1; i <= 12; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }
    return table;
}
console.log(multiplicationTable(2))

//15.
function calculateGrade(scores) {
    // Calculate the average score
    const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;

    // Determine the letter grade based on the average score
    let grade;
    if (averageScore >= 90 && averageScore <= 100) {
        grade = 'A';
    } else if (averageScore >= 80 && averageScore <= 89) {
        grade = 'B';
    } else if (averageScore >= 70 && averageScore <= 79) {
        grade = 'C';
    } else if (averageScore >= 60 && averageScore <= 69) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

console.log(calculateGrade([80, 95, 90, 70, 100])); // Output: B


//16.
function convertTemperature(temperature, mode) {
    if (mode === 'FtoC') {
        return (temperature - 32) * 5/9;
    } else if (mode === 'CtoF') {
        return (temperature * 9/5) + 32;
    } else {
        return 'Invalid mode. Please use "FtoC" or "CtoF".';
    }
}

console.log(convertTemperature(68, 'FtoC'));  // Output: 20
console.log(convertTemperature(20, 'CtoF'));  // Output: 68
console.log(convertTemperature(100, 'Unknown'));  // Output: Invalid mode. Please use "FtoC" or "CtoF".


//17.
function sumPositiveNumbers(numbers) {
    // Initialize sum to 0
    let sum = 0;

    // Iterate through the array
    for (let number of numbers) {
        // Add positive numbers to the sum
        if (number > 0) {
            sum += number;
        }
    }

    // Return the sum
    return sum;
}

console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150]));  // Output: 42
console.log(sumPositiveNumbers([-1, -2, -3]));  // Output: 0
console.log(sumPositiveNumbers([]));  // Output: 0


//18.
function sameNumbers(numArray1, numArray2) {
    // Concatenate the two arrays and remove duplicates using a Set
    const combinedArray = [...new Set([...numArray1, ...numArray2])];
    // Sort the combined array in ascending order
    const sortedArray = combinedArray.sort((a, b) => a - b);
    return sortedArray;
}

console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8]));



