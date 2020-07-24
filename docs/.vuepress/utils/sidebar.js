const { genSidebarConfig } = require('./index')

// blog
const blogtutorial = ['']


module.exports = {
    '/blogtutorial/': genSidebarConfig([{ title: 'es6', children: blogtutorial }]),
}