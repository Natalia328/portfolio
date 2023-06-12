// // Project JS functions
// //
// // Authors: Natalia Świerczek (swierczek.n@gmail.com)
// // Copyright Natalia Świerczek Portfolio © All Rights Reserved


// // -----------------
// // INTRO

// // const intro = document.querySelector('.intro');
// // const welcome = document.querySelector('.welcomeTitle');

// // function animeIntro() {

// //     setTimeout(function () {
// //         welcome.style.scale = '1.5';
// //     }, 1000);
// //     anime({
// //         targets: '.introTitleWrapper',
// //         left: '-200%',
// //         easing: 'linear',
// //         duration: 3000,
// //         delay: 3000
// //     });
// //     anime({
// //         targets: '.introTitleWrapper',
// //         opacity: 0,
// //         easing: 'linear',
// //         delay: 6000
// //     });
// //     anime({
// //         targets: '.third',
// //         width: '0%',
// //         easing: 'easeInOutQuad',
// //         duration: 3300,
// //         delay: 3000
// //     })
// //     anime({
// //         targets: '.fourth',
// //         width: '0%',
// //         easing: 'easeInOutQuad',
// //         duration: 2600,
// //         delay: 3000
// //     });
// //     anime({
// //         targets: '.first',
// //         width: '0%',
// //         easing: 'easeInOutQuad',
// //         duration: 5000,
// //         delay: 3000
// //     });
// //     anime({
// //         targets: '.second',
// //         width: '0%',
// //         easing: 'easeInOutQuad',
// //         duration: 5000,
// //         delay: 3000
// //     });

// // };

// // window.addEventListener("load", animeIntro);
// // setTimeout(() => {
// //     intro.style.width = `0%`;
// // }, "8000");

// // -----------------



// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let x;
// let y;

// function generateRange() {
//     let drawn = getRandom(1, 2);
//     if (drawn === 1) {
//         x = getRandom(12, 17);
//         y = getRandom(30, 40);
//     } else {
//         x = getRandom(30, 40);
//         y = getRandom(12, 17);
//     }
// }

// setInterval(animeWorkCircles, 10000);
// // setInterval(animeEmptyCircles, 2500);

// // function animeEmptyCircles() {
// //     const c = [];
// //     for (let i = 0; i < 7; i++) {
// //         c[i] = getRandom(2, 7);

// //     }

// //     anime({
// //         targets: '.homePageWorkEmptyCircle',
// //         duration: 1000,
// //         easing: 'easeInOutQuad',
// //         loop: true
// //     }); anime({
// //         targets: '.homePageWorkEmptyCircle.circle1',
// //         width: [`0`, `${c[0]}rem`],
// //         height: [`0`, `${c[0]}rem`],
// //     }); anime({
// //         targets: '.homePageWorkEmptyCircle.circle2',
// //         width: [`0`, `${c[1]}rem`],
// //         height: [`0`, `${c[1]}rem`],
// //     }); anime({
// //         targets: '.homePageWorkEmptyCircle.circle3',
// //         width: [`0`, `${c[2]}rem`],
// //         height: [`0`, `${c[2]}rem`],
// //     }); anime({
// //         targets: '.homePageWorkEmptyCircle.circle4',
// //         width: [`0`, `${c[3]}rem`],
// //         height: [`0`, `${c[3]}rem`],
// //     }); anime({
// //         targets: '.homePageWorkEmptyCircle.circle5',
// //         width: [`0`, `${c[4]}rem`],
// //         height: [`0`, `${c[4]}rem`],
// //     }); anime({
// //         targets: '.homePageWorkEmptyCircle.circle6',
// //         width: [`0`, `${c[5]}rem`],
// //         height: [`0`, `${c[5]}rem`],
// //     }); anime({
// //         targets: '.homePageWorkEmptyCircle.circle7',
// //         width: [`0`, `${c[6]}rem`],
// //         height: [`0`, `${c[6]}rem`],
// //     });
// // }

// function animeWorkCircles() {
//     generateRange();
//     anime({
//         targets: '.homePageWorkLink.project-1',
//         width: [`${x * 0.5}rem`, `${x}rem`],
//         height: [`${x * 0.5}rem`, `${x}rem`],
//         duration: 2000,
//         easing: 'easeInOutQuad'
//     });
//     anime({
//         targets: '.homePageWorkLink.project-1 .circle-dark-dashed',
//         width: [`0`, `${x * 0.95}rem`],
//         height: [`0`, `${x * 0.95}rem`],
//         duration: 2000,
//         easing: 'easeInOutQuad'
//     });
//     anime({
//         targets: '.homePageWorkLink.project-2 .circle-dark-dashed',
//         width: [`0`, `${y * 0.95}rem`],
//         height: [`0`, `${y * 0.95}rem`],
//         duration: 2000,
//         easing: 'easeInOutQuad'
//     });
//     anime({
//         targets: '.project-1 .projectLink',
//         fontSize: ['0em', `${x * 0.1}em`],
//         duration: 2000,
//         easing: 'easeInOutQuad'
//     });
//     anime({
//         targets: '.homePageWorkLink.project-2',
//         width: [`${y * 0.5}rem`, `${y}rem`],
//         height: [`${y * 0.5}rem`, `${y}rem`],
//         duration: 2000,
//         easing: 'easeInOutQuad'
//     });
//     anime({
//         targets: '.project-2 .projectLink',
//         fontSize: ['0em', `${y * 0.1}em`],
//         duration: 2000,
//         easing: 'easeInOutQuad'
//     });
//     anime({
//         targets: '.circle-container',
//         scale: [0, 1],
//         duration: 1100,
//         easing: "easeInOutExpo",
//         offset: '-=1000'
//     });
//     anime({
//         targets: '.circle-dark-dashed',
//         rotateZ: 360,
//         duration: 8000,
//         easing: "linear",
//         loop: true
//     });


