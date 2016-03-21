// Load in our dependencies
var assert = require('assert');
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
  var buttonStyle = window.getComputedStyle(buttonEl);

  // Verify the button has no offsets
  assert.strictEqual(buttonBounds.top, 0);
  assert.strictEqual(buttonBounds.left, 0);

  // TODO: Get computed style with font
  // TODO: Extract text and image bounds for better SVG generation
  retInfo = {
    button: _.extend({},
      // Basic bounds info
      _.pick(buttonBounds, 'width', 'height'),

      // Computed bounds info
      {
        innerWidth: buttonBounds.width - 1,
        innerHeight: buttonBounds.height - 1,
      },

      // Style info
      _.pick(buttonStyle, 'fontFamily', 'fontSize', 'fontWeight'),

      // Override fontSize with a custom one
      {
        fontSize: '14px'
      },

      // Manual style info
      {
        // TODO: Automate parsing
        // -moz-linear-gradient(50% 0%, rgb(138, 221, 109), rgb(96, 176, 68))
        background: {
          startPosition: '50%',
          stopPosition: '0%',
          startColor: 'rgb(138, 221, 109)',
          stopColor: 'rgb(96, 176, 68)'
        }
      },

      // TODO: Relocate text to another key
      {
        text: buttonEl.textContent.trim()
      }
    )
  };

  // Send back our extracted info
  ipcRenderer.send('html-info', retInfo);
});
