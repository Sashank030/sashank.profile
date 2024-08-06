
AOS.init({
    duration: 1000,
    once: true,
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    modeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    

    const header = document.querySelector('header');
    header.style.backgroundColor = isDarkMode ? 'rgba(43, 33, 24, 0.9)' : 'rgba(245, 232, 211, 0.9)';
    

    const heroOverlay = document.querySelector('.hero::before');
    if (heroOverlay) {
        heroOverlay.style.background = isDarkMode ? 'rgba(43, 33, 24, 0.7)' : 'rgba(245, 232, 211, 0.7)';
    }
});


window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});


document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a placeholder - implement actual form submission)');
});


function resizeIframe() {
    const iframe = document.querySelector('#resumeViewer iframe');
    if (iframe) {
        if (window.innerWidth <= 768) {
            iframe.style.height = '400px';
        } else {
            iframe.style.height = '600px';
        }
    }
}

window.addEventListener('resize', resizeIframe);
resizeIframe(); // Initial call
