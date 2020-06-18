const burguerMenu = document.querySelector(".burguer-menu");
const menuNav = document.querySelector(".menu-nav");

const handleMenu = () => {
  menuNav.classList.contains("is-active")
    ? (menuNav.classList.remove("is-active"),
      burguerMenu.classList.remove("is-active"))
    : (menuNav.classList.add("is-active"),
      burguerMenu.classList.add("is-active"));
};

burguerMenu.addEventListener("click", handleMenu, false);
