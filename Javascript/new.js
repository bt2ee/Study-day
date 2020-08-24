function _new() {
  let object = new Object(),
    Con = [].shift.call(arguments);
  object.__proto__ = Con.prototype;
  const ret = Con.apply(object, arguments);
  return ret instanceof Object ? ret : object
}

// 测试用例
function Car(color) {
  this.color = color;
}
Car.prototype.start = function() {
  console.log(this.color + " car start");
}

var car = _new(Car, "black");
console.log(car.color)
  // black

car.start();
// black car start