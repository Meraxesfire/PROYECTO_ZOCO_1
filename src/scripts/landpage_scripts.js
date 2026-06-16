
//script de landpage
const header = document.querySelector('.divSuperior');
const triggerElement = document.querySelector('.divSupremo'); // Usamos el contenedor padre

const observerOptions = {
    root: null,
    threshold: 0.1 // Cuando el 10% del contenedor padre ha salido del viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('scrolled'); // Aquí cambias el color/opacidad
        } else {
            header.classList.remove('scrolled');
        }
    });
}, observerOptions);

observer.observe(triggerElement);