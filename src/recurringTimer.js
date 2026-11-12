/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `interval` (in milliseconds).
 * 2. Use `setInterval` to repeatedly log the message at the specified interval.
 * 3. Return the timer ID so it can be used for stopping the timer.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 *
 * @param {string} message - The message to log on each tick.
 * @param {number} interval - Milliseconds between each log (positive number).
 * @returns {*} The interval timer ID.
 */
function recurringTimer(message, interval) {
  if (typeof message !== 'string') {
    throw new TypeError('message must be a string');
  }
  if (typeof interval !== 'number' || !Number.isFinite(interval) || interval <= 0) {
    throw new TypeError('interval must be a positive number');
  }

  // Set up a timer using setInterval to log the message
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  // Return the timer ID
  return timerId;
}

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * Steps:
 * 1. Accept the timer ID as a parameter.
 * 2. Use `clearInterval` to stop the recurring timer.
 *
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 *
 * @param {*} timerId - The ID returned by recurringTimer.
 */
function stopRecurringTimer(timerId) {
  if (timerId === undefined || timerId === null) {
    throw new TypeError('A valid timerId is required to stop the timer');
  }

  // Stop the timer using clearInterval
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };
