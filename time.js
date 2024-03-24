//initalize variables
let initialTime;
let endTime;
let answerTime;
let answerRemainingTime;
let answerTimerId;

// Start game timer
function startGameTimer(durationInSeconds) {
    initialTime = Date.now();
    setTimeout(function() {
        endGame();
    }, durationInSeconds * 1000);
}

// Start the timer for answering a question
function startAnswerTimer(durationInSeconds) {
    answerRemainingTime = durationInSeconds;
    updateTimerDisplay();
    answerTimerId = setTimeout(function() {
        handleTimeout();
    }, durationInSeconds * 1000);
}

// Reset timer for correct answer
function stopAnswerTimer() {
    clearTimeout(answerTimerId);
}

// Stop the game timer
function endGameTimer() {
    endTime = Date.now();
}

// Calculate the total time spent
function elapsedTime() {
    let elapsedTimeMill = endTime - initialTime;
    let elapsedTimeS = elapsedTimeMill / 1000;
    let elapsedTimeM = elapsedTimeS / 60;
    return {
        minutes: Math.floor(elapsedTimeM),
        seconds: Math.floor(elapsedTimeS % 60)
    };
}

// Update timer display
function updateTimerDisplay() {
    console.log("Time remaining:", answerRemainingTime, "seconds");
}

// When the user runs out of time
function handleTimeout() {
    console.log("No more time!");
}

// End the game
function endGame() {
    console.log("Game over.");
    endGameTimer();
    let elapsedTime = elapsedTime();
    console.log("Elapsed Time:", elapsedTime.minutes + " minutes and " + elapsedTime.seconds + " seconds");
}

// Example usage:
startGameTimer(60); // Start game timer with a duration of 60 seconds
startAnswerTimer(30); // Start the timer for answering a question with a duration of 30 seconds

// Simulate user answering the question in 25 seconds
setTimeout(function() {
    stopAnswerTimer(); // Stop the timer if the user answered the question before the timeout
    console.log("Answered in time!");
}, 25000); // Simulate user answering the question in 25 seconds
