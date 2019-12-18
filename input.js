/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-13 16:22:04
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-18 13:28:19
 */
const inquirer = require('inquirer')

class InputJs {
  constructor(name) {
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: '请输入项目名称',
    //   validate: function (val) {
    //     if (val === '') {
    //       return '项目名称不能为空'
    //     }
    //     return true
    //   }
    // }, 
    this.name = name;
    this.lists = [{
      type: 'input',
      name: 'name',
      message: '请输入项目名称',
      default: name,
      validate: (val) => {
        return /[a-z_-]/.test(val)
      }
    }, {
      type: 'input',
      name: 'version',
      message: '请输入版本',
      default: '1.0.0'
    }, {
      type: 'input',
      name: 'description',
      message: '请输入描述'
    }, {
      type: 'input',
      name: 'author',
      message: '请输入作者名称'
    }, {
      type: 'list',
      message: '请选择管理器',
      name: 'devle',
      choices: ['yarn', 'npm', 'cnpm']
    }, {
      type: 'checkbox',
      message: '选择需要的插件',
      name: 'pulgin',
      choices: [
        'react-router-dom'
      ],
      // pageSize: 2 // 设置行数
    }];
  }

  jiexi() {
    return inquirer.prompt(this.lists)
  }
}

module.exports = InputJs