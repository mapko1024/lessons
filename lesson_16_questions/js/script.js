document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest(".menu__arrow")) {
    targetElement.closest(".menu__item").classList.toggle("active");
  }
  if (targetElement.closest(".button__burger")) {
    document.body.classList.toggle("menu-open");
  }
}
