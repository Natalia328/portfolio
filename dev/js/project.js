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
const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.fa-times');
const nav = document.querySelector('.menu');
const liList = document.querySelectorAll("li");
const contactSection = document.querySelector(".homePageContact");
const contactTitle = document.querySelector(".contactTitle")

const handleNav = () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    liList.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("active");
            menuBtn.classList.toggle('hide');
            closeBtn.classList.toggle('hide');
        });
    });
}

burgerBtn.addEventListener('click', handleNav)

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
