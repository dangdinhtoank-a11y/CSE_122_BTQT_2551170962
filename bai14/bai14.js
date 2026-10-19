document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.wonder-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-4px)';
            this.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            this.style.boxShadow = '0 6px 15px rgba(46, 125, 50, 0.2)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.05)';
        });
    });
});