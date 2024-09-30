// Smooth scroll for Download button
document.querySelector('.cta-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#download').scrollIntoView({ behavior: 'smooth' });
});
