function Flow() {
  let data = {};
  let time = 0;
  let volume = 0;
  let initTime = 0;
  Object.defineProperty(this, "data", {
    get: function () {
      return data;
    },
    set: function (value) {
      data = value;
    },
  });
  Object.defineProperty(this, "time", {
    get: function () {
      return time;
    },
    set: function (value) {
      time = value;
    },
  });
  Object.defineProperty(this, "volume", {
    get: function () {
      return volume;
    },
    set: function (value) {
      volume = value;
    },
  });
  Object.defineProperty(this, "initTime", {
    get: function () {
      return initTime;
    },
    set: function (value) {
      initTime = value;
    },
  });
}

module.exports = Flow;
