document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('theme-toggle');
    const statusText = document.getElementById('status-text');

    // Sự kiện khi người dùng bật/tắt nút gạt
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            // Thêm class .toi vào body
            document.body.classList.add('toi');
            statusText.textContent = 'Đây là giao diện ở chế độ TỐI (đang bật).';
        } else {
            // Xóa class .toi khỏi body
            document.body.classList.remove('toi');
            statusText.textContent = 'Đây là giao diện ở chế độ SÁNG.';
        }
    });
}); 