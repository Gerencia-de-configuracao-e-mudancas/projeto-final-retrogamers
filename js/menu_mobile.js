const menu_mobile = document.querySelector(".menu_mobile");
const nav_menu = document.querySelector(".nav_menu")

menu_mobile.addEventListener("click", function () {
    menu_mobile.classList.toggle("active");
    nav_menu.classList.toggle("active");
})

window.addEventListener("scroll", function () {
    if (nav_menu.classList.contains("active")) {
        nav_menu.classList.remove("active");
    }
});