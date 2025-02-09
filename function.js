function add(a,b)
{
    return (a+b);
    
}

// const result= add(2,5);
// console.log(result);


function logInUserMessage(userName){
    if(! userName)
    {
     console.log("Please enter a uerName");
     return 
    }
    return `${userName} just logged in`;
}
//  console.log(logInUserMessage());



function calculateCartPrice(...num)
{
    return num;
}

console.log(calculateCartPrice(100, 200, 400));


const user={
    name:"amit",
    price: 120
}

function handleObject(anyobject)
{
   console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObject(user)