// Đảm bảo DOM đã tải xong trước khi thực thi
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Thêm sự kiện click thông báo tên địa danh khi bấm vào ảnh
    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const title = item.querySelector(".overlay").textContent;
            console.log(`Bạn đã nhấp vào địa danh: ${title}`);
        });
    });
});