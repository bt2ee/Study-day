class EventEmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }

  }
  off(name, fn) {
    this.cache[name] = this.cache[name].filter((item) => item !== fn);
  }
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      const tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn(...args)
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

let eventBus = new EventEmitter()
let fn1 = function(name, age) {
  console.log(`${name} ${age}`)
}
let fn2 = function(name, age) {
  console.log(`hello, ${name} ${age}`)
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, '布兰', 12)
eventBus.off('aaa', fn2)
eventBus.emit('aaa', false, '布兰', 12)