document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Cierra el menú al hacer clic en un enlace
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Cambiar color del header al hacer scroll
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });
});
