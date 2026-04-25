// Array containing the love notes to be displayed sequentially
const reasons = [
    "Everyday with you is something I can't wait for. ",
    "I love the moments where we both do our own things & we still feel loved.",
    "You've always supported me through every step that I've made.",
    "Our jokes and times we just talk about the future we want to make togehter.",
    "To you being my #1.",
    "To you being the bestest girlfriend that I can ever ask for.",
    "Aishiteru, Kekkon kinenbi omedetou 💖"
];

// Grab the necessary DOM elements to manipulate later
const display = document.getElementById('message-display');
const button = document.getElementById('generate-btn');
const nextLink = document.getElementById('next-page-link');

// Check the URL for the 'finished=true' parameter (triggered when coming back from the quiz)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('finished') === 'true') {
    // Override the default welcome message if the user has completed the entire flow
    display.textContent = "I hope you loved the trip down memory lane & and the little quiz! Too ∞ and beyond ❤️. I love you so much babe. Happy anniversary.";
    
    // Update button text for the return trip
    button.textContent = "Do you need a reminder of why I love you? Click here!"; 
}

// Track the current position in the reasons array
let currentIndex = 0; 

// Event listener for the "Tell Me Another" button
button.addEventListener('click', function() {
    // Fade out current text
    display.style.opacity = 0;
    
    // Wait 200ms for the fade out to finish before changing text
    setTimeout(() => {
        // If there are still reasons left to show...
        if (currentIndex < reasons.length) {
            display.textContent = reasons[currentIndex];
            currentIndex++; // Move to the next reason for the next click
            button.textContent = "Tell Me Another";
        } else {
            // If we've reached the end of the array...
            display.textContent = "And so much more ❤️";
            button.style.display = "none"; // Hide the button
            nextLink.style.display = "inline-block"; // Reveal the link to the memories page
        }
        
        // Fade the text back in
        display.style.opacity = 1;
        display.style.transition = "opacity 0.4s ease";
    }, 200); 
});