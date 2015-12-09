var React = require("react"),
    bootstrap = require("bootstrap");

var DoneButton = React.createClass({
  render: function () {
    var buttonText = (this.props.done ? "Undo" : "Done");

    return (
      <button className="btn btn-success"
              onClick={ this.props.handleDone }>
        { buttonText }
      </button>
    );
  }
});

module.exports = DoneButton;
