function greet(name) {
    console.log(`hello ${name}`)
}
module.exports = greet;
// 两种写法
// module.exports = {
//   greet: greet;
// }