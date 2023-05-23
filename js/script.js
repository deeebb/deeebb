// Swiper js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
});

const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "coffee";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}

// Nav open close
const body = document.querySelector('body');
        navMenu = body.querySelector('.menu-content'),
        navOpenBtn = body.querySelector('.navOpen-btn');
        navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener('click', () =>{
        navMenu.classList.add('open');
        body.style.overflowY = 'hidden';
    })
}

if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener('click', () =>{
        navMenu.classList.remove('open');
        body.style.overflowY = 'scroll';
    })
}

// Change header bg color
window.addEventListener("scroll", () =>{
    const scrollY = window.pageYOffset;
    
    if (scrollY > 5){
        document.querySelector("header").classList.add('header-active');
    }else{
        document.querySelector("header").classList.remove('header-active');
    }


    // Scroll up button
    const scrollUpBtn = document.querySelector('.scrollUp-btn');

    if(scrollY > 250){
        scrollUpBtn.classList.add("scrollUpBtn-active");
    }else{
        scrollUpBtn.classList.remove("scrollUpBtn-active");
    }

    // Nav link indicator
    
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight,
              sectionTop = section.offsetTop - 60;

              let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
              if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
                navId.classList.add("active-navlink");
              }else{
                navId.classList.remove("active-navlink");
              }
              navId.addEventListener("click", () => {
                navMenu.classList.remove("open");
                body.style.overflowY = "scroll";
              })
              
            
    })
}) 
  
    // Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    })
    sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .testimonial, .newsletter 
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links, .menu, .about-content`, {interval:100,})

sr.reveal(`.about-imageContent`, {origin: 'left'})
sr.reveal(`.about-details`, {origin: 'right'})