document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('targetImg');
    const buttons = document.querySelectorAll('.btn');

    // Danh sách tất cả class hiệu ứng để xoá sạch khi chuyển nút
    const allEffects = [
        'filter-gray', 'filter-xray', 'filter-invert', 
        'filter-fliph', 'filter-flipv', 'filter-glow', 
        'filter-shadow', 'filter-boldshadow', 'filter-dropshadow', 
        'filter-blur', 'filter-wave', 'filter-mask', 'filter-alpha'
    ];

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // 1. Đổi tô nổi bật nút (active state)
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 2. Xoá tất cả class hiệu ứng cũ khỏi ảnh
            allEffects.forEach(effect => {
                img.classList.remove(effect);
                img.style.transform = ''; // Reset transform inline nếu có
            });

            // 3. Thêm class hiệu ứng mới dựa vào data-effect
            const effectName = this.getAttribute('data-effect');
            img.classList.add('filter-' + effectName);
        });
    });
});