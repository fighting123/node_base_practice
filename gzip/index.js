var fs  = require('fs')
var zlib = require('zlib')

// var gzip = zlib.createGzip()

// var inFile = fs.createReadStream('./aaa.txt')
// var outFile = fs.createWriteStream('./ccc.txt.gz')

// inFile.pipe(gzip).pipe(outFile)  // 压缩

var gunzip = zlib.createGunzip()

var inFile = fs.createReadStream('./bbb.txt.gz')
var outFile = fs.createWriteStream('./d.txt')

inFile.pipe(gunzip).pipe(outFile)  // 解压

fs.access('./aaa.txt', function (err) {
  if (err) {
    console.log(err)
  }
  console.log('aaa.txt文件已存在！')
})