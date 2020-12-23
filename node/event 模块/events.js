function EventEmitter() {
  this._event = {};
}

EventEmitter.defaultMaxListeners = 10;

EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(
  type,
  listener,
  flag
) {
  if (!this._event) this._event = Object.create(null);
  if (this._event[type]) {
    if (flag) {
      this._event[type].unshift(listener);
    } else {
      this._event[type].push(listener);
    }
  } else {
    this._event[type] = [listener];
  }
  if (type !== "newListener") {
    this.emit("newListener", type);
  }
};

EventEmitter.prototype.emit = function(type, ...args) {
  if (this._event[type]) {
    this._event[type].forEach((fn) => fn.call(this, ...args));
  }
};

EventEmitter.prototype.once = function(type, listener) {
  let _this = this;

  function only() {
    listener();
    _this.removeListener(type, only);
  }
  only.origin = listener;
  this.on(type, only);
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener = function(
  type,
  listener
) {
  if (this._event[type]) {
    this._event[type] = this._event[type].filter(
      (fn) => fn !== listener && fn.origin !== listener
    );
  }
};

EventEmitter.prototype.prependListener = function(type, listener) {
  this.on(type, listener, true);
};

module.exports = EventEmitter;