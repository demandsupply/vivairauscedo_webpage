// Function 1: hide and show the sub-menu
function myFunction() {
    var x = document.getElementById("dropdown-content-three");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}


// Function 2.1: create the carousel one
const buttonPrev = document.querySelector('[data-carousel-button-left]');
const buttonNext = document.querySelector('[data-carousel-button-right]');
const slidesContainer = document.querySelector('[data-slides]');

// When click "buttonNext" it will run the "handleNext" function, and when click "buttonPrev" it will do the opposite
buttonNext.addEventListener('click', handleNext);
buttonPrev.addEventListener('click', handlePrev);

buttonNext.addEventListener('click', () => console.log('clicked'));


// slidesContainer.style.transform = 'translateX(-90%)';

let currentSlide = 0;
const numSlides = (slidesContainer.children.length)/2;


function handleNext() {
    if (currentSlide >= numSlides) {
        currentSlide = currentSlide;
    }
    else if (currentSlide < numSlides) {
    currentSlide = (currentSlide + 1);
    slidesContainer.style.transform = `translateX(${currentSlide * -(200/(slidesContainer.children.length))}%)`;
    }
}

function handlePrev() {
    // currentSlide = (currentSlide - 1) % numSlides;
    if (currentSlide < 0) {
        currentSlide = currentSlide;
    }
    else if (currentSlide > 0) {
    currentSlide = (currentSlide - 1) % numSlides;
    slidesContainer.style.transform = `translateX(${currentSlide * -(200/(slidesContainer.children.length))}%)`;
    }
}

// Function 2.2: create the carousel two
const buttonPrev2 = document.querySelector('[data-carousel-button-left2]');
const buttonNext2 = document.querySelector('[data-carousel-button-right2]');
const slidesContainer2 = document.querySelector('[data-slides2]');

buttonNext2.addEventListener('click', handleNext2);
buttonPrev2.addEventListener('click', handlePrev2);

let currentSlide2 = 0;
const numSlides2 = (slidesContainer2.children.length)/2+1;


function handleNext2() {
    if (currentSlide2 >= numSlides2) {
        currentSlide2 = currentSlide2;
    }
    else if (currentSlide2 < numSlides2) {
    currentSlide2 = (currentSlide2 + 1);
    slidesContainer2.style.transform = `translateX(${currentSlide2 * -(250/(slidesContainer2.children.length))}%)`;
    }
}

function handlePrev2() {
    if (currentSlide2 < 0) {
        currentSlide2 = currentSlide2;
    }
    else if (currentSlide2 > 0) {
    currentSlide2 = (currentSlide2 - 1) % numSlides2;
    slidesContainer2.style.transform = `translateX(${currentSlide2 * -(250/(slidesContainer2.children.length))}%)`;
    }
}

// const carousels = document.querySelectorAll('[data-carousel]');

// carousels.forEach(setUpCarousel);




// function 3: show one box and hide the others

function shoWindow(id) {
    if (document.getElementById) {
        var boxId = document.getElementById(id);
        var allboxes = document.getElementsByClassName("choose-box");
        for(var i=0; i<allboxes.length; i++) {
            allboxes[i].style.display = "none";
        }
        boxId.style.display = "block";
    }
    return false;
}

