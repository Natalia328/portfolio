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

    // var colorsExamples = anime.timeline({
    //     endDelay: 1000,
    //     easing: 'easeOutExpo',
    //     direction: 'alternate',
    //     loop: true
    //   })
    //   .add({ targets: '.firstToTransition',  background: '$mainMediumColor' }, 0)
    //   .add({ targets: '.secondToTransition',  background: '$mediumLightColor' }, 0)
    //   .add({ targets: '.toTransition' }, 0);

    anime({
        targets: '.firstToTransition',

        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        // loop: true,
        duration: 3000
      });
    // anime({
    //     targets: '.firstToTransition',
    //     delay: 3000,
    //     zIndex: '-10', 
        
      
    anime({
        targets: '.secondToTransition',
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        // loop: true,
        duration: 2500
      });

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
