var fs = require('fs');

// 写文本文件
// 异步
let data = 'writeIn'
fs.writeFile('test.txt', data, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('异步写入成功！')
    }
})
// 同步
try {
    fs.writeFileSync('test.txt', data);
    console.log('同步写入成功！')
} catch (err) {
    console.log(err)
}

// 写入二进制文件
let dataPng = '<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 37 00 00 00 33 08 02 00 00 00 bc 28 07 07 00 00 10 a2 49 44 41 54 68 05 b5 99 69 90 5c d5 75 ... > '
// 异步
fs.writeFile('writeTest.png', dataPng, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('异步写入二进制成功！')
    }
})
// 同步
try {
    fs.writeFileSync('writeTest.png', dataPng);
    console.log('同步写入二进制成功！')
} catch (err) {
    console.log(err)
}