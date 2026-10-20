// Kích hoạt Validation mặc định của Bootstrap khi Submit Form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (event) => {
        // Kiểm tra xem các ô bắt buộc (required) đã điền đủ chưa
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert("Đăng ký thành công! Cảm ơn bạn đã tham gia CLB Lập trình Web.");
        }

        // Thêm class để Bootstrap hiển thị trạng thái hợp lệ/không hợp lệ
        form.classList.add("was-validated");
    });
});