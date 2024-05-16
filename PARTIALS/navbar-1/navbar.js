document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector("#burguer-menu");

    burgerMenu.addEventListener("click", function () {
        const burguerArea = document.querySelector(".burguer-area");

        if (burguerArea.classList.contains("open")) {
            burguerArea.classList.remove("open");
        } else {
            burguerArea.classList.add("open");
        }
    });
});
