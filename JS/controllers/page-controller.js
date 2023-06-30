import * as modalController from './modal-controller.js'

export function init() {

    const contactLink = document.querySelector(".contact-link");
    contactLink.addEventListener('click', handleContactLinkClick);

    const clear = document.getElementById("reload-page");
        clear.addEventListener('click', () => {
        location.reload();
    });
}

function handleContactLinkClick(event) {
    event.preventDefault();
    modalController.showModal();
}