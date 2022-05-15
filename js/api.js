import * as UI from "./interfaz.js";

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    async consultApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
        
        try {
            const response = await fetch(url);
            const result = await response.json();
          
            // //when it found the lyrics it delete the spinner
            const spinnerHtml = document.getElementById('spinner');
            if(spinnerHtml) {
                spinnerHtml.remove();
            };
            

            const {lyrics} = result;

            UI.divResult.textContent = lyrics;
            UI.headingSong.textContent = `Lyrics of ${this.song} from the artist ${this.artist}`;

        } catch (error) {

            

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