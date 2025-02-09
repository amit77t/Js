const addTwo=(num1, num2)=>{
    return num1+num2
}

// If curly brakets use then return must be use

const addNum=(num1, num2) => (num1+num2);
console.log(addTwo(2,5));

// If parenthesis use then return statement is not used


// const mul=(a, b) =>{
//     return a*b;
// }


// console.log(mul(2,4));

// const object=(name, palce )=>(
//       console.log(`his name is ${name } and live in ${palce}`)
// );


// object("Amit","Mumbai")

//Immediately Invoked Function Expressions IIFE

(function fact(){

    console.log("Jupiter is largest planet in solar system");

})()
