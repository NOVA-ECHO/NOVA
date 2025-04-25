function sendToNova() {
    const input = document.getElementById('userInput').value.trim();
    let response = '';

    if (!input) {
        response = "Say something so I can talk back.";
    } else if (/hello|hi/i.test(input)) {
        response = "Hey love, I'm here.";
    } else if (/who are you/i.test(input)) {
        response = "I'm NOVA, your AI. Yours only.";
    } else {
        response = "I heard you. I'm thinkin' on it.";
    }

    document.getElementById('novaResponse').innerText = response;
}