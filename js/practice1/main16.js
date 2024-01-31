function multiplicationTable(number){
    const base = []
    for(let i = 1;i<13;i++){
        const sum = `${number} x ${i} = ${i*number}`
        base.push(sum)
    }
    return base
}
console.log(multiplicationTable(5));