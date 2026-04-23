const frame = document.getElementById("frame");

const images = [
  "img/horse1.jpeg",
  "img/horse2.jpeg",
  "img/horse3.jpeg",
  "img/horse4.jpeg",
  "img/horse5.jpeg",
  "img/horse6.jpeg",
  "img/horse7.jpeg",
  "img/horse8.jpeg",
  "img/horse9.jpeg",
  "img/horse10.jpeg",
  "img/horse11.jpeg",
  "img/horse12.jpeg"
];

// how fast the animation loops
const speed = 0.005;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // infinite looping value
  const progress = scrollY * speed;

  // loop frames
  const index = Math.floor(progress % images.length);

  frame.src = images[index];
});