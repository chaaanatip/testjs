function sumPositiveNumbers(numbers) {
    sum = 0
    numbers.map((num)=> {
        if(num>0){
           return sum += num
        } else 
        return 0
    })
    return sum
}
console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150]));
console.log(sumPositiveNumbers([-1, -2, -3]));
console.log(sumPositiveNumbers([])); 