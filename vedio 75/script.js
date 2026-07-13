const { useCallback } = require("react");

console.log("Hello, World!");
console.log("This is a sample JavaScript file.");



setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);   
console.log("This message is displayed immediately after the previous log.");

const callback = (arg)=>{
    console.log(arg)
}

const loadScript = (src , callback )=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Pushkar singh");
    sc.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
  