let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, true,56,false, {name:
    "John", surname: "Smith"}, {name: "Joy", surname: "Stein"}];

mixedArray.forEach((element)=> {
    if(typeof element === 'object'){
    console.log(element)}
})

// let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, true, 56, false, {name: "John", surname: "Smith"}, {name: "Joy", surname: "Stein"}];

// mixedArray.forEach((element) => {
//     if (typeof element === 'object' ) {
//         console.log(element);
//     }
// });