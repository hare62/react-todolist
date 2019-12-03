// 加个命名header 相当于命名空间，防止取重复的变量名称
// 字符串要用常量去替换掉 用字符串去写很容易出错，并且不会报错，很不容易排查出错误
// 因此又新建出一个常量文件-constants.js
// 将常量导出
export const SEARCH_FOCUS = 'header/SEARCH_FOCUS';
export const SEARCH_BLUR = 'header/SEARCH_BLUR';
// axios5.action中的type也得是常量文件
export const CHANGE_LIST ='header/CHANGE_LIST';
// 鼠标进入 action type constants
export const MOUSE_ENTER = 'header/MOUSE_ENTER';
// 鼠标移出 action type constants
export const MOUSE_LEAVE = 'header/MOUSE_LEAVE';
export const CHANGE_PAGE = 'header/CHANGE_PAGE';