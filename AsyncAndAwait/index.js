//promise revision

// console.log("Hey this is first time")
// let mypromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("Hey this is me second time")
//     resolve("I am resolved")
// },5000);
// });
// console.log(mypromise);
// console.log("Hey this is me third time");
// mypromise.then(message=>{
//     console.log(message);
//     return 3;
// }).then(message1=>{
//     console.log(message1);
// })

//async and await
async function getData() {
     setTimeout(function() {
        console.log("I am inside set Timeout block")
    }, 10000);
}

let output  =  getData();
console.log(123);

// //fetch API

// async function getData() {

//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     // parse json - async
//     let data = await response.json();
//     console.log( data );
// }
// getData();
//scenario:
//prepare url / api endpoint -> sync
//await //fetch data - > network call -> async
//process data ->sync

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }),
    headers: myHeaders,
  };
//apikey
async function getData() {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}
async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Love babbar -> I am in love with someone.',
          userId: 5,
          /* other post data */
        })
      })
    let data = await response.json();
    console.log("post data response: ", data);
}

async function processData() {
    await postData();
    await getData();
}
processData();