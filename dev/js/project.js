// Project JS functions
//
// Authors: Natalia Świerczek (swierczek.n@gmail.com)
// Copyright Natalia Świerczek Portfolio © All Rights Reserved
(function () {
    console.log('Animations start');

    // anime({
    //     targets: '.menu-item-64',
    //     translateX: 250,
    // });


})();

const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const liList = document.querySelectorAll("li");
const contactSection = document.querySelector(".homePageContact");
const html = document.querySelector('html');
const contactTitle = document.querySelector(".contactTitle")

// Navigation slide
const handleNav = () => {
    nav.classList.toggle('active');
    html.classList.toggle('hideScrollBar');
    // burgerBtn.classList.toggle('burgerFeature');
    liList.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("active");
            html.classList.remove('hideScrollBar');
            // if(burgerBtn.classList.contains('burgerFeature')){
            //     burgerBtn.classList.remove('burgerFeature')
            // }
        });
    });
}

burgerBtn.addEventListener('click', handleNav)

// Menu btn change color
const allSections = document.querySelectorAll('section')

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
      if (section.classList.contains("lightSection") && section.offsetTop <= currentSection) {
        burgerBtn.classList.add('burger-dark-color')
      } else if (!section.classList.contains("lightSection") && section.offsetTop <= currentSection) {
        burgerBtn.classList.remove('burger-dark-color')
      }
    })
}

window.addEventListener('scroll', handleObserver)


// Contact section

const contactTitleEffect = () => {
    if (window.scrollY > 2500) {
        contactTitle.classList.add("contactTitleEffect");
        contactSection.classList.add("reverseColors");
    } else {
        contactTitle.classList.remove("contactTitleEffect");
        contactSection.classList.remove("reverseColors");
    }
};

window.addEventListener("scroll", contactTitleEffect)
