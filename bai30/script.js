document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".sidebar .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.forEach(l => {
                l.classList.remove("active", "text-white");
                l.classList.add("text-secondary");
            });
            link.classList.add("active", "text-white");
            link.classList.remove("text-secondary");
        });
    });
});