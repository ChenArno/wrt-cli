#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const InputJs = require('./input')
const fs = require('fs')
const handlebars = require("handlebars")
const symbols = require("log-symbols")
const chalk = require("chalk")

program.version('1.0.4', '-v, --version')

const inputjs = new InputJs()
program.command('init <name>').description('初始化项目模板').action((templateNane, projectNane) => {
  console.log(templateNane)
  if (fs.existsSync(templateNane)) {
    // 错误提示项目已存在，避免覆盖原有项目
    console.log(symbols.error, chalk.red("项目已存在"));
    return;
  }
  inputjs.jiexi().then(answers => {
    const url = 'https://github.com:ChenArno/webpack-react#master'
    // 根据模板名下载对应的模板到本地并起名projectName
    const spinner = ora('正在下载模板...')
    spinner.start()
    download(url, templateNane, {
      clone: true
    }, (err) => {
      if (err) {
        spinner.fail()
        console.log(symbols.error, chalk.red(`拉取远程仓库失败${err}`))
        return false
      }
      spinner.succeed('下载模板成功')
      const fileName = `${templateNane}/package.json`
      if (fs.existsSync(fileName)) {
        const content = fs.readFileSync(fileName, 'utf8')
        const result = handlebars.compile(content)(answers)
        fs.writeFileSync(fileName, result)
      }
    })
  })
})

program.command('list').description('查看所以可用的模板').action(() => {
  console.log('模板的列表')
  console.log('wrt-cli')
})

// 解析命令行
program.parse(process.argv);