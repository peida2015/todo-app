var _steps = {},
    _callbacks = [];

var StepStore = {
  changed: function () {

  },

  fetch: function (todoId) {
    $.get("/api/todo/" + todoId + "steps", {}, function (steps) {
      _steps[todoId] = steps;
      StepStore.changed();
    });
  },

  all: function (todoId) {
    return _steps[todoId];
  }
};

module.exports = StepStore;
