const addDigits =(num)=>{
    while(num>=10){
      num = sumOfDigits(num)
    }
    return num
}

const sumOfDigits =(num)=>{
    let sum =0;
    while(num>0){
        sum += num %10;
        num = Math.floor(num/10)
    }
    return sum
}
  
  // Example
  const inputNumber = 1001;
  console.log( addDigits(inputNumber)); // Output: 2
