'use strict';

module.exports = function(settings, trigger) {
  document.addEventListener('click', function(event) {
    if(event.srcElement.id == 'consentButton'){
      trigger();
    }
  });
};