document.addEventListener('DOMContentLoaded', () => {
    // 1. Chức năng đổi nội dung hiển thị khi bấm vào Menu con (Hộp vàng)
    const subMenuButtons = document.querySelectorAll('.sub-menu span');
    const innerContent = document.querySelector('.inner-content');

    const sampleTexts = {
        '• Đảo chuỗi': `
            <p><strong>Chức năng: Đảo chuỗi</strong></p>
            <p>Chuỗi ban đầu: <i>"Đại học Khoa học Tự nhiên"</i></p>
            <p>Chuỗi sau khi đảo: <b>"nêihtu ơhK coh ạiĐ"</b></p>
        `,
        '• Phân tích chuỗi': `
            <p><strong>Chức năng: Phân tích chuỗi</strong></p>
            <p>Độ dài chuỗi: <b>25 ký tự</b></p>
            <p>Số từ: <b>6 từ</b></p>
        `,
        '• Tìm và thay thế': `
            <p><strong>Chức năng: Tìm và thay thế</strong></p>
            <p>Tìm: "HTML" ➔ Thay thế bằng: "HTML5 & CSS3"</p>
            <p>Kết quả: <i>Chào mừng các bạn đến với ngôn ngữ HTML5 & CSS3</i></p>
        `
    };

    subMenuButtons.forEach(button => {
        // Thêm hiệu ứng con trỏ chuột
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            const key = button.textContent.trim();
            if (sampleTexts[key]) {
                innerContent.innerHTML = sampleTexts[key];
            }
        });
    });

    // 2. Chức năng highlight menu dọc khi người dùng nhấp chọn
    const menuItems = document.querySelectorAll('.sidebar ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn chuyển trang mặc định

            // Bỏ active ở các menu khác
            menuItems.forEach(link => link.style.backgroundColor = '');

            // Đổi màu nền menu đang chọn
            item.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        });
    });
});