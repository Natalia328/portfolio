// Project JS functions
//
// Authors: Natalia Świerczek (swierczek.n@gmail.com)
// Copyright Natalia Świerczek Portfolio © All Rights Reserved
(function () {
    console.log('Animations start');

    // anime({
    //     targets: '.mail',
    //     translateX: 2500,
    //     direction: 'rtl',
    //     loop: true,
    //     easing: 'linear',
    //     duration: 5000
    // });

    anime({
        targets: '.homePageWorkLink.project-1',
        width: ['0%', '120px'],
        height: ['0%', '120px'],
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.homePageWorkLink.project-2',
        width: ['0%', '220px'],
        height: ['0%', '220px'],
        easing: 'easeInOutQuad'
    });


})();

const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const liList = document.querySelectorAll("li");
const contactSection = document.querySelector("#homePageContact");
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
    if (contactSection.getBoundingClientRect().top < window.innerHeight*0.6) {
        // contactTitle.classList.add("contactTitleEffect");
        contactSection.classList.add("reverseColors");
        // contactLinks.classList.add("reverseColors");
    } else {
        // contactTitle.classList.remove("contactTitleEffect");
        contactSection.classList.remove("reverseColors");
        // contactLinks.classList.remove("reverseColors");
    }
};

window.addEventListener("scroll", contactTitleEffect)


function marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
  
    parentSelector.insertAdjacentHTML("beforeend", clone);
    parentSelector.insertAdjacentHTML("beforeend", clone);
  
    setInterval(function () {
      firstElement.style.marginLeft =`-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener("load", marquee(".contactPageMarquee", 0.5));