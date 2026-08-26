document.addEventListener("DOMContentLoaded", () => {

    // 1. Dynamically Load Navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => navbarPlaceholder.innerHTML = data)
            .catch(error => console.error("Error loading navigation:", error));
    }

    // 2. Dynamically Load Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => footerPlaceholder.innerHTML = data)
            .catch(error => console.error("Error loading footer:", err));
    }

    // 3. Card Animations
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {
            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200); // Reduced from 300ms to 200ms for a snappier, less laggy feel
    });

});
