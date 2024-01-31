//  Write a function uniqueElements(arrayValue) to return array of the unique elements
// from an array.
// Initiate code:
let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
function uniqueElements(arrayValue) {
    let dnumber = []
    let numarr = []
    arrayValue.forEach(element => {
        if(!dnumber.includes(element)){
            dnumber.push(element)
        }
        else if(dnumber.includes(element)){
            if(!numarr.includes(element)){
                numarr.push(element)
            }
        }
    });
    dnumber.sort((a,b)=> a-b)
console.log(dnumber)
console.log(numarr)
    }

    
console.log(uniqueElements(numbers))
// array numbers after use function uniqueElements will be [1, 3, 8, 21, 13, 7]let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
