function toggleMenu() {
    console.log("toggleMenu function called");
    var navLinks = document.getElementById("nav-links");
    var menuIcon = document.querySelector('.menu-icon');

    menuIcon.classList.toggle('active');
    if (menuIcon.classList.contains('active')) {
        menuIcon.style.color = 'lightpink';
        navLinks.style.display = 'flex';
    } else {
        menuIcon.style.color = '';
        navLinks.style.display = 'none';
    }
}

function toggleDarkMode() {
    console.log("toggleDarkMode function called");
    const body = document.body;
    body.classList.toggle('dark-mode');
    const modeToggle = document.querySelector('.mode-toggle');
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
}

function moveImage(event) {
    console.log("moveImage function called");
    const hoverImage = document.getElementById('hover-image');
    hoverImage.style.setProperty('--cursor-x', event.clientX + 'px');
    hoverImage.style.setProperty('--cursor-y', event.clientY + 'px');
}

document.getElementById('contact').addEventListener('mousemove', moveImage);

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
