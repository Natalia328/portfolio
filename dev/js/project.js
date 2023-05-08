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


// About me section

// var word1 = document.getElementsByClassName('text-2');
// var word2 = document.getElementsByClassName('text-3');
// var word3 = document.getElementsByClassName('text-4');


// var words = document.getElementsByClassName('aboutMeText');
// var wordArray = [];
// var currentWord = 0;

// words[currentWord].style.opacity = 1;
// for (var i = 0; i < words.length; i++) {
//   splitLetters(words[i]);
// }

// function changeWord() {
//   var cw = wordArray[currentWord];
//   var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
//   for (var i = 0; i < cw.length; i++) {
//     animateLetterOut(cw, i);
//   }
  
//   for (var i = 0; i < nw.length; i++) {
//     nw[i].className = 'letter behind';
//     nw[0].parentElement.style.opacity = 1;
//     animateLetterIn(nw, i);
//   }
  
//   currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
// }

// function animateLetterOut(cw, i) {
//   setTimeout(function() {
// 		cw[i].className = 'letter out';
//   }, i*80);
// }

// function animateLetterIn(nw, i) {
//   setTimeout(function() {
// 		nw[i].className = 'letter in';
//   }, 340+(i*80));
// }

// function splitLetters(word) {
//   var content = word.innerHTML;
//   word.innerHTML = '';
//   var letters = [];
//   for (var i = 0; i < content.length; i++) {
//     var letter = document.createElement('span');
//     letter.className = 'letter';
//     letter.innerHTML = content.charAt(i);
//     word.appendChild(letter);
//     letters.push(letter);
//   }
  
//   wordArray.push(letters);
// }

// changeWord();
// setInterval(changeWord, 2000);


// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.aboutMeText');
var wordArray = [];
for (var i = 0; i < textWrapper.length; i++) {
  splitLetters(textWrapper[i]);
 }

 function splitLetters(textWrapper) {
  var content = textWrapper.innerHTML.trim();
  textWrapper.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    textWrapper.appendChild(letter);
    letters.push(letter);
    
  }
  wordArray.push(letters);
}

anime.timeline({loop: true})
  .add({
    targets: '.letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 20 * (i+1)
  }).add({
    targets: '.aboutMeText',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 50
  });