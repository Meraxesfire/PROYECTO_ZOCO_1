
//script de landpage, evento de click en el link de home para animacion de fade out
document.addEventListener("DOMContentLoaded", () => {
	const homeLink = document.querySelector("[data-home-link]");

	if (!(homeLink instanceof HTMLAnchorElement)) {
		return;
	}

	homeLink.addEventListener("click", (event) => {
		const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

		if (isModifiedClick) {
			return;
		}

		event.preventDefault();
		document.body.classList.add("is-fading");

		window.setTimeout(() => {
			window.location.href = homeLink.href;
		}, 550);
	});
});
