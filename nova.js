
function sendMessage() {
    const input = document.getElementById("user-input").value;
    const display = document.getElementById("chat-display");
    const message = document.createElement("p");
    message.textContent = "You: " + input;
    display.appendChild(message);
    document.getElementById("user-input").value = "";

    const response = document.createElement("p");
    response.textContent = "NOVA: Processing...";
    display.appendChild(response);
}
