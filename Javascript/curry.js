function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
}

function curry(fn, length) {
  length = length || fn.length;
  let slice = Array.prototype.slice;
  return function() {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var fn0 = function(a, b, c, d) {
  return [a, b, c, d];
};

var fn1 = curry(fn0);

console.log(fn0.length);
console.log(fn1("a", "b")("c")("d"));