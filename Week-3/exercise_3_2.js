let printDetails = function(city, pincode){
    console.log(`Hi I am ${this.fname} ${this.lname} and I live in ${city} pin ${pincode}`)
}

person1 = {
    fname: "Lucifer",
    lname: "Robo",
}


printDetails.call(person1, 'Delhi', '123');

printDetails.apply(person1, ['Mumbai', '1234']); // we can pass array with apply() method

let  myFun = printDetails.bind(person1, 'Guwahati', '5678'); //Bind method stores the results inside another variable and can use later
myFun();
