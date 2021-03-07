function green() {
  console.log('green', new Date())
}

function yellow() {
  console.log('yellow', new Date())
}


function red() {
  console.log('red', new Date())
}

const light = (timer, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb()
      resolve()
    }, timer)
  })
}

const step = () => {
  Promise.resolve().then(() => {
    return light(2000, red)
  }).then(() => {
    return light(2000, yellow)
  }).then(() => {
    return light(2000, green)
  }).then(() => {
    step()
  })
}

step()