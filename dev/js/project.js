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


// About me section

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


// Line moving
let lines = document.querySelectorAll('.text-1');
let description = document.querySelector('.aboutMeDescrpition');

window.onscroll = () => {
    let pos = (window.scrollY - 50)/20;
    for (let i = 0; i < lines.length; i++) {
        if (i % 2 === 0) {
            lines[i].style.left = `${pos}px`;
        } else {
            lines[i].style.right = `${pos}px`;
        }
    }
    description.style.right = `${pos}px`;
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