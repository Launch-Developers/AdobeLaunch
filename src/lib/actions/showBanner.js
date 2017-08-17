'use strict';

module.exports = function(settings) {

  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        var consentButton = document.getElementById('consentBanner');
        consentButton.style.display = 'block';
    }
}, 10);

};
