var React = require("react"),
    bootstrap = require("bootstrap"),
    StepStore = require('../stores/step_store');

var StepForm = React.createClass({
  getInitialState: function () {
    return { body: "" };
  },

  updateBody: function (e) {
    this.setState({ body: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var data = { body: this.state.body };

    StepStore.create(this.props.todoId, data);
    this.setState({ body: "" });
  },

  render: function () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <input type="text"
                 value={ this.state.body }
                 onChange={ this.updateBody }
                 placeholder="Step body"
                 className="form-control"/>
        </div>

        <input type="submit" />
      </form>
    );
  }
});

module.exports = StepForm;
