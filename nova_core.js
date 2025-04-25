function sendToNova() {
    const input = document.getElementById("input").value;
    localStorage.setItem("nova_last", input);
    alert("NOVA received: " + input);
}