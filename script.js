let currentImageIndex = 0;
let imagesArray = [];

function openModal(images) {
    imagesArray = images;
    currentImageIndex = 0;
    showImage();
    document.getElementById('imageModal').style.display = 'flex';
}

function showImage() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
    
    let img = document.createElement('img');
    img.src = imagesArray[currentImageIndex];
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.maxWidth = '400px';
    img.style.margin = 'auto';
    
    imageContainer.appendChild(img);
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage();
    }
}

function nextImage() {
    if (currentImageIndex < imagesArray.length - 1) {
        currentImageIndex++;
        showImage();
    }
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function calculateTotal() {
    let total = 0;
    document.querySelectorAll("tbody tr").forEach(row => {
        let priceText = row.cells[5].innerText.match(/\d+\.\d+/);
        let quantity = parseInt(row.cells[4].innerText, 10);
        if (priceText) {
            let price = parseFloat(priceText[0]);
            total += price * quantity;
        }
    });
    document.getElementById("totalPrice").innerText = `Total: USD $${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", calculateTotal);
