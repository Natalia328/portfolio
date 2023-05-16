// Project JS functions
//
// Authors: Natalia Świerczek (swierczek.n@gmail.com)
// Copyright Natalia Świerczek Portfolio © All Rights Reserved

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let x;
let y;

function generateRange() {
    let drawn = getRandom(1, 2);
    if (drawn === 1) {
        x = getRandom(12, 17);
        y = getRandom(30, 40);
    } else {
        x = getRandom(30, 40);
        y = getRandom(12, 17);
    }
}

setInterval(animeWorkCircles, 4000);
setInterval(animeEmptyCircles, 2500);

function animeEmptyCircles() {
    const c = [];
    for (let i = 0; i < 6; i++) {
        c[i] = getRandom(2, 7);

    }

    anime({
        targets: '.homePageWorkEmptyCircle',
        duration: 1000,
        easing: 'easeInOutQuad',
        loop: true
    }); anime({
        targets: '.homePageWorkEmptyCircle.circle1',
        width: [`0`, `${c[0]}rem`],
        height: [`0`, `${c[0]}rem`],
    }); anime({
        targets: '.homePageWorkEmptyCircle.circle2',
        width: [`0`, `${c[1]}rem`],
        height: [`0`, `${c[1]}rem`],
    }); anime({
        targets: '.homePageWorkEmptyCircle.circle3',
        width: [`0`, `${c[2]}rem`],
        height: [`0`, `${c[2]}rem`],
    }); anime({
        targets: '.homePageWorkEmptyCircle.circle4',
        width: [`0`, `${c[3]}rem`],
        height: [`0`, `${c[3]}rem`],
    }); anime({
        targets: '.homePageWorkEmptyCircle.circle5',
        width: [`0`, `${c[4]}rem`],
        height: [`0`, `${c[4]}rem`],
    }); anime({
        targets: '.homePageWorkEmptyCircle.circle6',
        width: [`0`, `${c[5]}rem`],
        height: [`0`, `${c[5]}rem`],
    });
}

function animeWorkCircles() {
    generateRange();
    anime({
        targets: '.homePageWorkLink.project-1',
        width: [`${x * 0.5}rem`, `${x}rem`],
        height: [`${x * 0.5}rem`, `${x}rem`],
        duration: 2000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.homePageWorkLink.project-1 .circle-dark-dashed',
        width: [`0`, `${x*0.95}rem`],
        height: [`0`, `${x*0.95}rem`],
        duration: 2000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.homePageWorkLink.project-2 .circle-dark-dashed',
        width: [`0`, `${y*0.95}rem`],
        height: [`0`, `${y*0.95}rem`],
        duration: 2000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.project-1 .projectLink',
        fontSize: ['0em', `${x * 0.1}em`],
        duration: 2000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.homePageWorkLink.project-2',
        width: [`${y * 0.5}rem`, `${y}rem`],
        height: [`${y * 0.5}rem`, `${y}rem`],
        duration: 2000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.project-2 .projectLink',
        fontSize: ['0em', `${y * 0.1}em`],
        duration: 2000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
      });
    anime({
    targets: '.circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
});   


}



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
    if (contactSection.getBoundingClientRect().top < window.innerHeight * 0.6) {
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