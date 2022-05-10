import * as UI from "./interfaz.js";

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    consultApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        UI.spinner();

        fetch(url)
            .then(response => response.json() )
            .then(result => {
                if(result.lyrics) {
                    const {lyrics} = result;
                    setTimeout(() => {
                        document.querySelector(".spinner").remove();
                        UI.divResult.textContent = lyrics;
                        UI.headingSong.textContent = `Lyrics of ${this.song} from the artist ${this.artist}`;
                        
                    }, 2000);
                    
                } else {
                    UI.divMessages.textContent = "This song does not exist or check with another name!";
                    UI.divMessages.classList.add("error");

                    setTimeout(() => {
                        UI.divMessages.textContent = "";
                        UI.divMessages.classList.remove("error");
                    }, 3000);
                }
                
            });
    }
}

export default API;