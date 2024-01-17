const n = 2

var isHappy = function(n) {
    const getDigitSquareSum =(number)=>{
       let sum =0;
       while(number>0){
        const digit = number % 10;
        sum += digit*digit;
        number = (number - digit) /10
       }
       return sum
    }

    let currentNumber = n 
    while (currentNumber !==1 && currentNumber !==4){
        currentNumber = getDigitSquareSum(currentNumber)
    }

    return currentNumber ===1
};

console.log(isHappy(n))