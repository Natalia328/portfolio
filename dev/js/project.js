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
const nav = document.querySelector('.menu');
const liList = document.querySelectorAll("li");
const contactSection = document.querySelector(".homePageContact");
const html = document.querySelector('html');
const contactTitle = document.querySelector(".contactTitle")

// Navigation slide
const handleNav = () => {
    nav.classList.toggle('active');
    html.classList.toggle('hideScrollBar');
    burgerBtn.classList.toggle('burgerFeature');
    liList.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("active");
            html.classList.remove('hideScrollBar');
            if(burgerBtn.classList.contains('burgerFeature')){
                burgerBtn.classList.remove('burgerFeature')
            }
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
