
let navbar = document.querySelector(".header");
let menu =document.querySelector(".header .icons .fa-bars");
let bars = document.querySelector(".header .navbar");
let menu_bar = document.querySelector(".menu_bar");
let menu1 =document.querySelectorAll(".menu1");
let loading = document.querySelector(".center")

        menu.onclick = () =>{
      menu_bar.classList.toggle("active");
      // menu1.forEach(function(menuItem){
      //   menuItem.classList.add("active")

      // })
      
  }

  window.onscroll= function(){
    if (scrollY >150) {
      navbar.classList.add('background-navbar');
    
    } 
    else{
    navbar.classList.remove("background-navbar");
    }


    window.addEventListener('scroll', function() {
      // Get the menu element with active class

    
      // Check if the menu element has active class and remove it
      if (menu_bar.classList.contains('active')){
        menu_bar.classList.remove("active");
       
        
      }
    });

  }
    
window.onload=function(){
  loading.style.display ="none"
  console.log("fdas")

}