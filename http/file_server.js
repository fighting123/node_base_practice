var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer((request, response) => {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filePath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            // 没有必要手动读取文件内容。由于response对象本身是一个Writable Stream，直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应。
            fs.createReadStream(filePath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            response.writeHead(404);
            // 发送404响应:
            response.end('404 NOT FOUND')
        }
    })
})

server.listen(8080);
console.log('Server is running at http://192.168.212.23:8080/');