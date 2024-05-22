var namecheck = false;
var emailcheck = false;
var phonecheck = false;

var sidenav = document.getElementById("sidenav")
var sideicon = document.getElementById("sideicon")
var navicon = document.getElementById("navicon")
navicon.addEventListener("click",function(){
    sidenav.style.left="0px";
    console.log("hello")
})
sideicon.addEventListener("click",function(){
    sidenav.style.left="-850px";
})
// ---------contact 
var nameinput = document.getElementById("nameinput")
var emailinput = document.getElementById("emailinput")
var phoneinput = document.getElementById("phoneinput")
//selecting icon
var nameicon=document.querySelector(".nameicon")
var emailicon=document.querySelector(".emailicon")
var phoneicon=document.querySelector(".phoneicon")
//selecting label
var namelabel=document.querySelector(".namelabel")
var emaillabel=document.querySelector(".emaillabel")
var phonelabel=document.querySelector(".phonelabel")
//selecting btn
var submitbtn =document.getElementById("submitbtn")

nameinput.addEventListener("keyup",function(){
  var entervalue = nameinput.value
  if(entervalue == ""){
    nameicon.style.visibility="hidden"
    namelabel.style.visibility="visible"
    namecheck=false
  }else{
    nameicon.style.visibility="visible"
    namelabel.style.visibility="hidden"
    namecheck=true
  }
})

emailinput.addEventListener("keyup",function(){
  var entervalue = emailinput.value
  if(entervalue == ""){
    emailicon.style.visibility="hidden"
    emaillabel.style.visibility="visible"
    emailcheck=false
  }else{
    emailicon.style.visibility="visible"
    emaillabel.style.visibility="hidden"
    emailcheck=true
  }
})

phoneinput.addEventListener("keyup",function(){
  var entervalue = phoneinput.value
  if(entervalue == ""){
    phoneicon.style.visibility="hidden"
    phonelabel.style.visibility="visible"
    phonelabel.innerHTML="Enter Your Mobile "
    phonecheck=false
  }else if(entervalue.length<10){
    phoneicon.style.visibility="hidden"
    phonelabel.style.visibility="visible"
    phonelabel.innerHTML="Enter Ten Digit"
    phonecheck=false
  }
  else{
    phoneicon.style.visibility="visible"
    phonelabel.style.visibility="hidden"
    phonecheck=true
  }
})

//selecting popup
var popup = document.querySelector(".popup")
submitbtn.addEventListener("click",function(e){
  e.preventDefault()
  if(phonecheck==true && namecheck==true && emailcheck==true){
    // popup.style.visibility="visible"
    popup.style.marginLeft="0vw"
    popup.style.backgroundColor="green"
    popup.innerHTML="Form Submitted Successfully"
  }else {
    // popup.style.visibility="visible"
    popup.style.marginLeft="0vw"
    popup.style.backgroundColor="red"
    popup.innerHTML="Please Fill the Form"
  }
  setTimeout(
    function()
    {
      popup.style.marginLeft="-150vw"

    },3000)
})




