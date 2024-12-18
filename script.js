let actieveTijd = null; // Herinnert welke tijd geselecteerd is

function veranderAchtergrond(tijd) {
    actieveTijd = tijd; // Onthoud welke tijd actief is

    let afbeeldingen; // Variabele voor de juiste set afbeeldingen

    // Kies de juiste afbeeldingenlijst op basis van de tijd
    if (tijd === "ochtend") {
        afbeeldingen = ["images/ochtend.png", "images/ochtend1.jpg", "images/ochtend2.jpg"];
    } else if (tijd === "middag") {
        afbeeldingen = ["images/middag.png", "images/middag1.jpg", "images/middag2.jpeg"];
    } else if (tijd === "avond") {
        afbeeldingen = ["images/avond.png", "images/avond1.png", "images/avond2.jpg"];
    } else {
        console.error("Onbekende tijd: " + tijd); // Voor het geval dat de tijd niet klopt
        return;
    }

    // Kies een willekeurige foto uit de lijst
    const randomIndex = Math.floor(Math.random() * afbeeldingen.length);
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
    if (!tijd) { // Als er geen tijd is gekozen...
        alert('Selecteer eerst een tijd om de audio af te spelen.'); // Laat een waarschuwing zien
        return;
    }
    huidigeAudio.pause(); // Stop het geluid dat al speelt
    huidigeAudio.currentTime = 0; // Begin opnieuw bij het begin van de muziek
    huidigeAudio.src = audioBronnen[tijd]; // Zet het nieuwe geluid klaar
    huidigeAudio.play().catch(err => { // Probeer het geluid af te spelen
        console.error('Kan audio niet afspelen:', err); // Als het niet lukt, laat een fout zien
    });
}

// Audioknop functionaliteit
document.getElementById('play-button').addEventListener('click', () => {
    veranderAudio(actieveTijd); 
});

document.getElementById('pause-button').addEventListener('click', () => {
    huidigeAudio.pause();
});

