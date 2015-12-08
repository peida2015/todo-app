var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    DoneButton = require("./done_button"),
    TodoDetailView = require("./todo_detail_view");

var TodoListItem = React.createClass({
  getInitialState: function () {
    return { detailed: false };
  },

  DeleteButton: function () {
    return (
      <button className="btn btn-success"
        onClick={ this.handleDeleteClick }>Delete</button>
    );
  },

  showDetail: function () {
    return (
      <TodoDetailView body={ this.props.item.body }
        deleteCallback={ this.DeleteButton } />
    );
  },

  handleDetailClick: function (e) {
    this.setState({ detailed: !this.state.detailed });
  },

  handleDeleteClick: function (e) {
    e.preventDefault();

    var id = this.props.item.id;

    TodoStore.destroy(id);
  },

  render: function () {
    return (
      <div>
        <div>
          <a href="#" onClick={ this.handleDetailClick }>
            { this.props.item.title }
          </a>
        </div>
        { this.state.detailed ? this.showDetail() : "" }
        <DoneButton done={ this.props.item.done }
          id={ this.props.item.id }/>
      </div>
    );
  }
});

module.exports = TodoListItem;
