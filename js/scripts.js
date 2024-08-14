window.onload = function () {
    console.log("Page loaded. Adding tabindex to images.");
    addTabFocus();
};

function upDate(previewPic) {
    console.log("Event triggered!");
    document.getElementById('image').innerText = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    document.getElementById('image').innerText = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('original-image.jpg')";
}

function addTabFocus() {
    const images = document.querySelectorAll('.thumbnail');
    images.forEach(img => {
        img.setAttribute('tabindex', '0');
        img.addEventListener('focus', () => upDate(img));
        img.addEventListener('blur', undo);
    });
}