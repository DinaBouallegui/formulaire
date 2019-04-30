function validateForm () { 
if ( document.forms ["myform"] ["firstname"].value === "") alert  ("Name and Surname must be filled out")
if ( document.forms ["myform"] ["address"].value === "")   alert  ("Address must be filled out")
if ( document.forms ["myform"] ["email"].value === "")     alert  ("E-mail must be filled out")
if ( document.forms ["myform"] ["password"].value === "")  alert  ("Pasword must be filled out")
if ( document.forms ["myform"] ["comments"].value === "")  alert  ("Comments  must be filled out")
if (document.forms ["myform"] ["password"].value.length < 8) alert("The password needs to beless than 8 characters")
let x= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
if(x.test(document.forms ["myform"] ["password"].value)== false) 
    alert ("The password must be a combination of charatacters , numbers and at least a capital letter")


let y= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (y.test(document.forms ["myform"] ["email"].value) == false ) alert ("The email must be valid")


} 







