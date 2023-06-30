import * as modalController from './modal-controller.js'

export function init() {

    const contactLink = document.querySelector(".contact-link");
    contactLink.addEventListener('click', handleContactLinkClick);

    const clear = document.getElementById("reload-page");
        clear.addEventListener('click', () => {
        location.reload();
    });

    const urlInstagram = document.getElementById("link-ig");
        urlInstagram.addEventListener('click', () => {
        window.open('https://www.instagram.com/__duuarte__/', '_blank');
    });

    const urlLinkedIn = document.getElementById("link-LinkedIn");
        urlLinkedIn.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/nicolas-duarte-dev/', '_blank');
    });

    const urlGitHub = document.getElementById("link-gitHub");
        urlGitHub.addEventListener('click', () => {
        window.open('https://github.com/NicoProgramador', '_blank');
    });
}

function handleContactLinkClick(event) {
    event.preventDefault();
    modalController.showModal();
}