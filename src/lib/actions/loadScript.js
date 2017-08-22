'use strict';

module.exports = function(settings) {

  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        var consentButton = document.getElementById('consentBanner');
        consentButton.style.display = 'block';
    }
}, 10);

// (function (id, cid, cb) {
//     var d = document
//         , s = d.createElement('script')
//         , ts = d.getElementsByTagName('script')[0];
//     s.type = 'text/javascript';
//     s.async = true;
//     s.setAttribute('data-ev-noticeid', id);
//     s.setAttribute('data-ev-coid', cid);
//     s.setAttribute('data-ev-consent-callback', cb);
//     s.setAttribute('data-ev-consent-type', 'cn');
//     s.src = '//c.betrad.com/pub/gdprnotice.js';
//     ts.parentNode.insertBefore(s, ts);
// })(settings.noticeId, settings.companyId, 'g_consentGiven');

};
