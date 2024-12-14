const afbeeldingenSets = {
    ochtend: ["images/ochtend.png", "images/ochtend1.jpg", "images/ochtend2.jpg"],
    middag: ["images/middag.png", "images/middag1.jpg", "images/middag2.jpeg"],
    avond: ["images/avond.png", "images/avond1.png", "images/avond2.jpg"]
};

function veranderAchtergrond(tijd) {
    const afbeeldingen = afbeeldingenSets[tijd];
    const randomIndex = Math.floor(Math.random() * afbeeldingen.length);
    document.body.style.backgroundImage = `url(${afbeeldingen[randomIndex]})`;
}

// Event listeners toevoegen bij het laden van de pagina
document.addEventListener("DOMContentLoaded", function () {
    // Voeg event listeners toe aan de knoppen
    document.getElementById("ochtendKnop").addEventListener("click", function () {
        veranderAchtergrond("ochtend");
    });
    document.getElementById("middagKnop").addEventListener("click", function () {
        veranderAchtergrond("middag");
    });
    document.getElementById("avondKnop").addEventListener("click", function () {
        veranderAchtergrond("avond");
    });
});

    function updateTijd() {
        const tijdElement = document.getElementById("live-tijd");
        const tijd = new Date().toLocaleTimeString(); // Haalt de huidige tijd op
        tijdElement.textContent = `De huidige tijd is: ${tijd}`; // Update de tijd in html
    }
    
    // Zorg dat de tijd elke seconde wordt bijgewerkt
    setInterval(updateTijd, 1000);
    
    // Start direct een eerste update
    updateTijd();
    

// Audio bronnen per tijd
const audioBronnen = {
    ochtend: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
    middag: 'https://www.bensound.com/bensound-music/bensound-energy.mp3',
    avond: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3'    
};

// Variabele om de huidige audio bij te houden
let huidigeAudio = new Audio();

// Functie om audio te veranderen
function veranderAudio(tijd) {
    // Pauzeert audio
    huidigeAudio.pause();
    huidigeAudio.currentTime = 0;

    // Update de audio bron
    huidigeAudio = new Audio(audioBronnen[tijd]);
}

// Play knop functionaliteit
document.getElementById('play-button').addEventListener('click', () => {
    huidigeAudio.play();
});

// Pause knop functionaliteit
document.getElementById('pause-button').addEventListener('click', () => {
    huidigeAudio.pause();
});

