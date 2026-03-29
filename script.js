const result = document.getElementById('result');
const enterButton = document.getElementById('enterButton');
const mysteryImage = document.getElementById('mysteryImage');
const guessInput = document.getElementById('guessInput');
const guessesLeft = document.getElementById('guessCount');
const celebrityAnswer = document.getElementById('celebrityAnswer');
let answer = "Taylor Swift"
let guessCounter = 0 
let blurAmount = 10

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        enterButton.click();
    }
});

enterButton.onclick = function()
{
    let userInput = document.getElementById('guessInput').value;
    if(userInput.toLowerCase() != answer.toLowerCase())
    {
        guessInput.value = "";
    }
    if (userInput.toLowerCase() === answer.toLowerCase())
    {
        result.textContent = 'You guessed it!';
        guessCounter++;
    }
    else
    {
        blurAmount -= 3.5;
        mysteryImage.style.filter = "blur(" + blurAmount + "px)";
        guessCounter++
    }
    guessesLeft.textContent = "Guesses left: " + (3 - guessCounter);
    if (guessCounter === 3 && userInput.toLowerCase() !== answer.toLowerCase())
    {
        result.textContent = 'Out of guesses!';
        celebrityAnswer.textContent = 'The answer is: ' + answer;
    }

    if (guessCounter === 3 || userInput.toLowerCase() === answer.toLowerCase())
    {
        mysteryImage.style.filter = "   blur(0px)";
        guessInput.disabled = true;
        enterButton.disabled = true;

    }
}
