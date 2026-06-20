// script para el scroll del menú, mantiene el menu y el logo visibles mientras el video/img o media de primer vistazo está en pantalla y cambia el color del menú cuando el video se va
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.divSuperior');
    const triggerElement = document.querySelector('.divSupremo');

    if (!(header instanceof HTMLElement) || !(triggerElement instanceof HTMLElement)) {
        return;
    }

    const updateHeaderState = () => {
        const triggerBottom = triggerElement.offsetTop + triggerElement.offsetHeight;
        const shouldBeScrolled = window.scrollY >= triggerBottom;

        header.classList.toggle('scrolled', shouldBeScrolled);
    };

    let ticking = false;
    const onScroll = () => {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(() => {
            updateHeaderState();
            ticking = false;
        });
    };

    updateHeaderState();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateHeaderState);
});

//SCRIPT PARA EL HOVER DE LAS IMAGENES DE PROMOCION, CAMBIA LA IMAGEN AL HACER HOVER Y VUELVE A LA ORIGINAL CUANDO SE QUITA EL HOVER

const imagenPromo1 = document.querySelector('.Promo1');
const imagenPromo2 = document.querySelector('.Promo2');

const rutaOriginal1 = '/Modelo/modelo1Col.png';
const rutaHover1 = '/opticalLenses/gafaoptica.png';

const rutaOriginal2 = '/Modelo/modelo2Col.png';
const rutaHover2 = '/sunLenses/Nutmeg.png';

if (
    imagenPromo1 instanceof HTMLImageElement &&
    imagenPromo2 instanceof HTMLImageElement &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
) {
    imagenPromo1.addEventListener('mouseenter', () => {
        imagenPromo1.src = rutaHover1;
    });

imagenPromo1.addEventListener('mouseleave', () => {
    imagenPromo1.src = rutaOriginal1;
});

imagenPromo2.addEventListener('mouseenter', () => {
    imagenPromo2.src = rutaHover2;
});

imagenPromo2.addEventListener('mouseleave', () => {
    imagenPromo2.src = rutaOriginal2;
});
}