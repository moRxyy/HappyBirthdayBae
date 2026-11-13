
// SHOW SURPRISE MESSAGE
function showSurprise() {
    const message = document.getElementById("surpriseMessage");

    if (message) {
        message.style.display =
            message.style.display === "block" ? "none" : "block";
    }
}


// BIRTHDAY COUNTDOWN - NOVEMBER 14 EVERY YEAR
function updateCountdown() {
    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(), 10, 14, 0, 0, 0
    );

    // If the birthday has passed, count toward next year.
    if (now > new Date(now.getFullYear(), 10, 14, 23, 59, 59)) {
        birthday = new Date(
            now.getFullYear() + 1, 10, 14, 0, 0, 0
        );
    }

    // Birthday greeting on November 14.
    if (now.getMonth() === 10 && now.getDate() === 14) {
        countdown.textContent = "HAPPY BIRTHDAY! 🎂💗";
        return;
    }

    const distance = birthday.getTime() - now.getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.textContent =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";
}

// Run countdown only if the countdown element exists.
// RUN COUNTDOWN ONLY ON THE SURPRISE PAGE
const countdown = document.getElementById("countdown");

if (countdown) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// FLOATING HEARTS AND DECORATIONS
function createFloatingDecoration() {
    const decoration = document.createElement("div");

    decoration.className = "floating";

    const items = ["💙", "🐾", "🐱", "🐶", "🩵", "🌸"];

    decoration.textContent =
        items[Math.floor(Math.random() * items.length)];

    decoration.style.left = Math.random() * 100 + "vw";

    decoration.style.fontSize =
        (20 + Math.random() * 20) + "px";

    document.body.appendChild(decoration);

    setTimeout(function() {
        decoration.remove();
    }, 5000);
}

setInterval(createFloatingDecoration, 1200);


// MOBILE MENU
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}

// MOVING GALLERY - 43 PICTURES
const movingTrack = document.getElementById("movingTrack");

if (movingTrack) {
    const pictures = [];

    for (let i = 1; i <= 43; i++) {
        pictures.push(`Image/${i}.jpg`);
    }

    // Repeat the pictures to create a continuous loop
    const allPictures = [...pictures, ...pictures];

    allPictures.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Memory picture";
        movingTrack.appendChild(img);
    });
}
           