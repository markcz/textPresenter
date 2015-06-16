// Filename: main.js

require.config({
    shim: {

    },
    paths: {
        jquery: "../lib/jquery/dist/jquery",
        "jquery-mockjax": "../lib/jquery-mockjax/jquery.mockjax",
        requirejs: "../lib/requirejs/require",
        textillate: "../lib/textillate/jquery.textillate",

        // todo: define transient ref.
        lettering: "../lib/letteringjs/jquery.lettering"
    },
    packages: [

    ]
});

require([
  'jquery',
  // Load our app module and pass it to our definition function
  'textPresenter',
], function ($,tp) {
    // The "tp" dependency is passed in as "App"
    function show(el) {
        tp.show(el);
    }

    console.log('inside');

    $(function () { show($('h1')); } );
});
