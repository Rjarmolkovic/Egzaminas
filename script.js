var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");

burger.addEventListener("click", function(){
  burger.classList.toggle("rotate");
  sideMenu.classList.toggle("translate");
});


var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click",function(){
    if(this.classList.contains("active")){}
    else {
      for (var j = 0; j < links.length; j++) {
      }
      this.classList.add("active");
    }
  });
}



var swiper = new Swiper(".mySwiper", {
       slidesPerView: 3,
       spaceBetween: 20,
       freeMode: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
     });
