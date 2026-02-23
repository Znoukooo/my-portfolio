fetch("./navbar.html")
.then((response) => response.text())
.then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    
    // Ambil nama file saja, misal: index.html
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        
        // Cek jika href sama dengan lokasi sekarang, atau jika di root diarahkan ke index.html
        if (href === currentLocation || (currentLocation === "" && href === "index.html")) {
            link.classList.add("active");
        } else {
            // Pastikan yang lain tidak sengaja punya class active
            link.classList.remove("active");
        }
    });

    // Event scroll tetap sama
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("navbar-scrolled", "shadow-sm");
            } else {
                navbar.classList.remove("navbar-scrolled", "shadow-sm");
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", typeText);