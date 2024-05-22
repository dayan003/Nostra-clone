// offer bar 
var offerbar = document.querySelector(".offerbar")
var offericon =document.querySelector(".offericon")
offericon.addEventListener("click",function(){
  offericon.parentElement.remove()
})
// navbar
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
//slider
var right = document.querySelector("#right")
var left = document.querySelector("#left")
var slidercont =document.querySelector(".slidercont")
var margin=0
right.addEventListener("click",function(){
  margin=margin+100
  if(margin>200){
    margin=0
    slidercont.style.marginLeft=margin+"vw";
  }
  else{
  slidercont.style.marginLeft="-"+margin+"vw";
  }
  
})
left.addEventListener("click",function(){
  if(margin==0){
    margin=200
    slidercont.style.marginLeft="-"+margin+"vw";
  }else{
    margin=margin-100
  slidercont.style.marginLeft="-"+margin+"vw";
  }
})
//most wanted
var imgt = document.querySelectorAll(".imgt")
imgt.forEach((btn) =>{
  btn.addEventListener("click",function(e){
    if(e.target.src.indexOf("blackheart")>0){
      e.target.src="img/icons/redheart.png"
    }else{
      e.target.src="img/icons/blackheart.png"
    }
  })
})