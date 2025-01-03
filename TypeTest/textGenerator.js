// Generates random text for typing
function generateRandomText(wordCount = 50) {
    const words = [
        "the", "quick", "brown", "fox", "jumps", "over", "lazy", "dog",
        "however", "colour", "sit", "course", "all", "elite", "it", "possible", "general",
        "apple", "journey", "of", "a", "thousand", "miles", "begins", "with", "single", "step",
        "to", "be", "or", "not", "that", "is", "question", "lemonade", "balloon", 
        "mailbox", "traffic", "play", "day", "blanket", "sweater", "sidewalk", "zebra", "breakfast",
        "treasure", "travel", "tiger", "teacher", "sunshine", "dragon", "this", "why", "flower",
        "friend", "forest", "who", "where", "how", "what", "guitar", "happy", "playground", "want", 
        "then", "seem", "will", "fact", "such", "move", "give", "still", "own", "may", "world",
        "interest", "make", "very", "look", "could"
    ];
    let text = '';
    for (let i = 0; i < wordCount; i++) {
        text += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return text.trim();
}