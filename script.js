const hamburger = document.getElementById('hamburger');
const fullScreenMenu = document.getElementById('full-screen-menu');
hamburger.addEventListener('click', () => {
    fullScreenMenu.style.display = 'flex';
    fullScreenMenu.classList.add('active');

    hamburger.classList.toggle('active');
});

function closeMenu() {
    fullScreenMenu.classList.remove('active');
    setTimeout(() => fullScreenMenu.style.display = 'none', 300);
    hamburger.classList.remove('active');
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'full-screen-menu' || e.target.tagName === 'A') {
        closeMenu();
    }
});

  
    document.addEventListener("DOMContentLoaded", function() {
        var sections = document.querySelectorAll('.stopka-menu p, .stopka-kontakt p, .stopka-informacje p');
        
        sections.forEach(function(section) {
            section.addEventListener('click', function() {
                var parent = section.parentElement;
                parent.classList.toggle('open');
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Wybierz sekcję kontaktu i przycisk
        const kontaktSection = document.getElementById('kontakt');
        const button = document.getElementById('skontaktujsieznami');
    
        // Utwórz Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Jeśli sekcja jest w widoku, pokaż przycisk
                    button.classList.add('show');
                } else {
                    // Jeśli sekcja nie jest w widoku, ukryj przycisk
                    button.classList.remove('show');
                }
            });
        }, { threshold: 0.5 }); // Sekcja musi być w 50% widoczna, by przycisk się pojawił
    
        // Obserwuj sekcję kontaktu
        observer.observe(kontaktSection);
    });
