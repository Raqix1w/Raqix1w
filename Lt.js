// Get the element with the ID "lastTrade"
const element = document.getElementById('lastTrade');

// Use the initial value of lastTrade as initval
let initval = parseFloat(element.firstChild.data);

// Define the animation parameters
const targetValue = 70000.000;
const duration = 300 * 60 * 30; // 30 minutes in milliseconds

// Calculate the animation step
const step = (targetValue - initval) / duration;

// Define a function to update the element's content over time
function updateLastTrade(timestamp) {
  const elapsed = timestamp - startTime;
  if (elapsed < duration) {
    const newValue = initval + step * elapsed;
    element.firstChild.data = newValue.toFixed(3); // Update the element's text content with 3 decimal places
    if (Math.abs(parseFloat(element.innerHTML) - parseFloat(element.firstChild.data)) >= 400) {
      // If the difference between innerHTML and nodeValue.data exceeds 400, restart the animation
      initval = parseFloat(element.innerHTML); // Restart from innerHTML value
      startTime = timestamp;
    }
    requestAnimationFrame(updateLastTrade);
  }
}

// Get the animation start time
let startTime = performance.now();

// Start the animation
requestAnimationFrame(updateLastTrade);
