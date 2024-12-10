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
                const voiceLineDiv = document.createElement('div');
                voiceLineDiv.classList.add('voice-line-div');
                voiceLineDiv.style.backgroundColor = '#e0e2db';
                voiceLineDiv.style.height = '50px';
                voiceLineDiv.style.display = 'flex';
                voiceLineDiv.style.justifyContent = 'center';
                voiceLineDiv.style.alignItems = 'center';
                asheContainer.appendChild(voiceLineDiv);


                const voiceLine = document.createElement('li');
                voiceLine.textContent = vl.toUpperCase();
                voiceLine.style.color = '#d36135';
                voiceLineDiv.appendChild(voiceLine);
            });
            break;
        case 'dvaVoiceLines':
            dvaVoiceLines.forEach(vl => {
                const voiceLineDiv = document.createElement('div');
                voiceLineDiv.classList.add('voice-line-div');
                voiceLineDiv.style.backgroundColor = '#e0e2db';
                voiceLineDiv.style.height = '50px';
                voiceLineDiv.style.display = 'flex';
                voiceLineDiv.style.justifyContent = 'center';
                voiceLineDiv.style.alignItems = 'center';
                dvaContainer.appendChild(voiceLineDiv);

                const voiceLine = document.createElement('li');
                voiceLine.textContent = vl.toUpperCase();
                voiceLine.style.color = '#d36135';
                voiceLineDiv.appendChild(voiceLine);
            });
            break;
        case 'lifeweaverVoiceLines':
            lifeweaverVoiceLines.forEach(vl => {
                const voiceLineDiv = document.createElement('div');
                voiceLineDiv.classList.add('voice-line-div');
                voiceLineDiv.style.backgroundColor = '#e0e2db';
                voiceLineDiv.style.height = '50px';
                voiceLineDiv.style.display = 'flex';
                voiceLineDiv.style.justifyContent = 'center';
                voiceLineDiv.style.alignItems = 'center';
                lifeweaverContainer.appendChild(voiceLineDiv);

                const voiceLine = document.createElement('li');
                voiceLine.textContent = vl.toUpperCase();
                voiceLine.style.color = '#d36135';
                voiceLineDiv.appendChild(voiceLine);
            });
            break;
    };
};
loadHeroVoiceLines(heroID);

// Form Functionality
voiceLineForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newVoiceLine = document.createElement("li");
    newVoiceLine.textContent = formText.value.toUpperCase();
    
    switch (heroID) {
        case 'asheVoiceLines':
            newVoiceLine.style.color = '#e0e2db';
            asheContainer.prepend(newVoiceLine);
            break;
        case 'dvaVoiceLines':
            newVoiceLine.style.color = '#e0e2db';
            dvaContainer.prepend(newVoiceLine);
            break;
        case 'lifeweaverVoiceLines':
            newVoiceLine.style.color = '#e0e2db';
            lifeweaverContainer.prepend(newVoiceLine);
            break;
    };

    formText.value = "";
});