var async =  require('async')

// async.waterfall(tasks, [callback]);
// task是函数组成的数组，callback是中途出错或者全部执行完后的回调函数。
// 它的特点是串行执行函数，并且前一个函数的结果会传给下一个函数

async.waterfall([
    function (callback) {
        console.log('one' + 'two')
        callback(null, 'one', 'two')
    },
    function (arg1, arg2, callback) {
        console.log(arg1 + arg2)
        callback(null, 'three')
    },
    function (arg1, callback) {
        console.log(arg1)
        callback(null, 'done')
    }
    ], function (err, result) {
        console.log(result)
    }
)