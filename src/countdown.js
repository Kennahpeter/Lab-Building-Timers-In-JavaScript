/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 *
 * @param {number} startTime - Number of seconds to count down from (non-negative integer).
 * @param {number} interval - Milliseconds between each tick (positive number).
 * @returns {*} The interval timer ID.
 */
function countdownTimer(startTime, interval) {
  if (!Number.isInteger(startTime) || startTime < 0) {
    throw new TypeError('startTime must be a non-negative integer');
  }
  if (typeof interval !== 'number' || !Number.isFinite(interval) || interval <= 0) {
    throw new TypeError('interval must be a positive number');
  }

  // Initialize the remaining time
  let remainingTime = startTime;

  // Set up a timer using setInterval
  const timerId = setInterval(() => {
    // Stop the timer when time reaches 0
    if (remainingTime <= 0) {
      clearInterval(timerId);
      return;
    }

    // Log the remaining time and decrement it
    console.log(remainingTime);
    remainingTime -= 1;

    if (remainingTime === 0) {
      clearInterval(timerId);
    }
  }, interval);

  // Return the timer ID for validation
  return timerId;
}

module.exports = { countdownTimer };
