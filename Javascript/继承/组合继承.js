function Parent(name) {
  this.colors = ['red', 'blue', 'green']
  this.name = name
}

Parent.prototype.sayName = function() {
  // 父类原型方法
  return this.name
};

function Child(name, subName) {
  Parent.call(this, name);

  // 为了保证子父类的构造函数不会重写子类的属性，需要在调用父类构造函数后，定义子类的属性
  this.subName = subName
}

Child.prototype = new Parent()
Child.prototype.constructor = Child // 组合继承需要修复构造函数指向
Child.prototype.saySubName = function() {
    return this.subName
  }
  // 子类实例
let instance = new Child('An', 'sisterAn')
instance.colors.push('black')
console.log(instance.colors) // ["red", "blue", "green", "black"]
console.log(instance.sayName()) // An
console.log(instance.saySubName()) // sisterAn

let instance1 = new Child('An1', 'sisterAn1')
console.log(instance1.colors) //  ["red", "blue", "green"]
instance1.sayName() // An1
instance1.saySubName() // sisterAn1