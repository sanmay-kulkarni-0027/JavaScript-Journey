
console.log("sanmay");
//objects
let obj={
    name:"sanmay",
    age:20,
    city:"delhi",
    greet:function(){
        console.log("hello");
    }
}
// console.log(obj);
// obj.greet();
//arrays

let brr=[11,"sanmay",true]

console.log(brr);
let arr1=new Array(1,2,3,4);
console.log(arr1);

//array's map functions
//creates new array as result of some operation
let arr=[1,2,3,4];
let arr2=arr.map((val)=>{
    return val*val;
});
console.log(arr2);

//array's filter function
//creates new array that give true for a condition
let arr3=arr.filter((val)=>{
        return val>=3;
});
console.log(arr3);

let myarr=[1,"kunal",3,"ravi"];
let ans=myarr.filter((val)=>{
    if(typeof(val)==='string'){
        return true;
    }else{
        return false;
    }
})
console.log(ans);


// array's reduce function
//returns a single value as result of some operation
let arr4=arr.reduce((acc,val)=>{
    return  acc+val;
});
console.log(arr4);

//foreach loop array
let narr=[10,20,30]
narr.forEach((val,index)=>{
    console.log(`value is ${val} at index ${index}`)
})