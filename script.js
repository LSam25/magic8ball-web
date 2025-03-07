// List of unhinged responses with tone for coloring
const responses = [
    { text: "YES, YOU MAD GENIUS, DO IT NOW!", tone: "positive" },
    { text: "Eh, toss a coin, I’m too chaotic to care...", tone: "neutral" },
    { text: "NOPE, RUN FOR THE HILLS, YOU FOOL!", tone: "negative" },
    { text: "The universe is screaming—check back when I’m sane!", tone: "neutral" },
    { text: "PROBABLY, YOU GLORIOUS CHAOS LORD!", tone: "positive" },
    { text: "FORGET IT, THE STARS ARE HAVING A MELTDOWN!", tone: "negative" },
    { text: "Outlook? A WILD RIDE—GOOD LUCK!", tone: "neutral" },
    { text: "YES, BUT ONLY IF YOU DANCE FIRST!", tone: "positive" },
    { text: "ABSOLUTELY NOT, YOU’RE ON THIN ICE!", tone: "negative" },
    { text: "Maybe… or maybe I’ll explode—your call!", tone: "neutral" }
];

// Function to "shake" the ball and display an answer
function shakeBall() {
    const questionInput = document.getElementById("questionInput").value;
    const answerDiv = document.getElementById("answer");

    if (!questionInput) {
        answerDiv.innerHTML = "SPEAK UP, YOU SILLY HUMAN!";
        answerDiv.style.color = "#ffff00"; // Yellow for error
        return;
    }

    answerDiv.innerHTML = "Shaking the Magic 8-Ball like a maniac...";
    answerDiv.style.color = "#ff0000"; // Red for shaking message

    setTimeout(() => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        answerDiv.innerHTML = `Magic 8-Ball says: ${randomResponse.text}`;
        // Set color based on tone
        if (randomResponse.tone === "positive") {
            answerDiv.style.color = "#00ff00"; // Green for positive
        } else if (randomResponse.tone === "negative") {
            answerDiv.style.color = "#ff0000"; // Red for negative
        } else {
            answerDiv.style.color = "#ff00ff"; // Magenta for neutral
        }
    }, 2000);
}