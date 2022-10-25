
var eventmose=" ";
var canvas=document.getElementById("canvas");
var contexto=canvas.getContext("2d");
var cor="green";
var lar=1;
var ultpx ,ultpy;
 
canvas.addEventListener("mousedown", masedonw);
function masedonw()
{
  cor =document.getElementById("cor").Value;
  lar=document.getElementById("line").Value;
    eventmose="musendown";

}

function apagar(){
  contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);
}

canvas.addEventListener("mouseup", maseinup);
function maseinup()
{
    eventmose="moseup";

}

canvas.addEventListener("mouseleave", maseingliv);
function maseingliv()
{
    eventmose="moseleave";

}

canvas.addEventListener("mousemuve", maseingmouse);
function maseingmouse(event)
{
  var posix=event.clientX-canvas.offsetLeft;
  var posiy=event.clientY-canvas.offsetTop;
  if(eventmose=="musendown"){
    contexto.beginPath();
    contexto.strokeStyle=cor;
    contexto.lineWidth=lar;
    contexto.moveTo(ultpx,ultpy);
    contexto.lineTo(posix,posiy);
    contexto.stroke();

  }  
ultpx=posix;
ultpy=posiy;
}