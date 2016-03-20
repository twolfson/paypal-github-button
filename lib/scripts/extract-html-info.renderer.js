// Load in our dependencies
var ipcRenderer = require('electron').ipcRenderer;
var _ = require('underscore');

// When the page loads
// http://youmightnotneedjquery.com/#ready
document.addEventListener('DOMContentLoaded', function handleDOMContentLoaded () {
  // Find our button
  var buttonEl = document.getElementById('button');
  var retInfo = {};

  // Extract detailed information
  // http://youmightnotneedjquery.com/#offset
  // bounds = {top, right, bottom, left, height, width}
  var buttonBounds = buttonEl.getBoundingClientRect();
  // TODO: Get computed style with font
  // TODO: Extract text and image bounds for better SVG generation
  retInfo = {
    button: _.extend(
      _.clone(buttonBounds)
    )
  };

  // Send back our extracted info
  ipcRenderer.send('html-info', retInfo);
});
