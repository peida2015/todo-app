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

  getTitles: function () {
    var titleList = this.state.list.map(function (todo) {
      return (<li key={ todo.id }>{ todo.title }</li>);
    });
    return titleList;
  },

  todoChanged: function () {
    this.setState({ list: TodoStore.all() });
  },

  render: function () {
    var items = this.state.list.map(function (todo) {
      return (<TodoListItem key={ todo.id } item={ todo } />);
    });

    return (
      <div>
        { items }

        <hr></hr>

        <TodoForm />
      </div>
    );
  }

});

module.exports = TodoList;
