import { asheVoiceLines, dvaVoiceLines, lifeweaverVoiceLines } from "./voicelines.js";
console.log("Ashe: ", asheVoiceLines);
console.log("DVa: ", dvaVoiceLines);
console.log("Lifeweaver: ", lifeweaverVoiceLines);

// Form Functionality
const voiceLinesContainer = document.getElementById("voice-lines-container");

const voiceLineForm = document.getElementById("voice-line-form");
const formText = document.getElementById("voice-line-text");

voiceLineForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newVoiceLine = document.createElement("li");
    newVoiceLine.textContent = formText.value;
    voiceLinesContainer.appendChild(newVoiceLine);

    formText.value = "";
});