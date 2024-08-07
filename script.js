const galleryContainer = document.querySelector('.gallery-container');
const scrollRightBtn = document.querySelector('.scroll-right');

scrollRightBtn.addEventListener('click', () => {
    const firstChild = galleryContainer.firstElementChild;
    galleryContainer.appendChild(firstChild.cloneNode(true));
    galleryContainer.removeChild(firstChild);
    galleryContainer.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.view-brochure-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('form-overlay').classList.add('show');
    });
});

document.getElementById('form-overlay').addEventListener('click', (event) => {
    if (event.target === document.getElementById('form-overlay')) {
        document.getElementById('form-overlay').classList.remove('show');
    }
});