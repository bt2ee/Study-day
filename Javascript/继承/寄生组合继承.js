// 父类
function Parent(name) {
  this.colors = ["red", "blue", "green"];
  this.name = name; // 父类属性
}
Parent.prototype.sayName = function() { // 父类原型方法
  return this.name;
};

// 子类
function Child(name, subName) {
  // 调用 Parent 构造函数
  Parent.call(this, name); // ----第二次调用 Parent，继承实例属性----
  this.subName = subName;
};

// ----第一次调用 Parent，继承原型属性----
Child.prototype = Object.create(Parent.prototype)

Child.prototype.constructor = Child; // 注意：增强对象

let instance = new Child('An', 'sisterAn')