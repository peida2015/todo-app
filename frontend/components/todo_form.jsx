var React = require("react"),
    bootstrap = require("bootstrap"),
    TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function () {
    return { title: "", body: "" };
  },

  updateTitle: function (e) {
    this.setState({ title: e.target.value });
  },

  updateBody: function (e) {
    this.setState({ body: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var data = { title: this.state.title, body: this.state.body };

    TodoStore.create(data);
    this.setState({ title: "", body: "" });
  },

  render: function () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <input type="text"
                 value={ this.state.title }
                 onChange={ this.updateTitle }
                 placeholder="Todo title"
                 className="form-control"/>
        </div>

        <div className="form-group">
          <textarea value={ this.state.body }
                    onChange={ this.updateBody }
                    placeholder="Todo body"
                    className="form-control" />
        </div>

        <input type="submit" />
      </form>
    );
  }
});

module.exports = TodoForm;
