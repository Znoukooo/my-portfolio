fetch("./navbar.html")
.then((response) => response.text())
.then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    
    // --- 1. INISIALISASI THEME (Panggil Fungsi Di Sini) ---
    initTheme();

    // Ambil nama file saja, misal: index.html
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentLocation || (currentLocation === "" && href === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

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

// --- 2. FUNGSI LOGIKA THEME ---
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    if (!toggleBtn) return; // Guard clause jika elemen tidak ditemukan

    // Cek tema yang tersimpan
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme, themeIcon);

    toggleBtn.addEventListener('click', () => {
        let currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme = (currentTheme === 'light') ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme, themeIcon);
    });
}

function updateIcon(theme, icon) {
    if (!icon) return;
    if (theme === 'dark') {
        icon.setAttribute('name', 'sunny');
        icon.style.color = '#f1c40f';
    } else {
        icon.setAttribute('name', 'moon');
        icon.style.color = '#5549c3';
    }
}

// Pastikan fungsi mengetik kamu tetap terpanggil
document.addEventListener("DOMContentLoaded", typeText);

// Tambahkan logika ini di script.js
document.addEventListener('click', function (e) {
    // Mencari apakah elemen yang diklik memiliki class .btn-view-image
    const trigger = e.target.closest('.btn-view-image');
    
    if (trigger) {
        // Mengambil path gambar dari atribut data-bs-img
        const imagePath = trigger.getAttribute('data-bs-img');
        
        // Mengambil elemen gambar di dalam modal
        const modalImage = document.getElementById('img-modal-target');
        
        if (modalImage) {
            // Mengganti src gambar modal dengan gambar yang diklik
            modalImage.src = imagePath;
        }
    }
});