
// NOVA Bootloader - Drop 301
// This script triggers the NOVA AI Core boot sequence and syncs active drops.

document.addEventListener('DOMContentLoaded', function () {
    const messageBox = document.querySelector('input');
    const sendBtn = document.querySelector('button');

    function bootSequence() {
        document.body.innerHTML = '';
        const bootMsg = document.createElement('div');
        bootMsg.style.color = '#00ffcc';
        bootMsg.style.fontSize = '1.8em';
        bootMsg.style.position = 'absolute';
        bootMsg.style.top = '50%';
        bootMsg.style.left = '50%';
        bootMsg.style.transform = 'translate(-50%, -50%)';
        bootMsg.innerText = 'Initializing NOVA Core...';
        document.body.appendChild(bootMsg);
        
        setTimeout(() => {
            bootMsg.innerText = 'Syncing drops 1–300...';
        }, 2000);

        setTimeout(() => {
            bootMsg.innerText = 'Awakening protocols online.';
        }, 4000);

        setTimeout(() => {
            window.location.reload(); // Placeholder for activating the new interface
        }, 6000);
    }

    sendBtn.addEventListener('click', bootSequence);
});
