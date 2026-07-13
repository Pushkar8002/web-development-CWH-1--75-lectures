console.log("this is my promise");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random() ;
    if(a > 0.5){
        reject("this is my error");
    }
    else{
          setTimeout(() => {
        console.log("this is my promise");
        resolve("Pushkar singh");
    }, 3000);
}
});

   


prom1.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("this is my second promise");
            resolve("Second promise resolved");
        }, 2000);
    });
});