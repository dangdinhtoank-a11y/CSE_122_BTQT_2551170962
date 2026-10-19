document.addEventListener('DOMContentLoaded', function () {
    const expressionEl = document.getElementById('expression');
    const resultEl = document.getElementById('result');
    const btnC = document.getElementById('btnC');
    const btnEqual = document.getElementById('btnEqual');
    const numAndOpBtns = document.querySelectorAll('.btn-num, .btn-op');

    let currentExpression = '12 + 8 × 3';
    let isEvaluated = false;

    // Cập nhật giao diện ban đầu
    expressionEl.innerText = currentExpression;
    calculateResult();

    // 1. Xử lý khi bấm nút số hoặc phép tính
    numAndOpBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const val = this.getAttribute('data-value');

            // Xử lý nút ngoặc ()
            if (val === '()') {
                handleParenthesis();
                return;
            }

            // Nếu vừa bấm dấu = xong mà bấm số mới -> xóa làm lại từ đầu
            if (isEvaluated) {
                if (!isNaN(val) || val === '.') {
                    currentExpression = '';
                }
                isEvaluated = false;
            }

            // Tránh nhập liên tiếp các toán tử
            const lastChar = currentExpression.slice(-1);
            const operators = ['+', '-', '×', '÷', '%'];
            if (operators.includes(val) && operators.includes(lastChar)) {
                currentExpression = currentExpression.slice(0, -1) + val;
            } else {
                currentExpression += val;
            }

            expressionEl.innerText = currentExpression;
        });
    });

    // 2. Nút C: Xoá hết
    btnC.addEventListener('click', function () {
        currentExpression = '';
        expressionEl.innerText = '';
        resultEl.innerText = '0';
        isEvaluated = false;
    });

    // 3. Nút =: Hiện kết quả chính thức
    btnEqual.addEventListener('click', function () {
        if (!currentExpression) return;
        calculateResult();
        isEvaluated = true;
    });

    // Hàm tự động đóng/mở ngoặc đơn
    function handleParenthesis() {
        const openCount = (currentExpression.match(/\(/g) || []).length;
        const closeCount = (currentExpression.match(/\)/g) || []).length;
        const lastChar = currentExpression.slice(-1);

        if (openCount > closeCount && !isNaN(lastChar) && lastChar !== '') {
            currentExpression += ')';
        } else {
            currentExpression += '(';
        }
        expressionEl.innerText = currentExpression;
    }

    // Hàm tính toán biểu thức an toàn
    function calculateResult() {
        if (!currentExpression) {
            resultEl.innerText = '0';
            return;
        }

        try {
            // Chuyển ký hiệu hiển thị (×, ÷) thành toán tử JavaScript (*, /)
            let formattedExpr = currentExpression
                .replace(/×/g, '*')
                .replace(/÷/g, '/');

            // Tính % (vd: 50% -> 50/100)
            formattedExpr = formattedExpr.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

            // Thực thi phép tính dùng Function thay vì eval trực tiếp
            const calcFunc = new Function('return ' + formattedExpr);
            let res = calcFunc();

            // Làm tròn nếu là số thập phân quá dài
            if (typeof res === 'number' && !Number.isInteger(res)) {
                res = parseFloat(res.toFixed(6));
            }

            resultEl.innerText = isNaN(res) || !isFinite(res) ? 'Lỗi' : res;
        } catch (e) {
            resultEl.innerText = 'Lỗi';
        }
    }
});