// Get the element with the ID "lastTrade"
const element = document.getElementById('lastTrade');

// Use the initial value of lastTrade as initval
const initval = parseFloat(element.textContent);

// Define the animation parameters
const targetValue = 45000.000;
const duration = 0; // 30 minutes in milliseconds

// Calculate the animation step
const step = (targetValue - initval) / duration;

// Define a function to update the element's content over time
function updateLastTrade(timestamp) {
  const elapsed = timestamp - startTime;
  if (elapsed < duration) {
    const newValue = initval + step * elapsed;
    element.textContent = newValue.toFixed(3); // Update the element's text content with 3 decimal places
    requestAnimationFrame(updateLastTrade);
  } else {
    element.textContent = targetValue.toFixed(3); // Ensure the final value is set accurately
  }
}

// Get the animation start time
const startTime = performance.now();

// Start the animation
requestAnimationFrame(updateLastTrade);
