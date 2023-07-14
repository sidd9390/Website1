
function changeBg()
{
  var navbar = document.getElementById('navigation-bar');
  var scrollValue = window.scrollY;
  if(scrollValue < 70){
    navbar.classList.remove('bgcolornav');
  }
  else{
    navbar.classList.add('bgcolornav');
  }
  
}

window.addEventListener('scroll', changeBg);


let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
