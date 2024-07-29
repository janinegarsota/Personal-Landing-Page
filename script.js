function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function handleScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 50); 
        }
    });
}

document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
