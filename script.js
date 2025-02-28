document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Array of texts to type out
const texts = [
    "Hello, I'm Farr...",
    "I'm a Game Developer...",
    "I'm an Android Developer...",
    "I'm a Desktop Developer..."
];

let currentTextIndex = 0;
let currentCharIndex = 0;
const typingElement = document.getElementById("typing-text");

// Function to type out text one character at a time
function typeText() {
    const currentText = texts[currentTextIndex];
    if (currentCharIndex < currentText.length) {
        typingElement.innerHTML += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, 100); // Adjust the typing speed here (100ms per character)
    } else {
        // Move to the next text after typing is complete
        currentCharIndex = 0;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop through texts
        setTimeout(() => {
            typingElement.innerHTML = ''; // Clear text
            typeText(); // Start typing the next text
        }, 1500); // Pause for a moment before starting next text
    }
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Start typing when the page loads
window.onload = typeText;

