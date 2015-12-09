var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    TodoListItem = require("./todo_list_item"),
    TodoForm = require("./todo_form");

var TodoList = React.createClass({
  getInitialState: function (){
    return { list: TodoStore.all() };
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.todoChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangedHandler(this.todoChanged);
  },

  todoListItems: function () {
    return this.state.list.map(function (todo) {
      return (
        <TodoListItem key={ todo.id } item={ todo } />
      );
    });
  },

  todoChanged: function () {
    this.setState({ list: TodoStore.all() });
  },

  render: function () {
    return (
      <div>
        { this.todoListItems() }

        <hr></hr>

        <TodoForm />
      </div>
    );
  }

});

module.exports = TodoList;
