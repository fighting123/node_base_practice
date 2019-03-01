// 将fn包裹一层，并返回一个新的函数fn2。调用fn2时，同样完成fn原有的功能，但同时会打印出错误日志，提示方法已作废，具体的提示信息就是第二个参数str。

var util = require('util');
var foo = function(){
  console.log('foo');
};

var foo2 = util.deprecate(foo, 'foo is deprecate');

foo2();
