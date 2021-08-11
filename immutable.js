class Immutable {
  modified = false;
  target = undefined;
  copy = undefined;
  constructor(target) {
    this.target = target;
  }
  get(key) {
    if (!this.modified) return this.target[key];
    return this.copy[key];
  }
  set(key, value) {
    if (!this.modified) this.handleChanged();
    return (this.copy[key] = value);
  }
  handleChanged() {
    if (!this.modified) {
      this.modified = true;
      this.copy = shallowCopy(this.target);
    }
  }
}

function shallowCopy(value) {
  if (Array.isArray(value)) return value.slice;
  if (value.__proto__ == undefined) {
    return Object.assign(Object.create(null), value);
  }
  return Object.assign({}, value);
}

const PROXY_STATE = Symbol('state')

const handler = {
  get: function(target, propKey) {
    if (propKey === PROXY_STATE) return target
    return target.get(propKey);
  },
  set: function(target, propKey, value) {
    return target.set(propKey, value);
  }
}

function produce(target, producer) {
  const store = new Immutable(target);
  const proxy = new Proxy(store, handler)
  producer(proxy)

  const newState = proxy[PROXY_STATE]

  if (newState.modified) return newState.copy;

  return newState.target
}

let target = {
  name: 'tom',
  age: 18,
  address: {
    country: 'China',
    province: 'Henan'
  },
  hobby: {
    sport: ['basketball', 'run'],
    art: ['draw']
  }
}

const result = produce(target, res => {
  res.name = 'xiaoming'
})
console.log(target, result)



// const handler = {
//   get: function(target, propKey, receiver) {
//     console.log("getting", propKey);
//     return Reflect.get(target, propKey, receiver);
//   },
//   set: function(target, propKey, value, receiver) {
//     console.log("setting", propKey);
//     value = `proxy ${value}`;
//     return Reflect.set(target, propKey, value, receiver);
//   },
// };

// const target = { name: "Tom", age: 18 };


// const proxy = new Proxy(target, handler);

// console.log(proxy.name);
// proxy.name = "xiaoming";
// console.log(proxy.name);