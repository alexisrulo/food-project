const menu = document.querySelector(".main-nav");
const buttonShowMenu = document.querySelector(".btn-mobile-nav");

buttonShowMenu.addEventListener("click", () => {
  menu.classList.toggle("nav-open");
});

// Sticky

const hero = document.querySelector('.section-hero')

const observer = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if(!ent.isIntersecting){
    document.body.classList.add('sticky')
  } else {
    document.body.classList.remove('sticky')
  }
}, {
  // In hte viewport
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
observer.observe(hero);