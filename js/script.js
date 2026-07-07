
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {

   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};




/*=====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

   if(top >= offset && top < offset + height){
    document.querySelector('.navbar .active').classList.remove('active');
      document.querySelector('nav a[href="#' + id + '"]').classList.add('active');

   };

  });


//sticky//
    let header = document.querySelector('.header');
     
    header.classList.toggle('sticky', window.scrollY > 100);

/*================*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

  /*===================*/

  let darkModeIcon = document.querySelector('#darkMod-icon');

  darkModeIcon.onclick = () => {
      darkModeIcon.classList.toggle('bx-sun');
      document.body.classList.toggle('dark-mode');
  };


  /*============*/
  ScrollReveal({ 
    
    reset: true, 
    distance:'80px',
    duration: 2000,
    delay:200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .featured-project, .timeline-item, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
