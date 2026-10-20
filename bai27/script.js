document.addEventListener("DOMContentLoaded", () => {
    const placeModal = document.getElementById("placeModal");
    if (placeModal) {
        placeModal.addEventListener("show.bs.modal", (event) => {
            const button = event.relatedTarget; // Nút vừa bấm
            
            const title = button.getAttribute("data-title");
            const imgSrc = button.getAttribute("data-img");
            const desc = button.getAttribute("data-desc");

            document.getElementById("modalTitle").textContent = title;
            document.getElementById("modalImg").src = imgSrc;
            document.getElementById("modalDesc").textContent = desc;
        });
    }

    const btnBookNow = document.getElementById("btnBookNow");
    if (btnBookNow) {
        btnBookNow.addEventListener("click", () => {
            const title = document.getElementById("modalTitle").textContent;
            alert(`Bạn đã chọn đặt tour: ${title}`);
            
            const modalInstance = bootstrap.Modal.getInstance(placeModal);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
});