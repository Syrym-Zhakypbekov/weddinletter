document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle the background music
    const playButton = document.getElementById('play-music');
    const music = document.getElementById('background-music');

    playButton.addEventListener('click', () => {
        music.volume = 1.0;  // Set volume to 100%
        music.play().catch(error => {
            console.error("Auto-play failed:", error);
        });
    });
});
