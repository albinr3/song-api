import * as UI from "./interfaz.js";

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    async consultApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        UI.spinner();

        try {
            const response = await fetch(url);
            const result = await response.json();
            const spinner = document.querySelector(".spinner");
            spinner.remove();

            const {lyrics} = result;

            UI.divResult.textContent = lyrics;
            UI.headingSong.textContent = `Lyrics of ${this.song} from the artist ${this.artist}`;

        } catch (error) {

            const spinner = document.querySelector(".spinner");
            spinner.remove();
            console.log(error);
            UI.divMessages.textContent = error;
            UI.divMessages.classList.add("error");

            setTimeout(() => {
                UI.divMessages.textContent = "";
                UI.divMessages.classList.remove("error");
            }, 3000);
        }
    }
}

export default API;