// ЭТОТ КОД ДЛЯ СОВМЕСТИМОСТИ БРАУЗЕРОВ БЕЗ ПОДДЕРЖКИ Object.create() метода

// function extend(Child, Parent) {
//   Child.prototype = inherit(Parent.prototype);
//   Child.prototype.constructor = Child;
//   Child.parent = Parent.prototype; 
// }

// function inherit(proto) {
//   function F() {}
//   F.prototype = proto;
//   return new F;
// }
//////////////////////////////////////////////////////////////////////////////

function ExtendedClock(options) {
  Clock.apply(this, arguments)
  this._precision = +options.precision || 1000;
}

ExtendedClock.prototype = Object.create(Clock.prototype);

ExtendedClock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
      self._render();
    }, this._precision); 
  }