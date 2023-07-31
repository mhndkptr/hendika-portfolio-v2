// To Top Page Button Trigger
const toTopBtn = document.querySelector(".toTopPage");
const scrollBtnDisplay = function () {
  if (window.scrollY >= 50) {
    toTopBtn.style.display = "inline-block";
  } else if (window.scrollY == 0) {
    toTopBtn.style.display = "none";
  }
};
window.addEventListener("scroll", scrollBtnDisplay);

// Navbar Menu
const navbarMenu = document.querySelector('.navbarMenu');
const navbarNav = document.querySelector('nav .navbarNav');
const nav = document.querySelector('nav');
navbarMenu.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if( !navbarNav.contains(e.target) && !nav.contains(e.target) ) {
        navbarNav.classList.remove('active');
    }
});
