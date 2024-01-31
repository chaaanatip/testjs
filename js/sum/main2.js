let arr = [1,2,3,4,5,6,7]
let sum =0 
// for(let i =0; i<arr.length;i++){
//     sum += arr[i]
//     console.log(sum)
// }
const sumall = arr.reduce((a,b) => a+b, 0)
console.log(sumall)
const avg = sumall/arr.length
console.log(avg)
// arr.forEach(element => {
//     sum += element;
//     console.log(sum);
// })
// for(const element of arr){
//     console.log(element)
// }
const min = Math.min(...arr)
const max = Math.max(...arr)