const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const dancingCat = document.getElementById('dancingCat');

yesButton.addEventListener('click', () => {
    dancingCat.classList.remove('hidden'); // Show the dancing cat GIF
});

noButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
