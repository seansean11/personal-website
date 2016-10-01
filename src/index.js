require('./index.html');

var Elm = require('./app/App.elm');
var mountNode = document.getElementById('app');
var app = Elm.App.embed(mountNode);
