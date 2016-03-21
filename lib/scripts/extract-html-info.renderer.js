// Load in our dependencies
var assert = require('assert');
var fs = require('fs');
var ipcRenderer = require('electron').ipcRenderer;
var _ = require('underscore');

// Load our SVG directly so we can look at its properties
var svgContents = fs.readFileSync(__dirname + '/../logo.svg', 'utf8');
var svgParser = new window.DOMParser();
var svgDoc = svgParser.parseFromString(svgContents, 'image/svg+xml');

// When the page and all its images load
window.addEventListener('load', function handleLoad () {
  // Find our elements
  var buttonEl = document.getElementById('button');
  var logoEl = document.getElementById('button__logo');
  var textEl = document.getElementById('button__text');
  var retInfo = {};

  // Extract detailed information from HTML
  // http://youmightnotneedjquery.com/#offset
  // bounds = {top, right, bottom, left, height, width}
  var buttonBounds = buttonEl.getBoundingClientRect();
  var buttonStyle = window.getComputedStyle(buttonEl);
  var logoBounds = logoEl.getBoundingClientRect();
  var textBounds = textEl.getBoundingClientRect();

  // Extract detailed info from SVG
  var svgWidth = parseInt(svgDoc.childNodes[0].getAttribute('width'), 10);
  var svgHeight = parseInt(svgDoc.childNodes[0].getAttribute('height'), 10);

  // Verify the button has no offsets
  assert.strictEqual(buttonBounds.top, 0);
  assert.strictEqual(buttonBounds.left, 0);

  var customFontSize = 14;
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
        fontSize: customFontSize + 'px'
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
      }
    ),
    logo: _.extend({},
      // Logo SVG content
      // e.g. `<path d="1234">`
      {
        content: svgDoc.childNodes[0].innerHTML.trim()
      },

      // All bounding info
      _.clone(logoBounds),

      // Computed scaled bounds
      {
        svgHeight: svgHeight,
        svgWidth: svgWidth,
        ratio: logoBounds.height / svgHeight
      }
    ),
    text: _.extend({},
      // All bounding info
      _.clone(textBounds),

      // Computed bounds info
      // DEV: SVGs use the text baseline as their "y" (e.g. try y="0")
      {
        baselineTop: customFontSize + textBounds.top
      },

      // Extra info
      {
        content: textEl.textContent.trim()
      }
    )
  };

  // Send back our extracted info
  ipcRenderer.send('html-info', retInfo);
});
