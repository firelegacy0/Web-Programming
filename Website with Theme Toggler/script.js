// Script to control theme toggler switch
document.addEventListener("DOMContentLoaded", function (event) {

    // Defaults root to light-theme
    let root = document.querySelector(":root");

    //find the button by ID
    var themeSwitcher = document.getElementById("switcher");

    //what happens when it gets clicked
    themeSwitcher.onclick = function () {

        var currentTheme = document.documentElement.getAttribute("data-theme");

        var switchTheme = currentTheme === "dark" ? "light" : "dark"

        root.setAttribute("data-theme", switchTheme);
    }

});