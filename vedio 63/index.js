let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);


let  obj = { name: "John", age: 30, city: "New York" };
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}