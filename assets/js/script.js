document.addEventListener("scroll", function(){
    document.querySelector("body").style.backgroundPosition = '0 '+window.pageYOffset+'px';
 });