// Variabele voor actieve tijd
let actieveTijd = null; // Herinnert welke tijd geselecteerd is

const afbeeldingenSets = {
    ochtend: ["images/ochtend.png", "images/ochtend1.jpg", "images/ochtend2.jpg"],
    middag: ["images/middag.png", "images/middag1.jpg", "images/middag2.jpeg"],
    avond: ["images/avond.png", "images/avond1.png", "images/avond2.jpg"]
};

function veranderAchtergrond(tijd) {
    actieveTijd = tijd; // Onthoud welke tijd actief is
    const afbeeldingen = afbeeldingenSets[tijd]; // Zoek de juiste lijst van foto's
    const randomIndex = Math.floor(Math.random() * afbeeldingen.length); // Kies een willekeurige foto uit de lijst
    document.body.style.backgroundImage = `url(${afbeeldingen[randomIndex]})`; // Verander de achtergrond
}

// Event listeners toevoegen bij het laden van de pagina
document.addEventListener("DOMContentLoaded", function () {
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

// Tijd bijwerken
function updateTijd() {
    const tijdElement = document.getElementById("live-tijd"); // Zoek het tijdvak op de pagina
    const tijd = new Date().toLocaleTimeString(); // Vraag de computer om de huidige tijd
    tijdElement.textContent = `De huidige tijd is: ${tijd}`; // Zet die tijd op de pagina
}

setInterval(updateTijd, 1000); // 1 seconde
updateTijd(); // Zorgt dat de tijd meteen wordt ingesteld als de pagina start

// Audio bronnen
const audioBronnen = {
        ochtend: 'audio/ochtend.mp3',
        middag: 'audio/middag.mp3',
        avond: 'audio/avond.mp3'
    };

let huidigeAudio = new Audio();

function veranderAudio(tijd) {
    huidigeAudio.pause();
    huidigeAudio.currentTime = 0; // Begint opnieuw
    huidigeAudio.src = audioBronnen[tijd]; // Zet het nieuwe geluid klaar
    huidigeAudio.load(); // Laad het geluid klaar om af te spelen
}

// Audioknop functionaliteit
document.getElementById('play-button').addEventListener('click', () => {
    if (!actieveTijd) {
        alert('Selecteer eerst een tijd om de audio af te spelen.'); // Waarschuwing als je geen tijd hebt gekozen
        return;
    }
    veranderAudio(actieveTijd); // Zet het juiste geluid klaar
    huidigeAudio.play().catch(err => {
        console.error('Kan audio niet afspelen:', err); // Laat fouten zien als het niet lukt
    });
});

document.getElementById('pause-button').addEventListener('click', () => {
    huidigeAudio.pause(); // Pauzeer de audio
});

