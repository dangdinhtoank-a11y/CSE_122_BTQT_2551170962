document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Các hàm hiển thị trạng thái hợp lệ/lỗi
    function showError(input, messageElement, message) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        messageElement.classList.remove('valid');
        messageElement.classList.add('invalid');
        messageElement.innerText = '✗ ' + message;
    }

    function showSuccess(input, messageElement) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        messageElement.classList.remove('invalid');
        messageElement.classList.add('valid');
        messageElement.innerText = '✓ Hợp lệ';
    }

    // 1. Kiểm tra Họ và tên (Không để trống)
    function validateFullname() {
        const value = fullnameInput.value.trim();
        const msgEl = document.getElementById('fullnameMsg');
        if (value === '') {
            showError(fullnameInput, msgEl, 'Họ và tên không được để trống');
            return false;
        }
        showSuccess(fullnameInput, msgEl);
        return true;
    }

    // 2. Kiểm tra Email (Đúng định dạng regex)
    function validateEmail() {
        const value = emailInput.value.trim();
        const msgEl = document.getElementById('emailMsg');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === '') {
            showError(emailInput, msgEl, 'Email không được để trống');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(emailInput, msgEl, 'Email không hợp lệ (thiếu tên miền)');
            return false;
        }
        showSuccess(emailInput, msgEl);
        return true;
    }

    // 3. Kiểm tra Mật khẩu (≥ 6 ký tự)
    function validatePassword() {
        const value = passwordInput.value;
        const msgEl = document.getElementById('passwordMsg');
        if (value.length < 6) {
            showError(passwordInput, msgEl, 'Mật khẩu phải có ít nhất 6 ký tự');
            return false;
        }
        showSuccess(passwordInput, msgEl);
        return true;
    }

    // 4. Kiểm tra Xác nhận mật khẩu (Khớp với mật khẩu)
    function validateConfirmPassword() {
        const value = confirmPasswordInput.value;
        const passwordValue = passwordInput.value;
        const msgEl = document.getElementById('confirmPasswordMsg');

        if (value === '') {
            showError(confirmPasswordInput, msgEl, 'Vui lòng xác nhận mật khẩu');
            return false;
        } else if (value !== passwordValue) {
            showError(confirmPasswordInput, msgEl, 'Mật khẩu xác nhận không khớp');
            return false;
        }
        showSuccess(confirmPasswordInput, msgEl);
        return true;
    }

    // Lắng nghe sự kiện người dùng nhập liệu trực tiếp (Real-time Validation)
    fullnameInput.addEventListener('input', validateFullname);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    passwordInput.addEventListener('input', function() {
        if (confirmPasswordInput.value !== '') validateConfirmPassword();
    });

    // Sự kiện submit form
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Chặn gửi form tự động

        const isFullnameValid = validateFullname();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
 
        // Nếu tất cả ô hợp lệ mới cho phép gửi dữ liệu
        if (isFullnameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert('Đăng ký tài khoản thành công!');
            // form.submit(); // Có thể mở comment dòng này nếu cần gửi thực sự
        }
    });
});