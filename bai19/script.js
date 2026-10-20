// Thêm hiệu ứng tương tác mượt khi rê chuột vào khối thông tin
document.addEventListener('DOMContentLoaded', function () {
    const infoBox = document.querySelector('.info-box');
    const image = document.querySelector('.featured-image');

    // Hiệu ứng đổi kiểu viền và thêm bóng nhẹ cho khối thông tin khi di chuột
    if (infoBox) {
        infoBox.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 4px 12px rgba(224, 123, 0, 0.15)';
            this.style.transition = 'box-shadow 0.3s ease';
        });

        infoBox.addEventListener('mouseleave', function () {
            this.style.boxShadow = 'none';
        });
    }
 
    // Hiệu ứng phóng nhẹ ảnh khi rê chuột
    if (image) {
        image.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        image.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }
});