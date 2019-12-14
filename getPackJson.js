/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-13 16:11:00
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-13 16:11:15
 */
const fs = require('fs')

function getPackageJson() {
  const _packjson = fs.readFileSync('./package.json')
  return JSON.parse(_packjson)
}
const cbPackage = getPackageJson()

module.exports = cbPackage