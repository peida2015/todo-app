var _steps = {},
    _callbacks = [];

var StepStore = {
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

  all: function (todoId) {
    if (!_steps[todoId]) {
      _steps[todoId] = [];
    }

    return _steps[todoId].slice();
  },

  find: function (todoId, stepId) {
    return _steps[todoId].findIndex(function (step) {
      if (step.id === stepId) { return true; }
    });
  },

  fetch: function (todoId) {
    $.get("/api/todos/" + todoId + "/steps", {}, function (steps) {
      _steps[todoId] = steps;
      StepStore.changed();
    });
  },

  create: function (todoId, data) {
    var url = "/api/todos/" + todoId + "/steps";

    $.post(url, { step: data }, function (step) {
      _steps[todoId].push(step);
      StepStore.changed();
    });
  },

  destroy: function (todoId, stepId) {
    var stepIndex = StepStore.find(todoId, stepId);

    if (stepIndex !== -1) {
      $.ajax({
        url: "/api/steps/" + stepId,
        type: "DELETE",
        success: function () {
          _steps[todoId].splice(stepIndex, 1);
          StepStore.changed();
        }
      });
    }
  },

  toggleDone: function (todoId, stepId) {
    var stepIndex = StepStore.find(todoId, stepId),
        data = {},
        updatedStatus;

    if (stepIndex !== -1) {
      updatedStatus = !(_steps[todoId][stepIndex].done);
      data = { step: { done: updatedStatus } };

      $.ajax({
        url: "/api/steps/" + stepId,
        type: "PATCH",
        data: data,
        success: function () {
          _steps[todoId][stepIndex].done = updatedStatus;
          StepStore.changed();
        }
      });
    }
  }
};

module.exports = StepStore;
