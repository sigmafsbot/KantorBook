function AnimatingMenu() { // state
  Menu.apply(this, arguments);
}

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.STATE_ANIMATING = 2; 

AnimatingMenu.prototype.open = function() {
  var self = this;

  this._state = this.STATE_ANIMATING; 

  this._timer = setTimeout(function() { Menu.prototype.open.call(self) }, 1000); // можно также через bind this._timer = setTimeout(Menu.prototype.open.bind(this), 1000);
}

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timer);                     
  Menu.prototype.close.apply(this);           // без apply(this) будет потеря контекста
}

AnimatingMenu.prototype._stateAsString = function() {

  switch (this._state) {
    case this.STATE_ANIMATING:
      return 'анимация';

    default:
      return Menu.prototype._stateAsString.call(this);
  }
};