function flatten5(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten5(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

function flatten6(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten5([1, 2, 3, [
  [4, 5],
  [6, [7]]
]]))

console.log(flatten6([1, 2, 3, [
  [4, 5],
  [6, [7]]
]]))