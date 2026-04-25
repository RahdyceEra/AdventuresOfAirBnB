// Array of objects, each containing a memory description and its corresponding image path
const memories = [
    { text: "We started off friends how we end up here? ", images: "images/FirstMoment.jpg" },
    { text: "Really enjoyed this first date. It was something special a time where we were just 1 on 1 with each other. Enjoying food and chatting together.", images: "images/Firstdate.jpg" },
    { text: "Now were six months in.(Our celebration eating at our favorite place)  ", images: "images/6months.jpg" },
    { text: "One of my many conventions that we've gone too. These are always a blast!", images: "images/Convention.jpg" },
     { text: "Our second year anniversary. This cruise was a wonderful experience with you. Cant wait to go on many more. This was the year too when you became an alumni!!!!!", images: "images/Cruise.jpeg" },
    { text: "Time really flew by. The third year in. This was a great celebration. Did our food tour and then later on our white water adventure.", images: "images/3rdanniversary.jpg" },
];

// DOM elements
const display = document.getElementById('message-display');
const button = document.getElementById('generate-btn');
const quizLink = document.getElementById('quiz-link');

let currentIndex = 0;

button.addEventListener('click', function() {
    // Fade out text
    display.style.opacity = 0;
    
    setTimeout(() => {
        if (currentIndex < memories.length) {
            // Load the current memory object
            const selectedMemory = memories[currentIndex];
            
            // Update the text container
            display.textContent = selectedMemory.text;
            
            // Update the page's background image dynamically
            document.body.style.backgroundImage = `url('${selectedMemory.images}')`;
            
            currentIndex++;
        } else {
            // Reached the end of the memories array
            display.textContent = "Every moment with you is my favorite & will always cherish closely. This year was no different. Cant believe this is our fourth year together. I'm looking forward to many more and the memories will be able to make together this year";
            
            // Reset the background to the default pink color
            document.body.style.backgroundImage = "none"; // Fixed a typo here: previously said "backgroundimages"
            document.body.style.backgroundColor = "#ffe6e6"; 
            
            // Swap the button out for the quiz link
            button.style.display = "none";
            quizLink.style.display = "inline-block";
        }
        
        // Fade text back in
        display.style.opacity = 1;
        display.style.transition = "opacity 0.4s ease";
    }, 200); 
});