const inquirer = require('inquirer')

class InputJs {
  constructor() {
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
    this.lists = [{
      type: 'input',
      name: 'description',
      message: '请输入描述'
    }, {
      type: 'input',
      name: 'author',
      message: '请输入作者名称'
    }];
  }

  jiexi() {
    return inquirer.prompt(this.lists)
  }
}

module.exports = InputJs