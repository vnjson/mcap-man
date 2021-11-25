// ./src/plugins.js
// Подключаем плагин к движку. В конце строк с ключевым словом import 
// добавьте путь к своему новому плагину
import zimIntroCopy from './plugins/zim-intro-copy/index.js'

// И чуть ниже регестрируем плагин. Что бы движок узнал о нём
this.use( zimIntroCopy )