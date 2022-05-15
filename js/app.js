import * as UI from "./interfaz.js";
import API from "./api.js";

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

        const spinnerHtml = document.querySelector('.spinner');
        //show spinner
        if(!spinnerHtml) {
            UI.spinner(); 
        };

        //consult our API
        const query = new API(UI.artistInput.value, UI.songInput.value)
        query.consultApi();
    }

}