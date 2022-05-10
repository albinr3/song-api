export const form = document.querySelector("#formulario-buscar");
export const artistInput = document.querySelector("#artista");
export const songInput = document.querySelector("#cancion");
export const searchBtn = document.querySelector("#buscar");
export const divMessages = document.querySelector("#mensajes");
export const divResult = document.querySelector("#resultado");
export const headingSong = document.querySelector("#song-name");

export function spinner() {
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.innerHTML = `
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
    `;
    form.insertBefore(spinner, document.querySelector(".enviar"));
}
