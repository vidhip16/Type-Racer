// Calculates the word per minute
function calculateWPM(startTime, endTime, text) {
    if (!startTime || !endTime || !text) {
        throw new Error("Invalid input: startTime, endTime, and text are required.");
    }

    const wordsTyped = text.trim().split(/\s+/).length; // Count words typed (regardless of correctness)
    const timeTaken = (endTime - startTime) / 1000 / 60; // Time in minutes

    if (timeTaken <= 0) {
        throw new Error("Invalid time: endTime must be greater than startTime.");
    }

    return Math.round(wordsTyped / timeTaken); // Calculate WPM
}



//function calculateWPM(startTime, endTime, text) {
    //const wordsTyped = text.trim().split(/\s+/).length;
    //onst timeTaken = (endTime - startTime) / 1000 / 60; // Convert milliseconds to minutes

    //return Math.round(wordsTyped / timeTaken);}