fetch("partials/header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);

function toggleMenu() {
  const header = document.querySelector('.header');
  header.classList.toggle('menu-active');
}
