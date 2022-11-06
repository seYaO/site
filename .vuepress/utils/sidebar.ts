import jstutorial from './jstutorial'
import bash from './bash'
import ssh from './ssh'
import es6tutorial from './es6tutorial'
import htmltutorial from './htmltutorial'
import webapi from './webapi'
import clang from './clang'
import csstutorial from './csstutorial'
import learntutorial from './learntutorial'


const { genSidebarConfig } = require('./index')
const guide = [
    {
        title: '博客',
        collapsable: false,
        children: ['', 'git', 'linux', 'mac']
    },
    {
        title: 'css3',
        collapsable: true,
        children: ['css3/flex', 'css3/use']
    }
]

const frontend = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09_0', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29_0', '29', '30_0', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39_0', '39', '40', '41', '42_01', '42_02', '42', '43', '44', '45', '46', '47', '48_01', '48_02', '48_end']

// tool
const tooltutorial = ['', 'git', 'linux', 'mac']


export default {
    '/docs/jstutorial/': jstutorial,
    '/docs/es6tutorial/': es6tutorial,
    '/docs/htmltutorial/': htmltutorial,
    '/docs/webapi/': webapi,
    '/docs/clang/': clang,
    '/docs/bash/': bash,
    '/docs/ssh/': ssh,
    '/docs/csstutorial/': csstutorial,
    '/docs/learntutorial/': learntutorial,



    // '/guide/': genSidebarConfig(guide),
    // '/relearnFrontEnd/': genSidebarConfig([{ title: '重学前端', children: frontend }]),
    // '/tooltutorial/': genSidebarConfig([{ title: 'tool工具', children: tooltutorial }]),
}