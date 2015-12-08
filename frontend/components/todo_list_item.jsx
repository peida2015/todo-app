var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoListItem = React.createClass({
  addDeleteButton: function () {
    return (
      <button onClick={ this.handleDeleteClick }>Delete</button>
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
      </div>
    );
  }
});

module.exports = TodoListItem;
