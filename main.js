const menuIcon = document.querySelector(".header-menu-icon");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");

menuIcon.onclick = () => {
  menu.classList.toggle("active");
};

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  })
);
