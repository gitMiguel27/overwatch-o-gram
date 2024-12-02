const textBox = document.getElementById("voice-lines-container");

const form = document.getElementById("voice-line-form");
const formText = document.getElementById("voice-line-text");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(formText.value);
});