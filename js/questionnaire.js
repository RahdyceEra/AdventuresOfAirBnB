
const quizData = [
    {
        id: "q1",
        question: "1. Where did we go on our first date?",
        type: "text",
        correctAnswer: "Park", 
        placeholder: "Your answer here..."
    },
    {
        id: "q2",
        question: "2. Who said 'I love you' first?",
        type: "radio",
        options: ["Me", "You"],
        correctAnswer: "You" 
    },
    {
        id: "q3",
        question: "3. What is my favorite thing about you?",
        type: "textarea",
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

// 2. Logic to display the questions
const questionsContainer = document.getElementById('quiz-questions');
const form = document.getElementById('quiz-form');
const resultMessage = document.getElementById('result-message');

function buildQuiz() {
    quizData.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';

        let inputHtml = '';

        if (item.type === 'text') {
            inputHtml = `<input type="text" id="${item.id}" required placeholder="${item.placeholder}">`;
        } 
        else if (item.type === 'textarea') {
            inputHtml = `<textarea id="${item.id}" rows="3" required placeholder="${item.placeholder}"></textarea>`;
        } 
        else if (item.type === 'radio') {
            inputHtml = `<div class="radio-group">`;
            item.options.forEach(option => {
                // Unique ID for each radio button to avoid conflicts
                const optionId = `${item.id}-${option.replace(/\s+/g, '')}`; 
                inputHtml += `
                    <input type="radio" id="${optionId}" name="${item.id}" value="${option}" required>
                    <label for="${optionId}" class="radio-label">${option}</label>
                `;
            });
            inputHtml += `</div>`;
        }

        questionBlock.innerHTML = `
            <label>${item.question}</label>
            ${inputHtml}
        `;
        questionsContainer.appendChild(questionBlock);
    });
}

// 3. Handle Submit
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    const totalQuestions = quizData.length;

    quizData.forEach(item => {
        let userSubstitute = "";

        if (item.type === 'radio') {
            // Find the selected radio button for this question name
            const selected = document.querySelector(`input[name="${item.id}"]:checked`);
            userSubstitute = selected ? selected.value : "";
        } else {
            // Get value from text or textarea
            userSubstitute = document.getElementById(item.id).value.trim();
        }

        // Compare answer (ignoring capital letters for text inputs)
        if (userSubstitute.toLowerCase() === item.correctAnswer.toLowerCase()) {
            score++;
        }
    });

    // Update the result message with the score
    form.style.display = 'none';
    resultMessage.innerHTML = `
        <h2>Aww, you got ${score}/${totalQuestions}! 🎉</h2>
        <p>But even if you got 0, I will still love you regardless lol.</p>
        <a href="./index.html?finished=true" class="nav-link">Back to the Reasons</a>
    `;
    resultMessage.style.display = 'block';
});

// Run the function to show questions when the page loads
buildQuiz();
