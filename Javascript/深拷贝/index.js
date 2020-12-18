function cloneShallow(source, hash = new WeakMap()) {
  if (!isObject(source)) return source

  if (hash.has(source)) return hash.get(source)

  var target = Array.isArray(source) ? [] : {}
  hash.set(source, target)

  let symKeys = Object.getOwnPropertySymbols(source)
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (isObject(source[symKey])) {
        target[symKey] = cloneShallow(source[symKey], hash)
      } else {
        target[symKey] = source[symKey]
      }
    })
  }

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneShallow(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

var a = {
  name: 'sqshada',
  book: {
    title: 'I am sqshada',
    price: '22'
  },
  a1: undefined,
  a2: null,
  a3: 123,
  a4: [1, 2, 3, 4, [5, 6]]
}
var sym1 = Symbol('a')
var sym2 = Symbol.for('b')


a[sym1] = "localSymbol";
a[sym2] = "globalSymbol";

var b = cloneShallow(a);

console.log(b);