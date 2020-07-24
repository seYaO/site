const { genSidebarConfig } = require('./index')

// css
const csstutorial = ['', 'flex', 'use']

// tool
const tooltutorial = ['', 'git', 'linux', 'mac']


module.exports = {
    '/csstutorial/': genSidebarConfig([{ title: 'css3&css', children: csstutorial }]),
    '/tooltutorial/': genSidebarConfig([{ title: 'tool工具', children: tooltutorial }]),
}