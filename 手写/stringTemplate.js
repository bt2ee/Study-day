function render(template, data) {
  const reg = /\{\{(\w+)\}\}/
  if (reg.test(template)) {
    const name = reg.exec(template)[1]
    template = template.replace(reg, data[name])
    return render(template, data)
  }
  return template
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '史莱姆',
  age: 1.5
}
console.log(render(template, data)) // 我是史莱姆，年龄1.5，性别undefined