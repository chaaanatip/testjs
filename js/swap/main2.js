let a = 5
let b = 1
let c = 0
function swap(a, b) {
  c = b
  b = a
  a = c
  return { a, b }
}
 
console.log(swap(a, b))