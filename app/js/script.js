let slideNumber = 0;
const slides = document.getElementsByClassName("slider-image__image");
const slidesCount = slides.length;

let copyNumber = 0;
const copies = document.getElementsByClassName("slider-copy");
const copiesCount = copies.length;

document
  .querySelector(".slider-image__buttons--prev")
  .addEventListener("click", () => {
    moveToPrevSlide();
  });
document
  .querySelector(".slider-image__buttons--next")
  .addEventListener("click", () => {
    moveToNextSlide();
  });

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      moveToPrevSlide();
      break;
    case "ArrowRight":
      moveToNextSlide();

      break;
  }
});

function updateSlideNumber() {
  for (let slide of slides) {
    slide.classList.add("slider-image__image--hidden");
    slide.classList.remove("slider-image__image--visible");
  }
  slides[slideNumber].classList.add("slider-image__image--visible");
  slides[slideNumber].classList.remove("slider-image__image--hidden");

  for (let copy of copies) {
    copy.classList.add("slider-copy--hidden");
    copy.classList.remove("slider-copy--visible");
  }
  copies[copyNumber].classList.add("slider-copy--visible");
  copies[copyNumber].classList.remove("slider-copy--hidden");
}

function moveToPrevSlide() {
  if (slideNumber == 0) {
    slideNumber = slidesCount - 1;
  } else {
    slideNumber--;
  }
  if (copyNumber == 0) {
    copyNumber = copiesCount - 1;
  } else {
    copyNumber--;
  }
  updateSlideNumber();
}

function moveToNextSlide() {
  if (slideNumber == slidesCount - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }
  if (copyNumber == copiesCount - 1) {
    copyNumber = 0;
  } else {
    copyNumber++;
  }
  updateSlideNumber();
}
