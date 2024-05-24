const viewPassButton = document.getElementById("viewPassButton"); // Nút "View Pass"
const productDetailsOverlay = document.getElementById("productDetailsOverlay");
const closeButton = document.getElementById("closeButton");

viewPassButton.addEventListener("click", () => {
    productDetailsOverlay.style.display = "block";
    setTimeout(() => {
        productDetailsOverlay.style.opacity = 1; // Hiệu ứng fade in
    }, 10); // Thời gian fade in (milliseconds)
});

closeButton.addEventListener("click", () => {
    productDetailsOverlay.style.opacity = 0; // Hiệu ứng fade out
    setTimeout(() => {
        productDetailsOverlay.style.display = "none";
    }, 500); // Thời gian fade out (milliseconds)
});
