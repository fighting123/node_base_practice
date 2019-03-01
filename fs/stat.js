var fs = require('fs');
// 属性不是驼峰，全部小写，方法为驼峰
fs.stat('test.txt', function (err, stat) {
    if (err) {
        console.log(err)
    } else {
        // 是否是文件
        console.log(`isFile: ${stat.isFile()}`)
        // 是否是目录
        console.log(`isDirectory: ${stat.isDirectory()}`);
        if (stat.isFile) {
            // 文件大小
            console.log(`size: ${stat.size}`)
            // 创建时间（Date对象）
            console.log(`birthTime: ${stat.birthtime}`);
            // 修改时间（Date对象）
            console.log(`modifyTime: ${stat.mtime}`)
        }
    }
})