// Limit the frequency of plus signs generated
let lastTime = 0;
const throttleTime = 75; // 75ms between plus signs

document.addEventListener('mousemove', function(e) {
    const currentTime = Date.now();
    if (currentTime - lastTime > throttleTime) {
        createPlusSign(e.clientX, e.clientY);
        lastTime = currentTime;
    }
});

function createPlusSign(x, y) {
    const plusSign = document.createElement('div');
    plusSign.innerText = '+';
    plusSign.style.position = 'absolute';
    plusSign.style.left = `${x}px`;
    plusSign.style.top = `${y}px`;
    plusSign.style.fontSize = '18px'; // Initial size
    plusSign.style.fontWeight = 'bold';
    plusSign.style.color = 'rgba(255, 0, 0, 0.801)';
    plusSign.style.pointerEvents = 'none';
    plusSign.style.zIndex = '999'; // Set z-index to 999
    document.body.appendChild(plusSign);

    let gravity = 1.5; // Falling speed
    let jitter = Math.random() * 2 - 1; // Horizontal jitter (-1 to +1)
    let scale = 1; // Scale factor to shrink the element over time
    let shrinkRate = 0.01; // Rate of shrinking

    const interval = setInterval(function() {
        // Move downward with gravity
        y += gravity;
        plusSign.style.top = `${y}px`;

        // Add jitter effect (small horizontal movement)
        x += jitter;
        plusSign.style.left = `${x}px`;

        // Slowly reduce the size (scale) and shrink until it disappears
        scale -= shrinkRate;
        if (scale > 0) {
            plusSign.style.transform = `scale(${scale})`;
        }

        // Remove plus sign when it reaches the bottom or becomes too small
        if (y >= window.innerHeight || scale <= 0) {
            clearInterval(interval);
            plusSign.remove(); // Ensure proper removal
        }
    }, 50); // 50ms interval for smooth movement
}
