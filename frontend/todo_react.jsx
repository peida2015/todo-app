var React = require("react"),
    ReactDOM = require("React-dom"),
    TodoList = require("./components/todo_list");

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <TodoList />,
    document.getElementById("root")
  );
});
