const nums = [-1,0,5,10,49]
let min=nums[0]
let max=nums[0]
function findMin(items){
    let min=nums[0]
    items.forEach((item)=>{
        //find min
        if(item<min)
        min=item
    })
    return min
}

function findMax(items){
    let max=nums[0]
    items.forEach((item)=>{
        //find min
        if(item>min)
        max=item
    })
    return max
}
console.log(max,min)
console.log(findMin(nums))
console.log(findMax(nums))