// }

// // -----------------------
// // Navigation

// const burgerBtn = document.querySelector('.burger');
// const nav = document.querySelector('.navigation');
// const liList = document.querySelectorAll("li");
// const contactSection = document.querySelector("#homePageContact");
// const html = document.querySelector('html');
// const contactTitle = document.querySelector(".contactTitle")

// const handleNav = () => {
//     nav.classList.toggle('active');
//     html.classList.toggle('hideScrollBar');
//     liList.forEach((item) => {
//         item.addEventListener("click", () => {
//             nav.classList.remove("active");
//             html.classList.remove('hideScrollBar');
//         });
//     });
// }

// // burgerBtn.addEventListener('click', handleNav)


// // Menu btn change color

// const allSections = document.querySelectorAll('section')

// const handleObserver = () => {
//     const currentSection = window.scrollY;
//     allSections.forEach(section => {
//         if (section.classList.contains("lightSection") && section.offsetTop <= currentSection) {
//             burgerBtn.classList.add('burger-dark-color')
//         } else if (!section.classList.contains("lightSection") && section.offsetTop <= currentSection) {
//             burgerBtn.classList.remove('burger-dark-color')
//         }
//     })
// }

// window.addEventListener('scroll', handleObserver)


// // Contact section


// const contactTitleEffect = () => {
//     if (contactSection.getBoundingClientRect().top < window.innerHeight * 0.6) {
//         // contactTitle.classList.add("contactTitleEffect");
//         contactSection.classList.add("reverseColors");
//         // contactLinks.classList.add("reverseColors");
//     } else {
//         // contactTitle.classList.remove("contactTitleEffect");
//         contactSection.classList.remove("reverseColors");
//         // contactLinks.classList.remove("reverseColors");
//     }
// };

// window.addEventListener("scroll", contactTitleEffect)


// // About me section

// // Wrap every letter in a span

// const textWrapper1 = document.querySelector('.text-2');
// const textWrapper2 = document.querySelector('.text-3');
// const textWrapper3 = document.querySelector('.text-4');

// textWrapper1.innerHTML = splitLetters(textWrapper1.textContent);
// textWrapper2.innerHTML = splitLetters(textWrapper2.textContent);
// textWrapper3.innerHTML = splitLetters(textWrapper3.textContent);

// anime.timeline({ loop: true })
//     .add({
//         targets: '.text-2 .letter',
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=775',
//         delay: (el, i) => 34 * (i + 1)
//     })
//     .add({
//         targets: '.paragraph-4 .text-2',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     }).add({
//         targets: '.text-3 .letter',
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=775',
//         delay: (el, i) => 34 * (i + 1)
//     }).add({
//         targets: '.paragraph-4 .text-3',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     }).add({
//         targets: '.text-4 .letter',
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=775',
//         delay: (el, i) => 34 * (i + 1)
//     }).add({
//         targets: '.paragraph-4 .text-4',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     })


// // Line moving
// let lines = document.querySelectorAll('.text-1');
// // let description = document.querySelector('.aboutMeDescrpition');

// window.onscroll = () => {
//     let pos = (window.scrollY - 50) / 20;
//     for (let i = 0; i < lines.length; i++) {
//         if (i % 2 === 0) {
//             lines[i].style.left = `${pos}px`;
//         } else {
//             lines[i].style.right = `${pos}px`;
//         }
//     }
//     // description.style.right = `${pos}px`;
// }

// function splitLetters(text) {
//     if (!text) {
//         return '';
//     }

//     text = text.trim();
//     const textLength = text.length;
//     let textToReturn = '';

//     for (let i = 0; i < textLength; i++) {
//         if (text[i] && text[i] !== '' && text[i] !== ' ') {
//             textToReturn += `<span class="letter">${text[i]}</span>`;
//         } else {
//             textToReturn += '<span class="letter">&nbsp;</span>';
//         }
//     }
//     return textToReturn;
// }





// function marquee(selector, speed) {
//     const parentSelector = document.querySelector(selector);
//     const clone = parentSelector.innerHTML;
//     const firstElement = parentSelector.children[0];
//     let i = 0;

