var preloader = document.getElementById("preloader");
function Preloader(){
    var preloader = document.getElementById("preloader");
    preloader.classList.toggle("noPreloader");
}

setTimeout(function(){
            Preloader();
          }, 1000)