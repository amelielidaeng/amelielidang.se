function burgerMenu() {
    let burger = document.getElementById("nav-bar");
    if (burger.className === "menu") {
    burger.className += " responsive";
    } else {
    burger.className = "menu";
    }
}