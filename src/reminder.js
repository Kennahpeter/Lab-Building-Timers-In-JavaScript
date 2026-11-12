/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 *
 * @param {string} message - The reminder text to log.
 * @param {number} delay - Milliseconds to wait before logging (non-negative number).
 * @returns {Promise<void>} Resolves after the message has been logged.
 */
function delayedReminder(message, delay) {
  // Return a promise
  return new Promise((resolve, reject) => {
    if (typeof message !== 'string') {
      reject(new TypeError('message must be a string'));
      return;
    }
    if (typeof delay !== 'number' || !Number.isFinite(delay) || delay < 0) {
      reject(new TypeError('delay must be a non-negative number'));
      return;
    }

    // Use setTimeout to log the message after the specified delay
    setTimeout(() => {
      console.log(message);
      // Resolve the promise once the message is logged
      resolve();
    }, delay);
  });
}

module.exports = { delayedReminder };
