/*!
* SAGE Edu - v1.2 
* Copyright 2025-2026 Familia Pequenino Capingala - FPC
* Developer Zacarias Capingala - zacariasjuliano@gmail.com
* Licensed under MIT (https://github.com/zacariasjuliano/sage-edu/blob/main/LICENSE)
*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = (i % 3) * 0.1 + 's';
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 50
        ? 'rgba(28,61,104,0.99)'
        : 'rgba(38,78,130,0.97)';
});