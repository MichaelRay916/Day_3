//for condition example
for(i=0;i<=10;i++){
    console.log(i)
}

//for in condition example
const cars = ["Audi","volvo","Benz","mini"];
for(let x in cars){
  console.log(cars[x]);
}

//for of condition example
let name = "Michael";
for(let x of name){
 console.log(x);
}

//for each condition example

const animals = ["cat","monkey","cow","dog","lion","tiger"]

animals.forEach((dog)=> console.log(dog))

//Another example in foreach

let array = [4,6,1,8,0]
array.forEach((number)=>console.log(number*3))