var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  },

  addChangedHandler: function (callback) {
    _callbacks.push(callback);
  },

  removeChangedHandler: function (callback) {
    var idx = _callbacks.indexOf(callback);

    if (idx !== -1) {
      _callbacks.splice(idx, 1);
    }
  },

  all: function () {
    return _todos.slice();
  },

  fetch: function () {
    $.get("/api/todos/", {}, function (todos) {
      _todos = todos;
      TodoStore.changed();
    });
  },

  create: function (data) {
    $.post("/api/todos/", { todo: data }, function (todo) {
      _todos.push(todo);
      TodoStore.changed();
    });
  },

  destroy: function (id) {
    var todoIndex = TodoStore.find(id);

    if (todoIndex !== -1) {
      $.ajax({
        url: "/api/todos/" + id,
        type: "DELETE",
        success: function () {
          _todos.splice(todoIndex, 1);
          TodoStore.changed();
        }
      });
    }
  },

  find: function (id) {
    return _todos.findIndex(function (todo) {
      if (todo.id === id) { return true; }
    });
  },

  toggleDone: function (id) {
    var todoIndex = TodoStore.find(id);
    var data = {};
    var updatedStatus;

    if (todoIndex !== -1) {
      updatedStatus = !(_todos[todoIndex].done);
      data = { todo: { done: updatedStatus } };

      $.ajax({
        url: "/api/todos/" + id,
        type: "PATCH",
        data: data,
        success: function () {
          _todos[todoIndex].done = updatedStatus;
          TodoStore.changed();
        }
      });
    }
  }
};

module.exports = TodoStore;
