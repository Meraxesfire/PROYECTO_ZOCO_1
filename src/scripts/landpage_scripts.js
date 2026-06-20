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