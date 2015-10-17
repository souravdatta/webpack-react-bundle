var React = require('react');

var DateInfo = React.createClass({
  render: function () {
    var now = new Date();
    var nowISO = now.toISOString();
    var nowLocal = now.toLocaleString();
    return (
      <div>
        <p>ISO: {nowISO}</p>
        <p>Local: {nowLocal}</p>
      </div>
    );
  }
});

module.exports = DateInfo;

