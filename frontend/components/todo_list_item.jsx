var React = require('react'),
    bootstrap = require("bootstrap"),
    DoneButton = require("./done_button"),
    TodoDetailView = require("./todo_detail_view");

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
        </div>

        { this.state.detailed ? this.showDetail() : "" }

        <DoneButton done={ this.props.item.done }
                    id={ this.props.item.id }/>

      </div>
    );
  }
});

module.exports = TodoListItem;
