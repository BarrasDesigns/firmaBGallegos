function getFullscreenElement() {
    return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement
}

function iniciar() { 
    var boton=document.getElementById('fullscreen'); 
    boton.addEventListener('click', presionar, false); 
 } 
 function presionar() { 
    var video=document.getElementById('mivideo'); 
    video.play(); 
 } 
 window.addEventListener('load', iniciar, false); 

function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    } else {
        document.getElementById("mivideo").requestFullscreen().catch((e) => {
            HTMLMediaElement.play();
        });
    }
}

function addEvent(element, evnt, funct){
    if (element.attachEvent)
     return element.attachEvent('on'+evnt, funct);
    else
     return element.addEventListener(evnt, funct, false);
  }
  
  addEvent(
      document.getElementById('fullscreen'),
      'click',
      function () { toggleFullscreen();  }
  );