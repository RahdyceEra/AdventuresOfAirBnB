const reasons = [
    "Everyday with you is something I can't wait for. ",
    "I love the moments where we both do our own things & we still feel loved.",
    "You've always supported me through every step that I've made.",
    "Our jokes and times we just talk about the future we want to make togehter.",
    "To you being my #1.",
    "To you being the bestest girlfriend that I can ever ask for.",
    "Aishiteru, Kekkon kinenbi omedetou 💖"
];

const display = document.getElementById('message-display');
const button = document.getElementById('generate-btn');
const nextLink = document.getElementById('next-page-link');

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('finished') === 'true') {
    // Change this to whatever custom sweet message you want!
    display.textContent = "I hope you loved the trip down memory lane & and the little quiz! Too ∞ and beyond ❤️. I love you so much babe. Happy anniversary.";
    
    // Optional: If you want the button to say something different upon returning
    button.textContent = "Do you need a reminder of why I love you? Click here!"; 
}

let currentIndex = 0; 

button.addEventListener('click', function() {
    display.style.opacity = 0;
    
    setTimeout(() => {
        if (currentIndex < reasons.length) {
            display.textContent = reasons[currentIndex];
            currentIndex++;
            button.textContent = "Tell Me Another";
        } else {
            display.textContent = "And so much more ❤️";
            button.style.display = "none"; 
            nextLink.style.display = "inline-block"; 
        }
        
        display.style.opacity = 1;
        display.style.transition = "opacity 0.4s ease";
    }, 200); 
});