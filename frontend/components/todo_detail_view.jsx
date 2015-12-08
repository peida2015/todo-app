var React = require('react');

var TodoDetailView = React.createClass({
  render: function () {
    return (
      <div>
        <div>{ this.props.body }</div>
        <div>{ this.props.deleteCallback() }</div>
      </div>
    );
  }
});

module.exports = TodoDetailView;
