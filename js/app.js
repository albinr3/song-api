import * as UI from "./interfaz.js";
import API from "./api.js";

document.addEventListener("mousemove", UI.clearHTML);
UI.form.addEventListener("submit", searchSong);


function searchSong(e) {
    e.preventDefault();

    if(UI.artistInput.value === "" || UI.songInput.value === "") {
        UI.divMessages.textContent = "Error: Both fields are required!!";
        UI.divMessages.classList.add("error");

        setTimeout(() => {
            UI.divMessages.textContent = "";
            UI.divMessages.classList.remove("error");
        }, 3000);
    } else {

        //consult our API
        const query = new API(UI.artistInput.value, UI.songInput.value)
        query.consultApi();
    }

}