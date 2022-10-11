const header = document.querySelector('.header_container');
const nav = document.querySelector('.navbar');
const ourProjects=document.querySelectorAll('fifth_section_tabs')
const navHeight = nav.getBoundingClientRect().height;

const hamburger = document.getElementById('hamburger')
const linksDiv = document.querySelector('.nav_ul')

const stickyNav = function (entries) {
  const [entry] = entries;
  
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
} 
 
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin:`-${navHeight}px`,
});

headerObserver.observe(header);

 

ourProjects.forEach(function (e) {
    e.preventDefault()
    e.classList.toggle('active')
}
  )


  
let mybutton = document.getElementById("myBtn");

 
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 


hamburger.addEventListener('click', () => {
  linksDiv.classList.toggle('show');
})


var swiper = new Swiper(".mySwiper", {
  loop: true,
  
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
     
    },
    768: {
      slidesPerView: 2,
     
    },
    1024: {
      slidesPerView: 3,
     
    },
  },
});

var swiper = new Swiper(".fourth_section_img", {
  loop: true,
  
  spaceBetween: 13,
  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});