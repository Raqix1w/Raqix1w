// Get the element with the ID "lastTrade"
const element = document.getElementById('lastTrade');

// Define the animation parameters
let targetValue = 70000.000;
let initval = parseFloat(element.firstChild.nodeValue);
let duration = 1000 * 60 * 30; // Initial duration: 30 minutes in milliseconds

// Define the function to update the element's content over time
function updateLastTrade(timestamp) {
    const elapsed = timestamp - startTime;
    if (elapsed < duration) {
        const newValue = initval + step * elapsed;
        element.firstChild.nodeValue = newValue.toFixed(3); // Update the element's text content with 3 decimal places
        if (Math.abs(newValue - targetValue) > 400) {
            // If the displayed value is more than $400 off, restart the script
            initval = newValue;
            startTime = timestamp;
            requestAnimationFrame(updateLastTrade);
        } else {
            requestAnimationFrame(updateLastTrade);
        }
    } else {
        element.firstChild.nodeValue = targetValue.toFixed(3); // Ensure the final value is set accurately
    }
}

// Get the animation start time
let startTime = performance.now();

// Use the initial value of lastTrade as initval
const step = (targetValue - initval) / duration;

// Start the animation
requestAnimationFrame(updateLastTrade);
