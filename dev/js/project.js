// Project JS functions
//
// Authors: Natalia Świerczek (swierczek.n@gmail.com)
// Copyright Natalia Świerczek Portfolio © All Rights Reserved

const intro = document.querySelector('.intro');
function animeIntro() {
    anime({
        targets: '.firstToTransition',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 3300
    })
    anime({
        targets: '.secondToTransition',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 2600
    });
    anime({
        targets: '.thirdToTransition',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 5000
    });
    anime({
        targets: '.forthToTransition',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 5000
    });
};

window.addEventListener("load", animeIntro);
setTimeout(() => {
    intro.style.width="0%";
  }, "5000");


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


// Contact section

const contactTitleEffect = () => {
    if (window.scrollY > 2500) {
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
        firstElement.style.marginLeft = `-${i}px`;
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