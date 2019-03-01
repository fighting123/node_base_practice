//windows系统下的命令;
var spawn = require('child_process').spawn,
  free  = spawn('cat', ['a.txt'],{cwd:'./a'});

// 捕获标准输出并将其打印到控制台
free.stdout.on('data', function (data) {
  console.log('标准输出：' + data);
});

// 捕获标准错误输出并将其打印到控制台
free.stderr.on('data', function (data) {
  console.log('标准错误输出：' + data);
});

// 注册子进程关闭事件
free.on('exit', function (code, signal) {
  console.log('子进程已退出，代码：' + code);
});

//同步的spawn;
var spawn = require('child_process').spawnSync('cat',['a.txt']);
// console.log(spawn.stdout.toString());