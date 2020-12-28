window.onscroll = function() {scrollFunction(x);scrollBottom(y);};

function scrollFunction(x) {
    var image=document.getElementById("logo");
    var nav=document.getElementsByClassName("navbar-nav");
    var cont=document.getElementById("contact");
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    if(x.matches){
      image.style.width = "170px";
      image.style.margin = "16px 0";
      cont.style.margin="20% 0 0 90%";
    }
    else{
      image.style.width = "170px";
      image.style.margin = "16px 0";
      image.style.right="0";
      cont.style.margin="20% 0 0 95%";
    }
      image.classList.add("rotate");
      image.classList.remove("rotateI");
      // contact
      cont.style.backgroundColor="rgb(0,0,0,0.5)";
    
  } 
  else {
    image.style.width = "50%";
    image.style.margin = "13vw 25vw";
    image.classList.remove("rotate");
    image.classList.add("rotateI");
      //contact
    cont.style.margin="inherit";
    cont.style.backgroundColor="initial";
  }
}
var x=window.matchMedia("(max-width: 768px)");
var y=window.matchMedia("(max-width: 1100px)");
// scrollFunction(x);
function logoFunction(){
  var image=document.getElementById("logo");
  if(image.style.visibility==="hidden"){
    image.style.visibility="visible";
  }
  else{
    image.style.visibility="hidden";
  }
}
function scrollBottom(y){
  var image=document.getElementById("logo");
  var ht=document.body.scrollHeight-screen.height;
  var cont=document.getElementById("contact");
  if(pageYOffset >= ht)
  {
    if(y.matches)
    {
      image.style.margin = "400 35%";
      image.style.width = "40%";
    }
    else
    {
      image.style.margin = "25vw 25vw 200px 25vw";
      image.style.width = "40%";
    }
      //contact
    cont.style.margin="200 40%";
    $("#contact").fadeOut(400);
    $("#contact-card").fadeIn(1200);
  }
  else
  {
    $("#contact").fadeIn(500);
    $("#contact-card").fadeOut(400);
  }
}
