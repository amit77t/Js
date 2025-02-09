// singleton  

// oject literals

let mySym= Symbol("key1")
const Jsuser={
    name:" Amit",
    [mySym]:"mykey1",
    age:"22",
    Idno: "234",
    location:"Prayagraj",
    lastLoginDays: [ "Monday", "Saturday"]
}

console.log(Jsuser.name);
console.log(Jsuser["location"])
console.log(Jsuser[mySym])
Jsuser.name= "Aman"
console.log(Jsuser.name);
Object.freeze(Jsuser)
Jsuser.name= "Amankk"
console.log(Jsuser)