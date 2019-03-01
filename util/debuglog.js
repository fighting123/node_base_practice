// 很有用的调试方法。可以通过 util.debuglog(name) 来创建一个调试fn，这个fn的特点是，只有在运行程序时候，声明环境变量NODE_DEBUG=name，才会打印出调试信息。
// 可以看下面的例子，直接运行 node debuglog.js，没有任何输出。需要NODE_DEBUG=foo，才会有打印信息.

var util = require('util');
var firstLogger = util.debuglog('first');
var secondLogger = util.debuglog('second');
var thirdLogger = util.debuglog('third');

firstLogger('hello');
secondLogger('hello');
thirdLogger('hello');