var fs = require('fs');

// 读取文本文件
// 异步
fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// 同步
try {
    let data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data)
} catch(err) {
    console.log(err)
}


// 读取二进制文件
// 异步
fs.readFile('test.png', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data);
        console.log(`${data.length}bytes`)
    }
})

// 同步
try {
    let data = fs.readFileSync('test.png');
    console.log(data);
    console.log(`${data.length}bytes`)
} catch (err) {
    console.log(err)
}