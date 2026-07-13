console.log("i am for the loops");
// for loop
for (let i = 0; i < 1000; i++) {
    console.log(i);
}
let obj = {
    name: "satyarth",
    age: 20
};
// for in loop
for (let key in obj) {
    console.log(key);
    console.log(obj[key], );
}

let arr = [1, 2, 3, 4, 5];
// for of loop
for (let value of arr) {
    console.log(value);
}