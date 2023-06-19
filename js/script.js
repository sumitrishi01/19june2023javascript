 let car1 = {
    //1. Property:Value
    brand:'TATA',
    modal:"Harrier",
    year:2020,
    engine:"Petrol",
    price:100000,
    type:"sedan",

    //2. Function/methods
    //Funtion defination is one time process
    getFullDetails(){  //fromal arguments/parameters
        //function may return something
        return this.brand +" "+this.engine+' '+this.modal+" "+this.year+" "+this.price
    }
 }

 //function calling/invoking is many time process
 console.log(car1.getFullDetails()); //actual arguments/parameters

 console.log(car1.brand); //object.property
 console.log(car1["brand"]); //object["property"]
 let x = 'brand'
 console.log(car1[x]); //object[expression] x is an expression