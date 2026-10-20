// Thêm tương tác nhỏ cho danh sách khi di chuột vào từng món ăn
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.custom-list li');

    listItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.color = '#2E7D32';
            this.style.fontWeight = 'bold';
            this.style.cursor = 'pointer';
        });

        item.addEventListener('mouseleave', function () {
            this.style.color = '#333333';
            this.style.fontWeight = 'normal';
        });
    });
}); 