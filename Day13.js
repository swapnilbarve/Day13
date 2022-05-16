// function a(){
//     console.log("I am a fn");
// }
// Function supports hoisting 
// function body is called function statement/definition.
// Fn statement supports hositing, i.e. calling the function even before declaring the function.

// var b = function(){//this is a function expression /anonumous fn 
//   console.log ("I am fn B");
// }
// since here this fn is anonymous, it won't be support hoisting, function exprrsssion dont't 
// console.log(b);
// b();

// A function expression is a unnamed fn assigned to the variable, The variable receives a function defn, which in turn can call the function by calling the variable- name{a();}

// {
//     let d = function abc(){
//         console.log("This is a fn abc")
//     }
//     d();//gives the output 
// }
// d();//will throw not defined error as not in the scope.
// the fn can only be called inside the scope and not outside the scope.

 //arrow functions//Declared in ES6

// let f = () => {
//     console.log("I am fn F");
// }
// f();
//First Class Functions - The functions can be passed as values into another functions or can be returned from 
// another functions a values . This unique feature of functions makes them called as first class functions /First
// class citizens.

//Higher Order Function(HOF) - The function which accept the FCF or return them are called as Higher Order Function .

let g = function(param){//HOF 
    console.log("I am fn g");
    console.log(param);
    param();//call back function 
}

function h(){//FCF
    console.log("I am fn h");
}

g(h);

let i = function(){//HOF
    return function j(){//FCF
        console.log("I am fn J");
    }
}

console.log(i());

setTimeout(()=> {
    console.log("Hi I am a inside a call backback function ")
},2000);

const sayHi = (nameOfFriend) => {
    console.log("hello", nameOfFriend);
}

const greeting = (friend, callBackFunction) => {
    callBackFunction(friend);
}

greeting("Bala",sayHi);
