import React from 'react'
import PropTypes from 'prop-types';
class TodoItem extends React.Component {
    constructor(props) {
        // 当父组件的render函数被执行时，他的子组件render函数也被重新执行
        super(props);
        this.handleDeletItem = this.handleDeletItem.bind(this)
    }

   
    render() {
        const { item, test } =this.props
        return <div onClick={this.handleDeletItem}>{test}-{item}</div>
    }

    handleDeletItem() {
        const {deletItem, index} = this.props
        deletItem(index)
    }
}

// 强校验父级向子级传参的类型
TodoItem.propTypes = {
    test: PropTypes.string,
    item: PropTypes.string,
    index: PropTypes.number,
    deletItem: PropTypes.func
}
// 给参数默认值
TodoItem.defaultProps  = {
    test:"hello word" 
    
}

export default TodoItem;