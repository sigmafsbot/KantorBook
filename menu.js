function Menu(state) {
  this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1; // лучше запихнуть в Menu.prototype.STATE_OPEN
Menu.STATE_CLOSED = 0; // лучше запихнуть в Menu.prototype.STATE_CLOSED

Menu.prototype.open = function() {
  this._state = Menu.STATE_OPEN;
}

Menu.prototype.close = function() {
  this._state = Menu.STATE_CLOSED;
}

Menu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.STATE_OPEN:
      return 'открыто';
      // break
    case Menu.STATE_CLOSED:
      return 'закрыто';
      //
  }
}

Menu.prototype.showState = function() {
  alert(this._stateAsString());
}