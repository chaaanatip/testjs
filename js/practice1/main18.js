function convertTemperature(temperature,mode) {
    let convert = 0
    if(mode === "FtoC"){
        convert = (temperature - 32) * 5/9
    }else if(mode ==="CtoF"){
        convert = (temperature * 9/5) + 32
    }else{
        return 'Invalid mode. Please use "FtoC" or "CtoF"'
    }
    return convert
}
console.log(convertTemperature(68, 'FtoC'));
console.log(convertTemperature(20, 'CtoF'));
console.log(convertTemperature(100, 'Unknown')); 