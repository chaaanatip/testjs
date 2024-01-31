function sameNumbers(numArray1, numArray2) {
    same = []
    numArray1.forEach(element => {
        if(numArray2.includes(element) && !same.includes(element)){
            same.push(element)
        } 
    });
    return same
    };
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const result = sameNumbers(array1, array2);
    console.log(result);