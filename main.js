console.log("hi")

// <<<<N1>>>>>>> 

const a=5;
const b='text';

if(a===b){
    console.log("ტოლია")
}else{
    console.log("არ არის ტოლი")
}


// <<<<N2>>>>>>> 
function check(x, y) {
    if (x === y) {
      return x + y; 
    } else {
      return false; 
    }
  }


console.log(check(a,b))



// <<<<N3>>>>>>> 
function fahrenheitToCelsius(fahrenheit) {
    if (isNaN(fahrenheit)) {
      return "false";
    }
  
    const celsius = (5 / 9) * (fahrenheit - 32);
  
    return celsius;
  }
  
  console.log(fahrenheitToCelsius(30));
  