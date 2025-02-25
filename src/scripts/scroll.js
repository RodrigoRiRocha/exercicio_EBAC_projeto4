document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5 // Ajustar para 50% de visibilidade
    });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
});
