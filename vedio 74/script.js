let button = document.getElementById('btn');

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events



// button.addEventListener("dblclick", () => {
//     // alert('Button clicked!');
//     document.querySelector(".box").innerHTML = "<b>Button clicked!</b> enjoy the moment!";
// });

button.addEventListener("contextmenu", () => {
    alert(' don\'t hack us! Right click detected!');
 
});

document.addEventListener("keydown", (e) => {
   console.log(e.key, e.keycode);
 
});