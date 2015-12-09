var React = require('react'),
    bootstrap = require("bootstrap"),
    DoneButton = require("./done_button"),
    TodoDetailView = require("./todo_detail_view"),
    TodoStore = require("../stores/todo_store");

var TodoListItem = React.createClass({
  getInitialState: function () {
    return { detailed: false };
  },

  showDetail: function () {
    return (
      <TodoDetailView body={ this.props.item.body }
                      id={ this.props.item.id }/>
    );
  },

  handleDone: function (e) {
    e.preventDefault();

    TodoStore.toggleDone(this.props.item.id);
  },

  handleDetailClick: function (e) {
    this.setState({ detailed: !this.state.detailed });
  },

  render: function () {
    return (
      <div>

        <div>
          <a href="#"
             onClick={ this.handleDetailClick }>
            { this.props.item.title }
          </a>
          <DoneButton done={ this.props.item.done }
                      handleDone={ this.handleDone }
                      style="display: inline"/>
        </div>

        { this.state.detailed ? this.showDetail() : "" }

      </div>
    );
  }
});

module.exports = TodoListItem;
