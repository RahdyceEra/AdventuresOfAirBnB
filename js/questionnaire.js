// Array of question objects containing the logic, types, and answers for the quiz
const quizData = [
    {
        id: "q1",
        question: "1. Where did we go on our first date?",
        type: "text", // Standard input box
        correctAnswer: "Park", 
        placeholder: "Your answer here..."
    },
    {
        id: "q2",
        question: "2. Who said 'I love you' first?",
        type: "radio", // Multiple choice buttons
        options: ["Me", "You"],
        correctAnswer: "You" 
    },
    {
        id: "q3",
        question: "3. What is my favorite thing about you?",
        type: "textarea", // Larger text box
        correctAnswer: "Everything", 
        placeholder: "Take a guess..."
    },
    {
        id: "q4",
        question: "4. If I were to choose what would be my superpower?",
        type: "radio",
        options: ["Flight", "Invisibility", "Super Strength", "Nothing"],
        correctAnswer: "Invisibility"
    },
    {
        id: "q5",
        question: "5. Who is the one that shows the most affection?",
        type: "radio",
        options: ["Me", "You"],
        correctAnswer: "Me"
    },
    {
        id: "q6",
        question: "6. What is one of our favorite things to do together?",
        type: "text",
        correctAnswer: "Watching Shows",
        placeholder: "Your answer here..."
    }
];

// DOM elements
const questionsContainer = document.getElementById('quiz-questions');
const form = document.getElementById('quiz-form');
const resultMessage = document.getElementById('result-message');

// Function to dynamically generate the HTML for the quiz based on the quizData array
function buildQuiz() {
    quizData.forEach((item, index) => {
        // Create a wrapper for each question
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';

        let inputHtml = '';

        // Determine which type of HTML input to build based on the item.type
        if (item.type === 'text') {
            inputHtml = `<input type="text" id="${item.id}" required placeholder="${item.placeholder}">`;
        } 
        else if (item.type === 'textarea') {
            inputHtml = `<textarea id="${item.id}" rows="3" required placeholder="${item.placeholder}"></textarea>`;
        } 
        else if (item.type === 'radio') {
            inputHtml = `<div class="radio-group">`;
            item.options.forEach(option => {
                // Creates a unique ID for each radio button so labels click properly
                const optionId = `${item.id}-${option.replace(/\s+/g, '')}`; 
                inputHtml += `
                    <input type="radio" id="${optionId}" name="${item.id}" value="${option}" required>
                    <label for="${optionId}" class="radio-label">${option}</label>
                `;
            });
            inputHtml += `</div>`;
        }

        // Inject the generated input and its question label into the block
        questionBlock.innerHTML = `
            <label>${item.question}</label>
            ${inputHtml}
        `;
        
        // Append the whole block to the form container on the page
        questionsContainer.appendChild(questionBlock);
    });
}

// Event listener that handles what happens when the user clicks "Submit Answers"
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading on form submit
    
    let score = 0;
    const totalQuestions = quizData.length;

    // Loop through each question to check the user's answers against the correct ones
    quizData.forEach(item => {
        let userSubstitute = "";

        if (item.type === 'radio') {
            // Find which radio button the user actually clicked
            const selected = document.querySelector(`input[name="${item.id}"]:checked`);
            userSubstitute = selected ? selected.value : "";
        } else {
            // Grab the text the user typed in
            userSubstitute = document.getElementById(item.id).value.trim();
        }

        // Compare the answers, ignoring case differences (e.g., "Park" vs "park")
        if (userSubstitute.toLowerCase() === item.correctAnswer.toLowerCase()) {
            score++; // Increase score if correct
        }
    });

    // Hide the form visually
    form.style.display = 'none';
    
    // Inject the final score into the result message div and display it
    resultMessage.innerHTML = `
        <h2>Aww, you got ${score}/${totalQuestions}! 🎉</h2>
        <p>But even if you got 0, I will still love you regardless lol.</p>
        <a href="./index.html?finished=true" class="nav-link">Back to the Reasons</a>
    `;
    resultMessage.style.display = 'block';
});

// Execute the build function as soon as the file loads so the questions appear on screen
buildQuiz();