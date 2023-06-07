// ********** Elements **********
const slides = document.querySelectorAll(".slide");
const prevBnt = document.querySelector(".prev");
const nextBnt = document.querySelector(".next");

// ************ Variables **************
let counter = 0;

// ************ Styling **************
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// ************ Events **************
//Prev
prevBnt.addEventListener("click", () => {
  counter--;

  carousel();
});

//Next
nextBnt.addEventListener("click", () => {
  counter++;
  carousel();
});

// ************ Functions **************
function carousel() {
  //   if (counter == slides.length) {
  //     counter = 0;
  //   } else if (counter < 1) {
  //     counter = slides.length - 1;
  //   }

  if (counter < slides.length - 1) {
    nextBnt.classList.remove("button-remove");
  } else {
    nextBnt.classList.add("button-remove");
  }

  if (counter > 0) {
    prevBnt.classList.remove("button-remove");
  } else {
    prevBnt.classList.add("button-remove");
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBnt.classList.add("button-remove");
