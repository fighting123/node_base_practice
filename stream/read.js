var fs = require('fs');
// 打开一个流
var rs = fs.createReadStream('readTest.txt', 'utf-8');

// data事件表示流的数据已经可以读取了
// data事件可能会有多次，每次传递的chunk是流的一部分数据
rs.on('data', (chunk) => {
    console.log('Date:')
    console.log(chunk);
})

// end事件表示这个流已经到末尾了，没有数据可以读取了
rs.on('end', () => {
    console.log('END')
})

// error事件表示出错了
rs.on('error', (err) => {
    console.log('Error:')
    console.log(err)
})