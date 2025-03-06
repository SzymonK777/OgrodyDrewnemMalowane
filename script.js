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
       
        const kontaktSection = document.getElementById('kontakt');
        const button = document.getElementById('skontaktujsieznami');
    

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                   
                    button.classList.add('show');
                } else {
                    
                    button.classList.remove('show');
                }
            });
        }, { threshold: 0.5 });
    
        observer.observe(kontaktSection);
    });


    let images = [
        "pergole.jpg",
        "doniczka.jpg",
        "drewniane.jpg",
        "zadaszenia.jpg",
        "altanka.jpg",
        "infprodukt.jpg"
    ];
    let currentIndex = 0;
    
    function openLightbox(index) {
        currentIndex = index;
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightbox-img").src = images[currentIndex];
    }
    
    function closeLightbox() {
        document.getElementById("lightbox").style.display = "none";
    }
    
    
    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        document.getElementById("lightbox-img").src = images[currentIndex];
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeLightbox();
        } else if (event.key === "ArrowRight") {
            changeImage(1);
        } else if (event.key === "ArrowLeft") {
            changeImage(-1);
        }
    });
    
