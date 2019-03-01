var async = require('async')

// async.mapSeries(arr, iterator, callback)
// arr是一个数组，不能是一个json对象。
// 作用的将arr中的每一项依次拿给iterator去执行，执行结果传给最后的callback

async.mapSeries([1,2,3,4,5], function (item, callback) {
    callback(null, item + 1)
}, function (err, results) {
    console.log(results)
})