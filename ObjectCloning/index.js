let src = {
    age:15,
    wt:70,
    ht:190
};

let dest = {};
//cloning using iteration
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;

console.log("src: ", src);
console.log("dest: ", dest);

// let src2 = {
//     value:101,
//     name: "Love babbar"
// }

// let dest = Object.assign({}, src, src2);

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);


// let dest = {...src};
// //let dest = src;

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

// console.log(obj)

// obj.color = "White";

// console.log(obj)
