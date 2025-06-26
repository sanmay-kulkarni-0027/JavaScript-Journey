//function hoisting
addNum(2,3);
function addNum(num1,num2){
    console.log(num1+num2);
}
//variable hoisting
//for var variable
// console.log(num); // undefined
// var num = 10;
// console.log(num);

//for let and const varibale
// console.log(num); // ReferenceError: num is not defined
// console.log(num2)
// let num=10;
// const num2=100;

//call stack functions

// function a(){
//     console.log('a function is called');
// }
// function b(){
//     console.log('b function is called');
//     a();
// }
// b();

// function c(b,name){
//     console.log(name+" is called with ");
//     b();
// }
// c(b,'b');


function myfunc(){
    return function(a,b){
        return a+b;
    }
}
let refun=myfunc();
console.log(refun(2,3));