// Filename: app.js
define([
  'textillate',
  'lettering'
  
], function (txt) {
    var show = function (el) {
        el.textillate();
    }

    return {
        show: show
    };
});
