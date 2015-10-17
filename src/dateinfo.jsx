var React = require('react');

var DateInfo = React.createClass({
  getInitialState: function () {
    return {
      dateNow: new Date()
    };
  },
  render: function () {
    var now = this.state.dateNow;
    var zoneType = this.props.zone;
    if (zoneType) {
      if (zoneType === 'iso')
        now = now.toISOString();
      else if (zoneType === 'local')
        now = now.toLocaleString();
    }
    return (
      <div>
        <p>{now}</p>
      </div>
    );
  },

  componentDidMount: function () {
    var that = this;
    setInterval(function () {
      var now = new Date();
      that.setState({dateNow: now}); 
    }, 1000);
  }
});

module.exports = DateInfo;

