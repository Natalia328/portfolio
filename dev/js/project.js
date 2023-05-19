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
    intro.style.width = `0%`;
  }, "5000");


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
    for (let i = 0; i < 7; i++) {
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
    }); anime({
        targets: '.homePageWorkEmptyCircle.circle7',
        width: [`0`, `${c[6]}rem`],
        height: [`0`, `${c[6]}rem`],
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
    let pos = (window.scrollY - 50) / 20;
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




/*-------------------------

BVAmbient - VanillaJS Particle Background
https://bmsvieira.github.io/BVAmbient/

Made by: Bruno Vieira

--------------------------- */

var isPaused = false;

class BVAmbient {

    constructor({
        selector = 'defaultId',
        particle_number = "50",
        particle_maxwidth = "30",
        particle_minwidth = "5",
        particle_radius = "50",
        particle_opacity = true,
        particle_colision_change = true,
        particle_background = "#ededed",
        particle_image = {
            image: false,
            src: ""
        },
        responsive = [
            {
              breakpoint: "default"
            }
        ],
        fps = "60",
        max_transition_speed = 12000,
        min_transition_speed = 8000,
        refresh_onfocus = true
    }) 
    {
        // Define Variables
        this.selector = selector.substring(1);
        this.particle_number = particle_number;
        this.fps = fps;
        this.max_transition_speed = max_transition_speed,
        this.min_transition_speed = min_transition_speed,
        this.particle_maxwidth = particle_maxwidth;
        this.particle_minwidth = particle_minwidth;
        this.particle_radius = particle_radius;
        this.particle_colision_change = particle_colision_change;
        this.particle_background = particle_background;
        this.particle_image = particle_image; 
        this.responsive = responsive;
        this.particle_opacity = particle_opacity;
        this.refresh_onfocus = refresh_onfocus;

        // Global Variables
        var randomID = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        var selector = this.selector;
        var fps = this.fps;
        var isPlaying = true;
        var particle_maxwidth = this.particle_maxwidth;
        var particle_minwidth = this.particle_minwidth;
        var particle_radius = this.particle_radius;
        var particle_colision_change = this.particle_colision_change;
        var particle_background = this.particle_background;
        var particle_image = this.particle_image;
        var responsive = this.responsive;
        var particle_opacity = this.particle_opacity;
        var trail_count = 0;
        var max_transition_speed = this.max_transition_speed;
        var min_transition_speed = this.min_transition_speed;
        var refresh_onfocus = this.refresh_onfocus;

        var particle_x_ray = [];

        // Add movement to particle
        this.MoveParticle = function(element) {

                var isresting = 1;

                // Moving Directions
                var top_down = ['top', "down"];
                var left_right = ["left", "right"];

                // Random value to decide wich direction follow
                var direction_h = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                var direction_v = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

                // Direction
                var d_h = left_right[direction_h];
                var d_v = top_down[direction_v];

                var pos = 0, ver = 0, element_width = element.offsetWidth; 
                var rect_main = document.getElementById(selector);

                // Change particle size
                function ChangeParticle(particle)
                {

                    // Check if random color is enabled, change particle color when colides
                    if(particle_background == "random") { particle.style.backgroundColor = getRandomColor(); }

                    // Get random number based on the width and height of main div
                    var RandomWidth = Math.random() * (particle_maxwidth - particle_minwidth) + particle_minwidth;
                    particle.style.width = RandomWidth+"px";
                    particle.style.height = RandomWidth+"px";

                }

                // Set frame to move particle
                function SetFrame() {

                    if (isPlaying) setTimeout(SetFrame, 1000 / fps);

                            // Element offset positioning
                            pos = element.offsetTop; 
                            ver = element.offsetLeft; 

                                // Check colision bounds
                                if(pos == rect_main.offsetHeight-element_width) {
                                    d_v = "top";
                                    pos = rect_main.offsetHeight-element_width;
                                    isresting = 1;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                } 
                                if(pos <= 0){ 
                                    d_v = "down"; 
                                    pos = 0; 
                                   isresting = 1;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                }
                                if(ver == rect_main.offsetWidth-element_width){ 
                                    d_h = "left";
                                    ver = rect_main.offsetWidth-element_width; 
                                    isresting = 1;
                                     if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                 } 
                                if(ver <= 0){ 
                                    d_h = "right";
                                    ver = 0;
                                    isresting = 1;
                                    if(particle_colision_change == true) { ChangeParticle(element); } // Change Particle Size on colision
                                }
                       
                                // It won add another position until the end of transition
                                if(isresting == 1)
                                {

                                    var RandomTransitionTime = Math.floor(Math.random() * (max_transition_speed - min_transition_speed + 1)) + min_transition_speed;
                                    element.style.transitionDuration = RandomTransitionTime+"ms";

                                    // Check Position
                                    if(d_v == "down" && d_h == 'left')
                                    {
                                        element.style.left = Number(element.offsetLeft) - Number(300) + "px"; 
                                        element.style.top = rect_main.offsetHeight-Number(element_width) + "px"; 
                                        isresting = 0;
                                    }
                                    if(d_v == "down" && d_h == 'right')
                                    {
                                        element.style.left = Number(element.offsetLeft) + Number(300) + "px"; 
                                        element.style.top = rect_main.offsetHeight-Number(element_width) + "px"; 
                                        isresting = 0;
                                       
                                    }
                                    if(d_v == "top" && d_h == 'left')
                                    {
                                        element.style.left = Number(element.offsetLeft)-Number(element_width) - Number(300) + "px"; 
                                        element.style.top = "0px"; 
                                        isresting = 0;
                                      
                                    }
                                    if(d_v == "top" && d_h == 'right') 
                                    {
                                        element.style.left = Number(element.offsetLeft)-Number(element_width) + Number(300) + "px"; 
                                        element.style.top = "0px"; 
                                        isresting = 0;
                                    }  
                                }
                             
                            // Saves particle position to array
                            if(element.offsetLeft != 0 && element.offsetTop != 0) { particle_x_ray[element.id] = ({'id': element.id, 'x': element.offsetLeft, 'y': element.offsetTop}); }
      
                }

                // Call function for the first time
                SetFrame();
        };

        // Set up particles to selector div
        this.SetupParticles = function(number) {

            var resp_particles;
            particle_x_ray = [];

            // Get window viewport inner width
            var windowViewportWidth = window.innerWidth;

            // If functions brings no number, it follow the default
            if(number == undefined)
            {

                // Loop responsive object to get current viewport
                for (var loop = 0; loop < responsive.length; loop++) {
                    if(responsive[loop].breakpoint >= windowViewportWidth) { resp_particles = responsive[loop]["settings"].particle_number; }
                }

                // If there is no result from above, default particles are applied
                if(resp_particles == undefined) { resp_particles = this.particle_number; }

            } else {
                resp_particles = number;
            }

            // Add number of particles to selector div
            for (var i = 1; i <= resp_particles; i++) {

                // Generate random number to particles
                var random_id_particle = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

                // Check if image source is empty and append particle to main div
                if(this.particle_image['image'] == false)
                {
                    document.getElementById(this.selector).insertAdjacentHTML('beforeend', "<div id='bvparticle_"+random_id_particle+"' class='bvambient_particle' style='display: block;'></div>");  
                } else {
                    document.getElementById(this.selector).insertAdjacentHTML('beforeend', "<img src='"+this.particle_image['src']+"' id='bvparticle_"+random_id_particle+"' class='bvambient_particle' style='display: block;'>");
                }

                var bvparticle = document.getElementById("bvparticle_"+random_id_particle);

                // Add
                particle_x_ray.push("bvparticle_"+random_id_particle);

                // Get Width and Height of main div
                var widthMainDiv = document.getElementById(selector);

                // Get random number based on the width and height of main div
                var RandomTopPosition = Math.floor(Math.random() * (widthMainDiv.offsetHeight - 40 + 1)) + 0;
                var RandomLeftPosition = Math.floor(Math.random() * (widthMainDiv.offsetWidth - 100 + 1)) + 0;

                // Get random number based on the width and height of main div
                var RandomWidth = Math.random() * (this.particle_maxwidth - this.particle_minwidth) + this.particle_minwidth;

                // Get Random Opacity between 0.2 and 1 if active
                if(particle_opacity == true) { var RandomOpacity = Math.random() * (1 - 0.2) + 0.2; } else { var RandomOpacity = 1; }

                // Add random positioning to particle
                bvparticle.style.top = RandomTopPosition+"px"; 
                bvparticle.style.left = RandomLeftPosition+"px"; 
                bvparticle.style.width = RandomWidth+"px";
                bvparticle.style.height = RandomWidth+"px";
                bvparticle.style.opacity = RandomOpacity;                
                bvparticle.style.borderRadius = particle_radius+"px";

                // Check if it has random color enabled
                if(particle_background == "random") { bvparticle.style.backgroundColor = getRandomColor(); } else { bvparticle.style.backgroundColor = particle_background; }

                // Move particle
                this.MoveParticle(bvparticle);
            }
        }

        // ** SETUP SLIDE **
        this.SetupParticles();

        if(refresh_onfocus == true){
        // When user enters tab again refresh position
        document.addEventListener('focus', (e) => {
            document.getElementById(selector).innerHTML = "";
            this.SetupParticles();
        });}

        // Refresh results
        this.particle_x_ray = particle_x_ray;

        // Generates a random hex color
        function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
        }
    }

    // ** METHODS **
    // REFRESH PARTICLES 
    Refresh() {

        // Remove all particles
        document.getElementById(this.selector).innerHTML = "";
        // Setup new Ambient
        this.SetupParticles();
    }

    // DESTROY
    Destroy() {

        // Remove all particles and unbind all its events
        document.getElementById(this.selector).remove();
    }

    // ADD PARTICLES
    Add(number) {
        if(number != undefined)
        {
            // Add new particles
            this.SetupParticles(number);  
        }
    }

    // PAUSE
    Controls(command)
    {
        // Check what type of command is
        switch(command) {
          case "pause": // Pause Particles moviment
            isPaused = true;
            break;
          case "play": // Resume Particles moviment
            isPaused = false;
            break;
          default:
            console.log("BVAmbient | Command not recognized.");
        } 
    }

    // CHANGE PARTICLES
    Change(properties) {

            // Changes particles according to properties available
            if(properties.type == "particle_background")
            {
                document.querySelectorAll('.bvambient_particle').forEach((item) => {
                    // Change to chosen color
                    item.style.backgroundColor = properties.value;
                });
            } else { console.log("BVAmbient | Propertie not recognized."); }
    }
}

ocument.addEventListener("DOMContentLoaded", function() {
    var demo1 = new BVAmbient({
selector: "#circleBackground",
fps: 60,
max_transition_speed: 12000,
min_transition_speed: 8000,
particle_number: 30,
particle_maxwidth: 60,
particle_minwidth: 10,
particle_radius: 50,
particle_opacity: true,
particle_colision_change: true,
particle_background: "#58c70c",
particle_image: {
image: false,
src: ""
},
responsive: [
 {
   breakpoint: 768,
   settings: {
     particle_number: "15"
   }
 },
 {
   breakpoint: 480,
   settings: {
     particle_number: "10"
   }
 }
]
});
});