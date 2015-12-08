var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    DoneButton = require("./done_button");

var TodoListItem = React.createClass({
  addDeleteButton: function () {
    return (
      <button className="btn btn-success"
        onClick={ this.handleDeleteClick }>Delete</button>
    );
  },

  handleDeleteClick: function (e) {
    e.preventDefault();

    var id = this.props.item.id;

    TodoStore.destroy(id);
  },

  render: function () {
    return (
      <div>
        <div>{ this.props.item.title }</div>
        <div>{ this.props.item.body }</div>
        <div>{ this.addDeleteButton() }</div>
        <DoneButton done={ this.props.item.done }
          id={ this.props.item.id }/>
      </div>
    );
  }
});

module.exports = TodoListItem;
