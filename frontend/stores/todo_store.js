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
    return _todos;
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

    if (typeof todoIndex !== "undefined") {
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
    var todoIndex = _todos.findIndex(function (todo) {
      if (todo.id === id) { return true; }
    });

    if (todoIndex !== -1) { return todoIndex; }
  },

  toggleDone: function (id) {
    var todoIndex = TodoStore.find(id);
    var data = {};
    var todoDoneStatus, updatedStatus;

    if (typeof todoIndex !== "undefined") {
      todoDoneStatus = _todos[todoIndex].done;
      updatedStatus = (todoDoneStatus ? false : true);
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
