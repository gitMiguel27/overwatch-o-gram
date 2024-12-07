// Hero Choice Functionality
const heroChoiceContainer = document.getElementsByClassName("hero-choice");
for (const heroChoice of heroChoiceContainer) {
    heroChoice.addEventListener('click', () => {
        window.location = `/${heroChoice.id}.html`
    })
};