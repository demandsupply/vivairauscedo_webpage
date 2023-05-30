// Function 1: hide and show the sub-menu
function myFunction() {
    var x = document.getElementById("dropdown-content-three");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}


// Function 2: create the carousel
function setUpCarousel(carousel) {
    const buttonPrev = carousel.querySelector('[data-carousel-button-left]');
    const buttonNext = carousel.querySelector('[data-carousel-button-right]');
    const slidesContainer = carousel.querySelector('[data-slides]');

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
        slidesContainer.style.transform = `translateX(${currentSlide * -50}%)`;
        }
    }

    function handlePrev() {
        // currentSlide = (currentSlide - 1) % numSlides;
        if (currentSlide < 0) {
            currentSlide = currentSlide;
        }
        else if (currentSlide > 0) {
        currentSlide = (currentSlide - 1) % numSlides;
        slidesContainer.style.transform = `translateX(${currentSlide * -50}%)`;
        }
    }
}



const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach(setUpCarousel);




// function shoWindow() {
//     var windows = document.querySelectorAll("#prod-one, #prod-two, #prod-three, #prod-four, #prod-five, #prod-six, #prod-seven, #prod-eight, #prod-nine");

// }

// function shoWindow(id) {
//     if (document.getElementById) {
//         var divId = document.getElementById(id);
//         var divs = document.getElementsByClassName("choose-box");
//         for(var i=0; i<divs.length; i++) {
//             divs[i].style.display = "none";
//         }
//         divId.style.display = "block";
//     }
//     return false;
// }

// prov
// function setUpCarousel2(carousel2) {
    const buttonPrev2 = document.querySelector('[data-carousel2-button-prev-one]');

    buttonPrev2.addEventListener('click', () => console.log('clicked'));
// }