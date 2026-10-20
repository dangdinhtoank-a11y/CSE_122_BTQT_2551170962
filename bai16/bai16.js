document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const remainingCount = document.getElementById('remainingCount');

    // Cập nhật đếm số lượng ban đầu
    updateRemainingCount();

    // 1. Thêm công việc mới
    addBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const text = todoInput.value.trim();
        if (text === '') return;

        // Tạo phần tử li mới
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="custom-checkbox"></span>
            <span class="task-text">${text}</span>
            <button class="delete-btn">Xoá</button>
        `;

        todoList.appendChild(li);
        todoInput.value = '';
        updateRemainingCount();
    }

    // 2. Xử lý đánh dấu hoàn thành & Xoá công việc (Ủy quyền sự kiện)
    todoList.addEventListener('click', function (e) {
        const target = e.target;
        const li = target.closest('li');

        if (!li) return;

        // Bấm vào nút Xoá
        if (target.classList.contains('delete-btn')) {
            li.remove();
            updateRemainingCount();
            return;
        }
 
        // Bấm vào checkbox hoặc chữ để toggle trạng thái hoàn thành
        if (target.classList.contains('custom-checkbox') || target.classList.contains('task-text')) {
            li.classList.toggle('completed');
            updateRemainingCount();
        }
    });

    // 3. Hàm cập nhật số việc còn lại
    function updateRemainingCount() {
        const allTasks = todoList.querySelectorAll('li');
        const completedTasks = todoList.querySelectorAll('li.completed');
        const remaining = allTasks.length - completedTasks.length;

        remainingCount.innerText = `Còn ${remaining} việc chưa hoàn thành`;
    }
});