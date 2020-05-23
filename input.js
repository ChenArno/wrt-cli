/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-13 16:22:04
 * @LastEditors: chenArno
 * @LastEditTime: 2020-05-20 10:29:35
 */
const inquirer = require('inquirer')

class InputJs {
  constructor(name) {
    this.name = name
    this.lists = [
      {
        type: 'input',
        name: 'name',
        message: '请输入项目名称',
        default: name,
        validate: val => {
          // 开头小写字母
          if (/^[a-z]+[a-z_-]/.test(val)) {
            return true
          }
          return '请注意命名规则'
        }
      },
      {
        type: 'input',
        name: 'version',
        message: '请输入版本',
        default: '1.0.0'
      },
      {
        type: 'input',
        name: 'description',
        message: '请输入描述'
      },
      {
        type: 'input',
        name: 'author',
        message: '请输入作者名称'
      },
      {
        type: 'list',
        message: '请选择模板地址',
        name: 'giturl',
        choices: [
          'https://github.com:ChenArno/webpack-react#master',
          'https://github.com:ChenArno/create-react#master'
        ]
      },
      {
        type: 'list',
        message: '请选择管理器',
        name: 'devle',
        choices: ['yarn', 'npm', 'cnpm']
      },
      {
        type: 'checkbox',
        message: '选择需要的插件',
        name: 'pulgin',
        choices: ['react-router-dom', 'react-redux redux @types/react-redux', 'axios']
        // pageSize: 2 // 设置行数
      }
    ]
  }

  jiexi() {
    return inquirer.prompt(this.lists)
  }
}

module.exports = InputJs
