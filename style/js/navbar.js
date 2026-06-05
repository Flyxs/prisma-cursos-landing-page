const header = document.querySelector('header');

header.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
    
        if (event.target.tagName === 'A') {
            header.classList.remove('expandido');
            return;
        }
        header.classList.toggle('expandido');
    }
});