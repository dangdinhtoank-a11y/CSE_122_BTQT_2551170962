// Đảm bảo DOM đã tải hoàn tất trước khi thực thi
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    // Thêm sự kiện tương tác khi nhấp vào nút của từng gói
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".pricing-card");
            const planName = card.querySelector(".plan-name").textContent;
            
            alert(`Cảm ơn bạn đã quan tâm đến gói: ${planName}!`);
        });
    });
});