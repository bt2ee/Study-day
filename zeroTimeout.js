(function() {
  const timeouts = []
  const messageName = 'zero-timeout-message'

  function setZeroTimeout(fn) {
    timeouts.push(fn)
    window.postMessage(messageName, '*')
  }

  function handleMessage(event) {
    if (event.source === window && event.data === messageName) {
      event.stopPropagation()
      if (timeouts.length > 0) {
        const fn = timeouts.shift()
        fn()
      }
    }
  }
  window.addEventListener('message', handleMessage, true)

  window.setZeroTimeout = setZeroTimeout
})()

// test
function runtest() {
  var output = document.getElementById('root');
  var outputText = document.createTextNode('');
  output.appendChild(outputText);

  function printOutput(line) {
    outputText.data += line + '\n';
  }
  var i = 0;
  var startTime = Date.now();
  // 通过递归 setZeroTimeout 达到 100 计数
  // 达到 100 后切换成 setTimeout 来实验
  function test1() {
    if (++i == 100) {
      var endTime = Date.now();
      printOutput(
        '100 iterations of setZeroTimeout took ' +
        (endTime - startTime) +
        ' milliseconds.'
      );
      i = 0;
      startTime = Date.now();
      setTimeout(test2, 0);
    } else {
      setZeroTimeout(test1);
    }
  }

  setZeroTimeout(test1);

  // 通过递归 setTimeout 达到 100 计数
  function test2() {
    if (++i == 100) {
      var endTime = Date.now();
      printOutput(
        '100 iterations of setTimeout(0) took ' +
        (endTime - startTime) +
        ' milliseconds.'
      );
    } else {
      setTimeout(test2, 0);
    }
  }
}