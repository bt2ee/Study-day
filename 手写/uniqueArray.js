function unique5(arr) {
  var res = arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
  return res
}

function unique6(arr) {
  return [...new Set(arr)]
}


console.log(unique5([1, 2, 3, 4, 1, 2]))
console.log(unique6([1, 2, 3, 4, 1, 2]))