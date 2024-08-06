
AOS.init({
    duration: 1000,
    once: true,
    offset: 200
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
resizeIframe(); 

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    var reveals = document.querySelectorAll('.section');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

revealOnScroll(); 
