new Promise(function( resolve, reject){

 
  setTimeout(function(){
    console.log("Promise consumed ");
    resolve();
  
  }, 1000);

}).then(function(){

    console.log("Async one resolved")
})


const promiseThree= new Promise(function(resolve, reject){

    setTimeout(function(){

        resolve({username: "mike", email: "mike@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
 console.log(user);
})



const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
          
        let error= true  ;
        if(!error){
            resolve({ username:"amit", password:"123"})
        }
        else{
            reject('Error: something went wrong');
        }
        
        
    }, 1000)
})


promiseFour
.then((user)=>{
     console.log(user);
     return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("promises is either resolved or rejected");
})


const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
          
        let error= true  ;
        if(!error){
            resolve({ username:"Harry", password:"123"})
        }
        else{
            reject('Error: Js went wrong');
        }
        
        
    }, 1000)
});


 async function consumePromiseFive(){
    const response=await promiseFive
    console.log(response);
 }

 consumePromiseFive()