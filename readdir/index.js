var fs = require('fs')
var path = require('path')

var getFilesInDir = function (dir) {
  var results = [path.resolve(dir)]; // 先打印出当前目录
  var files = fs.readdirSync(dir, 'utf-8')  // readdirSync只遍历一层，所以如果子文件还是文件夹的话，还需要在遍历一次，不是的话直接打印出来
  
  files.forEach(function (file) {
    file = path.resolve(dir, file)
    var stats = fs.statSync(file)

    if (stats.isFile()) {
      results.push(file)
    } else if (stats.isDirectory()) {
      results.push(results.concat(getFilesInDir(file)))
    }
  })
  return results;
}

let results = getFilesInDir('./')
console.log(results)