let burger = document.querySelector(".burger_icon");
let close = document.querySelector(".close_icon");
let burgerMenu = document.querySelector(".burger_menu");

burger.addEventListener("click", () => {
    burger.style.display = "none";
    close.style.display = "block";
    burgerMenu.classList.add("show");
})

close.addEventListener("click", () => {
    burger.style.display = "block";
    close.style.display = "none";
    burgerMenu.classList.remove("show");
})