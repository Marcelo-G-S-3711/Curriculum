document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("toggleButton");
    var container = document.querySelector(".container");

    button.addEventListener("click", function() {
        if (container.classList.contains("dark-background")) {
            container.classList.remove("dark-background");
        } else {
            container.classList.add("dark-background");
        }
    });
});
