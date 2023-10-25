// Project JS functions

// Authors: Natalia Świerczek (swierczek.n@gmail.com)
// Copyright Natalia Świerczek Portfolio © All Rights Reserved


// -----------------
// INTRO
// -----------------

const intro = document.querySelector('.intro');
const welcome = document.querySelector('.welcomeTitle');

function animeIntro() {

    setTimeout(function () {
        welcome.style.scale = '1.5';
    }, 1000);

    anime({
        targets: '.introTitleWrapper',
        left: '-200%',
        easing: 'linear',
        duration: 3000,
        delay: 3000
    });
    anime({
        targets: '.introTitleWrapper',
        opacity: 0,
        easing: 'linear',
        delay: 6000
    });
    anime({
        targets: '.third',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 3300,
        delay: 3000
    })
    anime({
        targets: '.fourth',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 2600,
        delay: 3000
    });
    anime({
        targets: '.first',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 5000,
        delay: 3000
    });
    anime({
        targets: '.second',
        width: '0%',
        easing: 'easeInOutQuad',
        duration: 5000,
        delay: 3000
    });

};

window.addEventListener("load", animeIntro);
setTimeout(() => {
    intro.style.width = `0%`;
}, "8000");

// -----------------
// Main background animation
// -----------------

const stripsLight = document.querySelectorAll('.stripeLight');
const stripsDark = document.querySelectorAll('.stripeDark');


setInterval(
    function animeFirst() {
        for (let i = 0; i < stripsLight.length; i++) {
            setTimeout(function () {
                stripsDark[i].style.transform = "translateX(-100%)";
            }, i * 100);
            setTimeout(function () {
                stripsLight[i].style.transform = "translateX(-100%)";
            }, (i * 100) + 2500);
        }
        setTimeout(function () {
            for (let i = 0; i < stripsLight.length; i++) {
                stripsDark[i].style.transform = "translateX(0%)";
                stripsLight[i].style.transform = "translateX(0%)";
            }
        }, 7000);
    }, 8000);


// ----------------------



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let x;
let y;

function generateRange() {
    let drawn = getRandom(1, 2);
    if (window.innerHeight > window.innerWidth) {    
    
        if (drawn === 1) {
            
            x = getRandom(window.innerWidth*(1/42), window.innerWidth*(1/30));
            y = getRandom(window.innerWidth*(1/30), window.innerWidth*(1/28));
        } else {
            x = getRandom(window.innerWidth*(1/30), window.innerWidth*(1/28));
            y = getRandom(window.innerWidth*(1/42), window.innerWidth*(1/30));
        }
    }else {
            if (drawn === 1) {
            
                x = getRandom(window.innerHeight*(1/42), window.innerHeight*(1/30));
                y = getRandom(window.innerHeight*(1/30), window.innerHeight*(1/28));
            } else {
                x = getRandom(window.innerHeight*(1/30), window.innerHeight*(1/28));
                y = getRandom(window.innerHeight*(1/42), window.innerHeight*(1/30));
            }
        }
    }

setInterval(animeWorkCircles, 10000);

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
        width: [`0`, `${x * 0.95}rem`],
        height: [`0`, `${x * 0.95}rem`],
        duration: 2000,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.homePageWorkLink.project-2 .circle-dark-dashed',
        width: [`0`, `${y * 0.95}rem`],
        height: [`0`, `${y * 0.95}rem`],
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

// -----------------
// Navigation
// -----------------


const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const liList = document.querySelectorAll("li");
const contactSection = document.querySelector("#homePageContact");
const html = document.querySelector('html');
const contactTitle = document.querySelector(".contactTitle")

const handleNav = () => {
    nav.classList.toggle('active');
    html.classList.toggle('hideScrollBar');
    liList.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("active");
            html.classList.remove('hideScrollBar');
        });
    });
}

burgerBtn.addEventListener('click', handleNav)

// -----------------
// Menu btn change color
// -----------------

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

// -----------------
// Contact section
// -----------------

const contactTitleEffect = () => {
    if (contactSection.getBoundingClientRect().top < window.innerHeight * 0.6) {
        contactSection.classList.add("reverseColors");
    } else {
        contactSection.classList.remove("reverseColors");
    }
};

window.addEventListener("scroll", contactTitleEffect)

// -----------------
// About me section
// -----------------


// Wrap every letter in a span

const textWrapper1 = document.querySelector('.text-2');
const textWrapper2 = document.querySelector('.text-3');
const textWrapper3 = document.querySelector('.text-4');

textWrapper1.innerHTML = splitLetters(textWrapper1.textContent);
textWrapper2.innerHTML = splitLetters(textWrapper2.textContent);
textWrapper3.innerHTML = splitLetters(textWrapper3.textContent);

anime.timeline({ loop: true })
    .add({
        targets: '.text-2 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    })
    .add({
        targets: '.paragraph-4 .text-2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    }).add({
        targets: '.text-3 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.paragraph-4 .text-3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    }).add({
        targets: '.text-4 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.paragraph-4 .text-4',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    })

// -----------------
// Line moving
// -----------------

let lines = document.querySelectorAll('.text-1');

window.onscroll = () => {
    let pos = (window.scrollY - 50) / 20;
    for (let i = 0; i < lines.length; i++) {
        if (i % 2 === 0) {
            lines[i].style.left = `${pos}px`;
        } else {
            lines[i].style.right = `${pos}px`;
        }
    }
}

function splitLetters(text) {
    if (!text) {
        return '';
    }

    text = text.trim();
    const textLength = text.length;
    let textToReturn = '';

    for (let i = 0; i < textLength; i++) {
        if (text[i] && text[i] !== '' && text[i] !== ' ') {
            textToReturn += `<span class="letter">${text[i]}</span>`;
        } else {
            textToReturn += '<span class="letter">&nbsp;</span>';
        }
    }
    return textToReturn;
}

// ----------------
// Anime Circle Work Section
// ----------------

const aboutMeSection = document.querySelector('.homePageAboutMe');
const aboutMeCircleBefore = document.querySelector('.aboutMeCircleBefore');

window.addEventListener('scroll', function () {
    if (aboutMeSection.getBoundingClientRect().top < window.innerHeight * 0.7) {
        let pos = (window.scrollY + 100) / 5;
        aboutMeCircleBefore.style.left = `${pos}px`;
    }
}
);
// -------------------

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