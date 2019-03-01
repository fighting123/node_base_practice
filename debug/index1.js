var cat = 'miao'
var dog = 'wang'
var logger = function (msg) {
  console.log(msg)
  console.log('这行会跳过'); // 跳过这行
}
var str = cat + '&&' + dog
logger(str)