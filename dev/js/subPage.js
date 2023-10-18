// -----------------
// Work separate page
// -----------------

const allProjectsImg = document.querySelectorAll('.projectElement') || [];
const changingText = document.querySelector('.changingText');
const textArray = ["Commercial Website","Html", "CSS", "JavaScript"];

const handleImg = () => {
    const currentSection = window.scrollY + 200;
    for (let i = 0; i < allProjectsImg.length; i++) {
        if (allProjectsImg[i].offsetTop < currentSection) {
            changingText.style.display = "block";
            allProjectsImg[i].style.transform = "translate(0%, 0px)";
            allProjectsImg[i].style.opacity = "1";
            changingText.textContent = textArray[i];
        } else {
            if(i%2==0) {
                allProjectsImg[i].style.transform = "translate(200%, -100px)";
            } else {
                allProjectsImg[i].style.transform = "translate(-200%, -100px)";
            }
        }       
    }

}


window.addEventListener('scroll', handleImg)


// ----------------
// Anime Circle Separete Work Page
// ----------------

const workPageSection = document.querySelector('.workPageSection');
const workCircleBefore = document.querySelector('.workCircleBefore');

window.addEventListener('scroll', function () {
    if (workPageSection.getBoundingClientRect().top < window.innerHeight * 0.7) {
        let pos = (window.scrollY) / 10;
        workCircleBefore.style.transform = `translateX(${pos}px)`;
    }
}
);
// -------------------

