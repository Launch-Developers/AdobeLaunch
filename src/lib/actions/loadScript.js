'use strict';

module.exports = function(settings) {

    var extensionSettings = turbine.getExtensionSettings();

    switch(extensionSettings.type) {
        case 'in-page': // link
            (function() {
                var ev = document.createElement('script'); 
                ev.type = 'text/javascript'; 
                ev.async = true; 
                ev.setAttribute('data-ev-tag-pid', extensionSettings.noticeId); 
                ev.setAttribute('data-ev-tag-ocid', extensionSettings.companyId);
                ev.setAttribute('data-ev-consent-expires', extensionSettings.cookieExpiration + 'm');
                ev.src = '//c.betrad.com/pub/tag.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ev, s);
            })();
            break;
        case 'hover': // persistent
            (function (id, cid, cb) {
                var d = document
                    , s = d.createElement('script')
                    , ts = d.getElementsByTagName('script')[0];
                s.type = 'text/javascript';
                s.async = true;
                s.setAttribute('data-ev-noticeid', id);
                s.setAttribute('data-ev-coid', cid);
                s.setAttribute('data-ev-consent-callback', cb);
                s.setAttribute('data-ev-consent-type', 'cn');
                s.setAttribute('data-ev-consent-expires', extensionSettings.cookieExpiration + 'm');
                s.src = '//c.betrad.com/pub/gdprnotice.js';
                ts.parentNode.insertBefore(s, ts);
            })(extensionSettings.noticeId, extensionSettings.companyId, 'g_consentGiven');
            break;
        case 'explicit': // explicit
            (function (id, cid, cb) {
                var d = document
                    , s = d.createElement('script')
                    , ts = d.getElementsByTagName('script')[0];
                s.type = 'text/javascript';
                s.async = true;
                s.setAttribute('data-ev-noticeid', id);
                s.setAttribute('data-ev-coid', cid);
                s.setAttribute('data-ev-consent-expires', extensionSettings.cookieExpiration + 'm');
                s.setAttribute('data-ev-consent-callback', cb);
                s.setAttribute('data-ev-consent-type', 'cn');
                s.src = '//c.betrad.com/pub/gdprnotice.js';
                ts.parentNode.insertBefore(s, ts);
            })(extensionSettings.noticeId, extensionSettings.companyId, 'g_consentGiven');
            break;
        case 'in-page implied': // Link with Implied
        (function() {
            var ev = document.createElement('script');
            ev.type = 'text/javascript'; 
            ev.async = true; 
            ev.setAttribute('data-ev-tag-pid', extensionSettings.noticeId); 
            ev.setAttribute('data-ev-tag-ocid', extensionSettings.companyId); 
            ev.src = '//c.betrad.com/pub/tag.js';
            var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(ev, s);
            console.log('end of 1st function hit. in-page impiled');
          })();
          (function (id, cid, cb) {
            var d = document
                , s = d.createElement('script')
                , ts = d.getElementsByTagName('script')[0];
            s.type = 'text/javascript';
            s.async = true;
            s.setAttribute('data-ev-noticeid', id);
            s.setAttribute('data-ev-coid', cid);
            s.setAttribute('data-ev-consent-expires', extensionSettings.cookieExpiration + 'm');
            s.setAttribute('data-ev-consent-callback', cb);
            s.setAttribute('data-ev-consent-type', 'cn');
            s.src = '//c.betrad.com/pub/gdprnotice.js';
            ts.parentNode.insertBefore(s, ts);
            console.log('end of end function hit. in-page impiled');
        })(extensionSettings.noticeId, extensionSettings.companyId, 'g_consentGiven');
           
            break;
        case 'hover implied': // persistent with implied
        (function (id, cid, cb) {
            var d = document
                , s = d.createElement('script')
                , ts = d.getElementsByTagName('script')[0];
            s.type = 'text/javascript';
            s.async = true;
            s.setAttribute('data-ev-noticeid', id);
            s.setAttribute('data-ev-coid', cid);
            s.setAttribute('data-ev-consent-expires', extensionSettings.cookieExpiration + 'm');
            s.setAttribute('data-ev-consent-callback', cb);
            s.setAttribute('data-ev-consent-type', 'cn');
            s.src = '//c.betrad.com/pub/gdprnotice.js';
            ts.parentNode.insertBefore(s, ts);
        })(extensionSettings.noticeId, extensionSettings.companyId, 'g_consentGiven');
            break;
        default:
            //code block of nothingness
    }   
};