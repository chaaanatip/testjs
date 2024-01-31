function swap(a,b){
    let c = [a,b]
    c.push(c[0])
    c.shift()
    return c
}

console.log(swap(3,1))