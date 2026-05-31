// Initialize Animate On Scroll
AOS.init({
    duration: 800,
    easing: 'ease-out-back',
    once: true
});

// Subtle Parallax effect for the Grid
window.addEventListener('scroll', () => {
    const grid = document.querySelector('.grid-overlay');
    let offset = window.pageYOffset;
    grid.style.backgroundPositionY = offset * 0.5 + 'px';
});

// Terminal Typewriter Effect for the Hero Section
const text = document.querySelector('.typewriter');
const originalText = text.innerHTML;
text.innerHTML = '';
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        text.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
window.onload = typeWriter;