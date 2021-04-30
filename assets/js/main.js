function replace() { 
document.getElementById("welcome").style.display="none"; 
document.getElementById("main-menu").style.display = "flex";
}

function navToggle() {
    var x = document.getElementById("navbar-nav");
  if (x.style.display === "flex") {
      x.style.display = "none";
  } else {
      x.style.display = "flex";
  }
}