var cheerio = require('cheerio')
var http = require('http')
var iconv = require('iconv-lite')

// var url = 'http://www.ygdy8.net/html/gndy/dyzz/index.html'
var url = 'http://www.ygdy8.net/html/gndy/dyzz/list_23_';
var index = 1  // 当前页数
var titles = []
function getTitles(url, i) {
    console.log("正在获取第" + i + "页的内容");
    http.get(url + i + '.html', (res) => {
        var chunks = []
        res.on('data', (chunk) => {
            chunks.push(chunk)
        })
        res.on('end', () => {
            var html = iconv.decode(Buffer.concat(chunks), 'gb2312')
            var $ = cheerio.load(html, {decodeEntities: false})
            $('.co_content8 .ulink').each((index, element) => {
                var $element = $(element);
                titles.push({
                  title: $element.text()
                })
            })
            if (i < 2) {   // 节省时间只爬两页
                getTitles(url, ++i)  // 递归执行，页数+1
            } else {
                console.log(titles);
                console.log("Title获取完毕！");
            }
        })
    })
}
function main() {
    console.log("开始爬取");
    getTitles(url, index);
}

main(); //运行主函数

// http.get(url, function (res) {
//     var chunks = []
//     res.on('data', function (chunk) {
//         chunks.push(chunk)
//     })
//     res.on('end', function () {
//         var titles = []
//         var html = iconv.decode(Buffer.concat(chunks), 'gb2312')   // 解决中文乱码，也可以用bufferhelper代替
//         var $ = cheerio.load(html, {decodeEntities: false})
//         $('.co_content8 .ulink').each((index, element) => {
//             var $element = $(element)
//             titles.push({
//                 title: $element.text()
//             })
//         })
//         console.error(titles)
//     })
// })