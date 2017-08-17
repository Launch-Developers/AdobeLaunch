'use strict';

module.exports = function(settings) {
  // set cookie here
  setCookie('evidonconsent', true, 12);
  alert('Thanks for your consent. Your cookie has been set.');

  var consentBanner = document.getElementById('consentBanner');
  consentBanner.style.display = 'none';

};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}