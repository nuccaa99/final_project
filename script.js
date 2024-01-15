let burger = document.querySelector(".burger_icon");
let close = document.querySelector(".close_icon");
let burgerMenu = document.querySelector(".burger_menu");

burger.addEventListener("click", () => {
    burgerMenu.classList.add("show_menu");

    burger.classList.add("hide_icon");
    close.classList.remove("hide_icon");

    burger.classList.remove("show_icon");
    close.classList.add("show_icon");

})

close.addEventListener("click", () => {
    burgerMenu.classList.remove("show_menu");
    
    burger.classList.remove("hide_icon");
    close.classList.add("hide_icon");

    burger.classList.add("show_icon");
    close.classList.remove("show_icon");
})