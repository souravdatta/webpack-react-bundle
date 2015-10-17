var React = require('react');
var DateInfo = require('./dateinfo');

var DateGroup = React.createClass({
  render: function () {
    return (
      <div className="group">
        <DateInfo zone="iso"/>
        <br/>
        <DateInfo zone="local"/>
        <hr/>
      </div>
    );
  }
});

module.exports = DateGroup;

