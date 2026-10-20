// Đợi DOM được tải hoàn tất
document.addEventListener("DOMContentLoaded", () => {
    // Sự kiện khi bấm nút "Đặt tour ngay"
    const bookBtn = document.getElementById("btnBookTour");
    if (bookBtn) {
        bookBtn.addEventListener("click", () => {
            alert("Cảm ơn bạn đã quan tâm! Vui lòng chọn tour bên dưới để tiếp tục.");
        });
    }

    // Sự kiện khi bấm các nút "Xem thêm" trên các thẻ
    const moreBtns = document.querySelectorAll(".btn-more");
    moreBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const cardTitle = e.target.closest(".card-body").querySelector(".card-title").textContent;
            alert(`Bạn đang xem chi tiết điểm đến: ${cardTitle}`);
        });
    });
});