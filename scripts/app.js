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
    affectMe1.innerText = "Using JavaScript you can change the text of an element!";
});

btnChange2.addEventListener("click", function(event){
    affectMe2.className = " bg-primary";
});

btnChange3.addEventListener("click", function(event){
    affectMe3.className = " text-warning";
});

btnChange4.addEventListener("click", function(event){
    affectMe4.className = " text-center";
});

btnChange5.addEventListener("click", function(event){
    affectMe5.className = " fs-1";
});

btnChange6.addEventListener("click", function(event){
    affectMe6.className = " order-1";
});

btnChange7.addEventListener("click", function(event){
    affectMe7.className = " border border-4 border-success";
});

btnChange8.addEventListener("click", function(event){
    affectMe8.className = " position-absolute top-50 start-100 translate-middle mb-2";
});

btnChange9.addEventListener("click", function(event){
    affectMe9.className = " font-fancy";
});

btnChange10.addEventListener("click", function(event){
    affectMe10.className = " heartbeat";
});
