module.exports = [
    {
        text: '入门篇',
        children: [
            { text: '导论', link: '/docs/jstutorial/basic/introduction' },
            { text: '历史', link: '/docs/jstutorial/basic/history' },
            { text: '基本语法', link: '/docs/jstutorial/basic/grammar' },
        ]
    },
    {
        text: '数据类型',
        children: [
            { text: '概述', link: '/docs/jstutorial/types/general' },
            { text: 'null，undefined 和布尔值', link: '/docs/jstutorial/types/null-undefined-boolean' },
            { text: '数值', link: '/docs/jstutorial/types/number' },
            { text: '字符串', link: '/docs/jstutorial/types/string' },
            { text: '对象', link: '/docs/jstutorial/types/object' },
            { text: '函数', link: '/docs/jstutorial/types/function' },
            { text: '数组', link: '/docs/jstutorial/types/array' },
        ]
    },
    {
        text: '运算符',
        children: [
            { text: '算术运算符', link: '/docs/jstutorial/operators/arithmetic' },
            { text: '比较运算符', link: '/docs/jstutorial/operators/comparison' },
            { text: '布尔运算符', link: '/docs/jstutorial/operators/boolean' },
            { text: '二进制位运算符', link: '/docs/jstutorial/operators/bit' },
            { text: '其他运算符，运算顺序', link: '/docs/jstutorial/operators/priority' },
        ]
    },
    {
        text: '语法专题',
        children: [
            { text: '数据类型的转换', link: '/docs/jstutorial/features/conversion' },
            { text: '错误处理机制', link: '/docs/jstutorial/features/error' },
            { text: '编程风格', link: '/docs/jstutorial/features/style' },
            { text: 'console 对象与控制台', link: '/docs/jstutorial/features/console' },
        ]
    },
    {
        text: '标准库',
        children: [
            { text: 'Object 对象', link: '/docs/jstutorial/types/object' },
            { text: '属性描述对象', link: '/docs/jstutorial/types/attributes' },
            { text: 'Array 对象', link: '/docs/jstutorial/types/array' },
            { text: '包装对象', link: '/docs/jstutorial/types/wrapper' },
            { text: 'Boolean 对象', link: '/docs/jstutorial/types/boolean' },
            { text: 'Number 对象', link: '/docs/jstutorial/types/number' },
            { text: 'String 对象', link: '/docs/jstutorial/types/string' },
            { text: 'Math 对象', link: '/docs/jstutorial/types/math' },
            { text: 'Date 对象', link: '/docs/jstutorial/types/date' },
            { text: 'RegExp 对象', link: '/docs/jstutorial/types/regexp' },
            { text: 'JSON 对象', link: '/docs/jstutorial/types/json' },
        ]
    },
    {
        text: '面向对象编程',
        children: [
            { text: '实例对象与 new 命令', link: '/docs/jstutorial/oop/new' },
            { text: 'this 关键字', link: '/docs/jstutorial/oop/this' },
            { text: '对象的继承', link: '/docs/jstutorial/oop/prototype' },
            { text: 'Object 对象的相关方法', link: '/docs/jstutorial/oop/object' },
            { text: '严格模式', link: '/docs/jstutorial/oop/strict' },
        ]
    },
    {
        text: '异步操作',
        children: [
            { text: '概述', link: '/docs/jstutorial/async/general' },
            { text: '定时器', link: '/docs/jstutorial/async/timer' },
            { text: 'Promise 对象', link: '/docs/jstutorial/async/promise' },
        ]
    },
    {
        text: 'DOM',
        children: [
            { text: '概述', link: '/docs/jstutorial/dom/general' },
            { text: 'Node 接口', link: '/docs/jstutorial/dom/node' },
            { text: 'NodeList 接口，HTMLCollection 接口', link: '/docs/jstutorial/dom/nodelist' },
            { text: 'ParentNode 接口，ChildNode 接口', link: '/docs/jstutorial/dom/parentnode' },
            { text: 'Document 节点', link: '/docs/jstutorial/dom/document' },
            { text: 'Element 节点', link: '/docs/jstutorial/dom/element' },
            { text: '属性的操作', link: '/docs/jstutorial/dom/attributes' },
            { text: 'Text 节点和 DocumentFragment 节点', link: '/docs/jstutorial/dom/text' },
            { text: 'CSS 操作', link: '/docs/jstutorial/dom/css' },
            { text: 'Mutation Observer API', link: '/docs/jstutorial/dom/mutationobserver' },
        ]
    },
    {
        text: '事件',
        children: [
            { text: 'EventTarget 接口', link: '/docs/jstutorial/events/eventtarget' },
            { text: '事件模型', link: '/docs/jstutorial/events/model' },
            { text: 'Event 对象', link: '/docs/jstutorial/events/event' },
            { text: '鼠标事件', link: '/docs/jstutorial/events/mouse' },
            { text: '键盘事件', link: '/docs/jstutorial/events/keyboard' },
            { text: '进度事件', link: '/docs/jstutorial/events/progress' },
            { text: '表单事件', link: '/docs/jstutorial/events/form' },
            { text: '触摸事件', link: '/docs/jstutorial/events/touch' },
            { text: '拖拉事件', link: '/docs/jstutorial/events/drag' },
            { text: '其他常见事件', link: '/docs/jstutorial/events/common' },
            { text: 'GlobalEventHandlers 接口', link: '/docs/jstutorial/events/globaleventhandlers' },
        ]
    },
    {
        text: '浏览器模型',
        children: [
            { text: '浏览器模型概述', link: '/docs/jstutorial/bom/engine' },
            { text: 'window 对象', link: '/docs/jstutorial/bom/window' },
            { text: 'Navigator 对象，Screen 对象', link: '/docs/jstutorial/bom/navigator' },
            { text: 'Cookie', link: '/docs/jstutorial/bom/cookie' },
            { text: 'XMLHttpRequest 对象', link: '/docs/jstutorial/bom/xmlhttprequest' },
            { text: '同源限制', link: '/docs/jstutorial/bom/same-origin' },
            { text: 'CORS 通信', link: '/docs/jstutorial/bom/cors' },
            { text: 'Storage 接口', link: '/docs/jstutorial/bom/storage' },
            { text: 'History 对象', link: '/docs/jstutorial/bom/history' },
            { text: 'Location 对象，URL 对象，URLSearchParams 对象', link: '/docs/jstutorial/bom/location' },
            { text: 'ArrayBuffer 对象，Blob 对象', link: '/docs/jstutorial/bom/arraybuffer' },
            { text: 'File 对象，FileList 对象，FileReader 对象', link: '/docs/jstutorial/bom/file' },
            { text: '表单，FormData 对象', link: '/docs/jstutorial/bom/form' },
            { text: 'IndexedDB API', link: '/docs/jstutorial/bom/indexeddb' },
            { text: 'Web Worker', link: '/docs/jstutorial/bom/webworker' },
        ]
    },
    {
        text: '附录：网页元素接口',
        children: [
            { text: '<a>', link: '/docs/jstutorial/elements/a' },
            { text: '<img>', link: '/docs/jstutorial/elements/image' },
            { text: '<form>', link: '/docs/jstutorial/elements/form' },
            { text: '<input>', link: '/docs/jstutorial/elements/input' },
            { text: '<button>', link: '/docs/jstutorial/elements/button' },
            { text: '<option>', link: '/docs/jstutorial/elements/option' },
            { text: '<video>，<audio>', link: '/docs/jstutorial/elements/video' },
        ]
    },
]