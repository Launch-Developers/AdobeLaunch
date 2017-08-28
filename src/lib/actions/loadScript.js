'use strict';

module.exports = function(settings) {

    var getExtensionSettings = require('@turbine/get-extension-settings');
    var extensionSettings = getExtensionSettings();

/* Type:  Link  nid=16102 cid=242 */
var linkFrag = create('<a id="_bapw-link" href="#" target="_blank" style="text-decoration:none !important"><span style="vertical-align:middle !important">Cookie consent</span></a>');
document.body.insertBefore(linkFrag, document.body.childNodes[0]);

  (function() {
    var ev = document.createElement('script'); 
    ev.type = 'text/javascript'; 
    ev.async = true; 
    ev.setAttribute('data-ev-tag-pid', extensionSettings.noticeId); 
    ev.setAttribute('data-ev-tag-ocid', extensionSettings.companyId); 
    ev.src = '//c.betrad.com/pub/tag.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ev, s);
  })();
/* End:  Link */





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
// })(extensionSettings.noticeId, extensionSettings.companyId, 'g_consentGiven');

};

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

//var fragment = create('<div>Hello!</div><p>...</p>');
// You can use native DOM methods to insert the fragment:
//document.body.insertBefore(fragment, document.body.childNodes[0]);
