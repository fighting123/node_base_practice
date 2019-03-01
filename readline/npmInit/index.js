const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
})
// 打印提示
const preHint = `
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`;

console.log(preHint);
// 问题
let questions = ['name', 'version', 'author']
// 默认答案
let defaultAnswers = ['name', '1.0.0', 'none']
// 用户答案
let answers = []
// 问题顺序
let index = 0

function createPackageJson() {
  let map = {}
  questions.forEach((item, index) => {
    map[item] = answers[index]
  })
  // 创建package.json
  fs.writeFileSync('./package.json', JSON.stringify(map, null, 4))
}

function runQuestionLoop() {

  // 问题循环完了关闭提问，并创建package.json函数
  if (index === questions.length) {
    createPackageJson()
    rl.close()
    return
  }

  let defaultAnswer = defaultAnswers[index]
  let question = questions[index] + ':(' + defaultAnswer + ')'

  rl.question(question, function (answer) {

    answers.push(answer || defaultAnswer)
    // 根据index循环每一个问题
    index++
    runQuestionLoop()

  })

}
runQuestionLoop()