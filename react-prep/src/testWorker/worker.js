/* eslint-disable no-restricted-globals */

self.onmessage = function (event) {
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    // Heavy computation
    result += i;
  }
  self.postMessage(result); // Send result back to main thread
};
