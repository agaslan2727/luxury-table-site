
function purchase(product, price) {
    alert("Selected: " + product + " - $" + price);
    document.getElementById("payment-form").scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".product img");
    const popup = document.getElementById("image-popup");
    const popupImg = popup.querySelector("img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = img.src;
        });
    });

    popup.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
