const inquirer = require('inquirer')

const tempLists = [{
	type: 'list',
	message: '请选择模板地址',
	name: 'name',
	choices: [
		'https://github.com:ChenArno/webpack-react#master',
		'https://github.com:ChenArno/create-react#master'
	]
}]

module.exports = inquirer.prompt(tempLists)