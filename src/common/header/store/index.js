import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export { reducer, actionCreators, constants };
// index作为公共出口文件 防止路劲太长 将同级文件reducer, actionCreators, constants 都导出