var React = require("react"),
    bootstrap = require("bootstrap"),
    TodoStore = require("../stores/todo_store");

var DoneButton = React.createClass({
  handleDone: function (e) {
    e.preventDefault();

    TodoStore.toggleDone(this.props.id);
  },

  render: function () {
    var buttonText = (this.props.done ? "Undo" : "Done");

    return (
      <button className="btn btn-success"
              onClick={ this.handleDone }>
        { buttonText }
      </button>
    );
  }
});

module.exports = DoneButton;
