const cssnext = require('postcss-cssnext')
const rucksack = require('rucksack-css')
const sugarss = require('sugarss')
const lost = require('lost')
const svg = require('postcss-inline-svg')

module.exports = {
  postcss: {
    plugins: [cssnext, rucksack, lost, svg],
    parser: sugarss
  },
  babel: { presets: ['es2015', 'stage-2'] },
  locals: { investments: require('./investments.json') },
  ignore: ['**/layout.jade', '**/_*', '**/.*', '**/investments.json']
}
