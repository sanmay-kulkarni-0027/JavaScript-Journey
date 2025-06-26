

console.log("Hey this is first time")
let mypromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Hey this is me second time")
    resolve("I am resolved")
},5000);
});
console.log(mypromise);
console.log("Hey this is me third time");
mypromise.then(message=>{
    console.log(message);
    return 3;
}).then(message1=>{
    console.log(message1);
})
// let firstPromise = new Promise( (resolve, reject) => {

//     setTimeout(function sayMyName() {
//         console.log("My Name is Love babbar");
//     }, 0);
// } );

// let promise1 = new Promise((resolve, reject)=> {
//     let success = true;
//     if(success) {
//         resolve(10);
//     }
//     else {
//         reject("Internal Server Error");
//     }
// });

promise1.then((message)=> {
    console.log("first msg:" + message);
    return 20;
}).then((message)=> {
    console.log("second msg: " + message);
    return 30;
}).then((message)=> {
    console.log("third msg: " + message);
}).catch((error) => {
    console.error(error);
}).finally((message) => {
    console.log("Main to final hu, chalunga pakka")
})




// promise1.then((message) => {
//     console.log("Then ka message is " + message);
// }).catch((error)=> {
//     console.log("Error: " + error);
// })


let promise1 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 1000, "First");
})
let promise2 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 2000, "Second");
})
let promise3 = new Promise((resolve, reject)=> {
    setTimeout(reject, 4000, "Third");
})

Promise.all([promise3, promise2, promise1])
.then((values) => {
    console.log(values);
})
.catch((error)=> {
    console.error("error:" + error);
})