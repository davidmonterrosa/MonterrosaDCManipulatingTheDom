// alert("Javascript connected!");
let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3");
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5");




let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2");
let affectMe3 = document.getElementById("affectMe3");
let affectMe4 = document.getElementById("affectMe4");
let affectMe5 = document.getElementById("affectMe5");


btnChange1.addEventListener("click", function(event){
    // alert("Button Clicked!");
    affectMe1.innerText = "Changed the Value to this string";
});