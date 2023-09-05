//Navigation bar effect on scroll
window.addEventListener("scroll",function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

//Services section - Modal
const serviceModals =document.querySelectorAll(".service-modal");
const learnmoreBtn =document.querySelectorAll(".learn-more-btn");
const modalCloseBtn =document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtn.forEach((learnmoreBtn,i) =>{
    learnmoreBtn.addEventListener("click",() =>{
        modal(i);
    });
});

modalCloseBtn.forEach((modalCloseBtn) =>{
    modalCloseBtn.addEventListener("click",() =>{
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals =document.querySelectorAll(".portfolio-modal");
const imgCards =document.querySelectorAll(".img-card");
const portfolioCloseBtns =document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click",() =>{
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) =>{
    portfolioCloseBtn.addEventListener("click",() =>{
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our clients - Swiper
// var swiper = new Swiper(".client-swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//Website dark/Light theme
const themeBtn =document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme",getCurrentTheme());
    localStorage.setItem("saved-icon",getCurrentIcon());
})

const getCurrentTheme = () =>document.body.classList.contains("dark-theme") ? "dark" : "light"
const getCurrentIcon = () =>themeBtn.classList.contains("sun") ? "sun":"moon"

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-Icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}


//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active",window.scrollY > 500 );
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigaton menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections= document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*="+ id +"]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*="+ id +"]").classList.remove("active");   
        }
    });
});
//Responsive navigation menu toggle
const menuBtn= document.querySelector(".nav-menu-btn");
const closeBtn= document.querySelector(".nav-close-btn");
const navigation= document.querySelector(".navigation");
// const navItems =document.querySelectoAll(".nav-items .a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


// navItems.forEach((navItem) =>{
//     navItem.addEventListener("click",() => {
//         navigation.classList.("active") ;
//     });
// });




//Scroll reveal animations
// Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '50px',
    duration:1500,
    delay:50
});

//Target elements,and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', {delay:400,orgin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay:500,orgin:'right'});
ScrollReveal().reveal('.home .info .btn', {delay:600,orgin:'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay:400,orgin:'left',interval:'200'});
ScrollReveal().reveal('.home-img, .about-img', {delay:400,orgin:'bottom'});
ScrollReveal().reveal('.about .descripiton, .copy-right ', {delay:500,orgin:'right'});
ScrollReveal().reveal('.about .professional-list li', {delay:400,orgin:'right',interval:100});
ScrollReveal().reveal('.skill-descriptions, .service-description, .contact-card, .client-swiper, .contact-left h2', {delay:600,orgin:'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio ,img-card', {delay:700,orgin:'bottom',interval:100});
ScrollReveal().reveal('footer .group', {delay:400,orgin:'top',interval:100});