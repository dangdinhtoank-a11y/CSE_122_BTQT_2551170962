document.addEventListener("DOMContentLoaded", () => {
    const carouselEl = document.querySelector('#destinationCarousel');
    if (carouselEl) {
        new bootstrap.Carousel(carouselEl, {
            interval: 3000,
            ride: 'carousel'
        });
    }

    const tabLinks = document.querySelectorAll('button[data-bs-toggle="pill"]');
    tabLinks.forEach(tab => {
        tab.addEventListener('shown.bs.tab', (event) => {
            const activeTabName = event.target.textContent;
            console.log(`Đã chuyển sang tab: ${activeTabName}`);
        });
    });
});