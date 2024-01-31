const number = [1,2,3,4,5,6,7,8]
const sum = number.reduce((a, b)=> a+b,0);
console.log(sum) //sum

const avg = sum/number.length
console.log(avg) //average

console.log(Math.min(...number)) //min

console.log(Math.max(...number)) //max
