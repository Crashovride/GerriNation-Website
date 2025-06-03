const galleryContainer = document.querySelector('.gallery-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    scrollAmount += 200;
    galleryContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= 200;
    if (scrollAmount < 0) scrollAmount = 0;
    galleryContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});