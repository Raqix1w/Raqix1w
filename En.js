// Get the element with the ID "lastTrade"
const element = document.querySelector("div#page_content > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > span:nth-child(1)");

// Use the initial value of lastTrade as initval
const initval = parseFloat(element.textContent.replace(/[^0-9.-]+/g,""));

// Define the animation parameters
const targetValue = 70000.00; // Target value with two decimal places
const duration = 1000 * 30 * 60; // 30 minutes in milliseconds

// Calculate the animation step
const step = (targetValue - initval) / duration;

// Define a function to update the element's content over time
function updateLastTrade(timestamp) {
  const elapsed = timestamp - startTime;
  if (elapsed < duration) {
    const newValue = initval + step * elapsed;
    element.textContent = newValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // Format as USD currency
    requestAnimationFrame(updateLastTrade);
  } else {
    element.textContent = targetValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // Ensure the final value is set accurately
  }
}

// Get the animation start time
const startTime = performance.now();

// Start the animation
requestAnimationFrame(updateLastTrade);
