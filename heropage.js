import { asheVoiceLines, dvaVoiceLines, lifeweaverVoiceLines } from "./voicelines.js";

const header = document.querySelector('header');
const heroID = header.nextElementSibling.id;
const asheContainer = document.querySelector('div#asheVoiceLines ul.voice-lines-container');
const dvaContainer = document.querySelector('div#dvaVoiceLines ul.voice-lines-container');
const lifeweaverContainer = document.querySelector('div#lifeweaverVoiceLines ul.voice-lines-container');

const voiceLineForm = document.getElementById("voice-line-form");
const formText = document.getElementById("voice-line-text");

function loadHeroVoiceLines(heroPage) {
    switch (heroPage) {
        case 'asheVoiceLines': 
            asheVoiceLines.forEach(vl => {
                const voiceLine = document.createElement('li');
                voiceLine.textContent = vl;
                asheContainer.appendChild(voiceLine);
            });
            break;
        case 'dvaVoiceLines':
            dvaVoiceLines.forEach(vl => {
                const voiceLine = document.createElement('li');
                voiceLine.textContent = vl;
                dvaContainer.appendChild(voiceLine);
            });
            break;
        case 'lifeweaverVoiceLines':
            lifeweaverVoiceLines.forEach(vl => {
                const voiceLine = document.createElement('li');
                voiceLine.textContent = vl;
                lifeweaverContainer.appendChild(voiceLine);
            });
            break;
    };
};
loadHeroVoiceLines(heroID);

// Form Functionality
voiceLineForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newVoiceLine = document.createElement("li");
    newVoiceLine.textContent = formText.value;
    
    switch (heroID) {
        case 'asheVoiceLines':
            asheContainer.prepend(newVoiceLine);
            break;
        case 'dvaVoiceLines':
            dvaContainer.prepend(newVoiceLine);
            break;
        case 'lifeweaverVoiceLines':
            lifeweaverContainer.prepend(newVoiceLine);
            break;
    };

    formText.value = "";
});