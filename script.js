const buttonPrev = document.querySelector(".button_prev");
const buttonNext = document.querySelector(".button_next");

const sliderProjects = document.querySelectorAll(".project");

console.log(sliderProjects.length);

let index = 0;

buttonNext.onclick = function () {
  sliderProjects[index].classList.remove("project_showed");
  index = ++index;
  if (index >= sliderProjects.length) {
    index = 0;
  }
  sliderProjects[index].classList.add("project_showed");
};
buttonPrev.onclick = function () {
  sliderProjects[index].classList.remove("project_showed");
  index = --index;
  if (index < 0) {
    index = sliderProjects.length - 1;
  }
  sliderProjects[index].classList.add("project_showed");
};
