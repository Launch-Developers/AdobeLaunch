'use strict';

module.exports = function(settings, trigger) {
    window.addEventListener('DOMContentLoaded', fire, false);

    function fire()
    {
        trigger();
    }
};