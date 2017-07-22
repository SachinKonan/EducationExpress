"use strict";

/**
 * All this stuff is moved into global namespace and separate files just to be
 * MAXIMUM clear and easy to understand
 */

var client;
window.init = function(token) {
  client = new ApiAi.ApiAiClient({accessToken: '7c5995ccebc045f6b8e7d5157be18203'});
};

function sendText(text) {
  return client.textRequest(text);
}
