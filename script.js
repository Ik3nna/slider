const slides = document.querySelectorAll(".slides");

const next = document.querySelector(".next-btn");

const prev = document.querySelector(".prev-btn");

const next1 = document.querySelector(".next-btn1");

const prev1 = document.querySelector(".prev-btn1");

let counter = 0;

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

next.addEventListener("click", function () {
    counter++;
    carousel();
});

prev.addEventListener("click", function () {
    counter--;
    carousel();
});

next1.addEventListener("click", function () {
    counter++;
    carousel();
});

prev1.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel () {
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
