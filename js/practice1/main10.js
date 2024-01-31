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

let current = [];
let sortedNames = people.map(person => person.name.toLowerCase()).sort();
console.log(sortedNames)
sortedNames.sort((a, b) => {
    if (a === b && !current.includes(b)) {
        current.push(b);
    }
});

console.log(current); // ["david", "john", "olivia"]
