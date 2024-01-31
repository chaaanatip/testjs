function calculateGrade(scores) {
   
    let sum = scores.reduce((a, b) => a + b, 0);
let avg = sum / scores.length;
    console.log(avg)
    
        if(avg < 60){
            return 'F'
        }if(avg >= 60 && avg <= 69){
            return 'D'
        }if(avg >= 70 && avg <= 79){
            return 'C'
        }if(avg >= 80 && avg <= 89){
            return 'B'
        }if(avg >= 90 && avg <= 100){
            return 'A'
        } 
        
    return grade
}
console.log(calculateGrade([80, 95, 90, 70, 100]));