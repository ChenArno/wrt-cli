#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')
const pj = require('./getPackJson')
const ora = require('ora')
const InputJs = require('./input')
const fs = require('fs')
const handlebars = require("handlebars")
const symbols = require("log-symbols")
const chalk = require("chalk")

program.version(pj.version, '-v, --version')

const inputjs = new InputJs()
program.command('init <name>').description('初始化项目模板').action(name => {
  if (fs.existsSync(name)) {
    // 错误提示项目已存在，避免覆盖原有项目
    console.log(symbols.error, chalk.red("项目已存在"));
    return;
  }
  inputjs.jiexi().then(answers => {
    console.log(answers)
    const url = 'https://github.com:ChenArno/webpack-react#master'
    // 根据模板名下载对应的模板到本地并起名projectName
    const spinner = ora('正在下载模板...')
    spinner.start()
    download(url, name, {
      clone: true
    }, (err) => {
      if (!err) {
        spinner.succeed()
        const fileName = `${name}/package.json`
        if (fs.existsSync(fileName)) {
          const content = fs.readFileSync(fileName).toString()
          const result = handlebars.compile(content)(answers)
          fs.writeFileSync(fileName, result)
        }
        console.log(symbols.success, chalk.green("项目初始化完成"));
      } else {
        spinner.fail()
        console.log(symbols.error, chalk.red(`拉取远程仓库失败${err}`))
      }
    })
  })
})

// 解析命令行
program.parse(process.argv);