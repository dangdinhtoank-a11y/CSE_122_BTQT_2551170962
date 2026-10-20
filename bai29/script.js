document.addEventListener("DOMContentLoaded", () => {
    const pageItems = document.querySelectorAll("#pagination .page-item");

    pageItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            
            if (item.classList.contains("disabled")) return;

            pageItems.forEach(i => i.classList.remove("active"));
            
            if (!item.querySelector("a").innerHTML.includes("&laquo;") && 
                !item.querySelector("a").innerHTML.includes("&raquo;")) {
                item.classList.add("active");
            }
        });
    });
});