//     parentSelector.insertAdjacentHTML("beforeend", clone);
//     parentSelector.insertAdjacentHTML("beforeend", clone);

//     setInterval(function () {
//         firstElement.style.marginLeft = `-${i}px`;
//         if (i > firstElement.clientWidth) {
//             i = 0;
//         }
//         i = i + speed;
//     }, 0);
// }

// //after window is completed load
// //1 class selector for marquee
// //2 marquee speed 0.2
// window.addEventListener("load", marquee(".contactPageMarquee", 0.5));



// (function () {
//     console.log('START');

//     const { random: random, floor: floor } = Math;
//     const allProjectsPositions = [];
//     const projectsWrapper = document.querySelector('#homePageWorkWrapper');
//     let maximumWidth = projectsWrapper.clientWidth;
//     let maximumHeight = projectsWrapper.clientHeight;

//     const projectsCount = 6;
//     const minimumProjectWidth = 150;
//     const maximumProjectWidth = (maximumWidth / projectsCount) + minimumProjectWidth;

//     let aaa = maximumWidth - maximumProjectWidth;
//     let bbb = maximumHeight - maximumProjectWidth;

//     console.log('MAX_WIDTH:', maximumWidth);
//     console.log('MAX_HEIGHT:', maximumHeight);

//     function placeProject(htmlElement = null) {
//         const isBigElement = htmlElement ? htmlElement.classList.contains('project') : false;
//         let elementDimmension = 0;

//         if (isBigElement) {
//             elementDimmension = floor(random() * (maximumWidth / projectsCount)) + minimumProjectWidth;
//         } else {
//             elementDimmension = floor(random() * (maximumWidth / 9)) + (maximumWidth / 10);
//         }

//         const x = random() * aaa;
//         const y = random() * bbb;

//         console.log('__ELEMENT:', elementDimmension);
//         console.log('__X:', x);
//         console.log('__Y:', y);

//         if (elementDimmension && !isOverlap(x, y, elementDimmension)) {
//             if (htmlElement) {
//                 htmlElement.style.width = `${elementDimmension}px`;
//                 htmlElement.style.height = `${elementDimmension}px`;
//                 htmlElement.style.left = `${x}px`;
//                 htmlElement.style.top = `${y}px`;
//             } else {
//                 const newHtmlElement = document.createElement("div");
//                 newHtmlElement.classList.add('homePageWorkLink');
//                 newHtmlElement.style.width = `${elementDimmension}px`;
//                 newHtmlElement.style.height = `${elementDimmension}px`;
//                 newHtmlElement.style.left = `${x}px`;
//                 newHtmlElement.style.top = `${y}px`;
//                 const wrapper = document.createElement('div');
//                 wrapper.classList.add('marginWrapper');
//                 newHtmlElement.appendChild(wrapper);
//                 projectsWrapper.appendChild(newHtmlElement);
//             }

//             allProjectsPositions.push({ x, y });
//         }
//     }

//     /**
//      * Check does project elements are overlap themselfs
//      */
//     function isOverlap(x, y, elementDimmension) {
//         const img = { x: elementDimmension, y: elementDimmension };

//         for (const projectPosition of allProjectsPositions) {
//             if (x > projectPosition.x - img.x && x < projectPosition.x + img.x && y > projectPosition.y - img.y && y < projectPosition.y + img.y) {
//                 return true;
//             }
//         }

//         return false;
//     }

//     const allProjectsElements = document.querySelectorAll('.homePageWorkLink') || [];

//     // Real projects
//     for (let i = 0; i < allProjectsElements.length; i++) {
//         placeProject(allProjectsElements[i]);
//     }

//     // Extra additional circles
//     for (let i = 0; i < 30; i++) {
//         placeProject();
//     }
// })();




// --------------------
// Work separate page

// const allSections = document.querySelectorAll('section')
const allProjectsImg = document.querySelectorAll('.projectElement') || [];
const changingText = document.querySelector('.changingText');
const textArray = ["Commercial Website","Html", "CSS", "JavaScript"];

const handleImg = () => {
    const currentSection = window.scrollY + 50;
    for (let i = 0; i < allProjectsImg.length; i++) {
        const element = allProjectsImg[i];
        if (element.offsetTop <= currentSection) {
            changingText.style.display = "block";
            element.style.transform = "translate(0px, 50px)";
            console.log(textArray[i]);
            changingText.textContent = textArray[i];
        }
        
    }
    // allProjectsImg.forEach(section => {
    //     if (section.offsetTop <= currentSection) {
    //         changingText.style.display = "block";
    //         section.style.transform = "translate(0px, 50px)";
    //         changingText.textContent = textArray[i]
    //     }
    // })
}

// const animeFirst =()=>{
//     anime({
//         targets: '.projectElementFirst',
//         translateX: 0,
//         duration: 3000,
//         easing: 'easeInOutQuad'
//       });
// }

window.addEventListener('scroll', handleImg)



