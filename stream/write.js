var fs = require('fs');

var ws1 = fs.createWriteStream('writeTest1.txt', 'utf-8');
// data事件可能会有多次，每次传递的chunk是流的一部分数据
ws1.write('写入流...\n');
ws1.write('写入完毕');
ws1.end();

// 二进制文件
var ws2 = fs.createWriteStream('writeTest2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('end', 'utf-8'));
ws2.end();
