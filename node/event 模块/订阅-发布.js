let officeAccounts = {
  subscribes: {
    any: [],
  },
  // 添加订阅号
  subscribe: function(type = "any", fn) {
    if (!this.subscribes[type]) {
      this.subscribes[type] = [];
    }
    this.subscribes[type].push(fn);
  },
  // 移除订阅号
  unSubscribe: function(type = "any", fn) {
    this.subscribes[type] = this.subscribes[type].filter((item) => item !== fn);
  },
  // 发布订阅
  publish: function(type = "any", ...args) {
    this.subscribes[type].forEach((fn) => fn(...args));
  },
};

let xiaoming = {
  readArticle: function(info) {
    console.log("小明收到的", info);
  },
};

let xiaochen = {
  readArticle: function(info) {
    console.log("小陈收到的", info);
  },
};

officeAccounts.subscribe("订阅", xiaoming.readArticle);
officeAccounts.subscribe("订阅", xiaochen.readArticle);
officeAccounts.subscribe("二次订阅", xiaoming.readArticle);
officeAccounts.subscribe("预订阅", xiaoming.readArticle);
officeAccounts.unSubscribe("预订阅", xiaoming.readArticle);

officeAccounts.publish("订阅", "订阅的Node文章");
officeAccounts.publish("二次订阅", "二次订阅的文章");
officeAccounts.publish("预订阅", "预订阅的文章");