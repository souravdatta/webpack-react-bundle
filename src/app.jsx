var React = require('react');
var ReactDOM = require('react-dom');
var DateInfo = require('./dateinfo');

setInterval(function () {
  ReactDOM.render(<DateInfo/>,
                  document.getElementById('app'));
}, 1000);

