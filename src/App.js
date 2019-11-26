import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem'
import './index.css'
class TodoList extends React.Component {
  constructor(props) {
    // 当组件的status 和props 发生改变，那么render 就会发生改变
    super(props);
    this.state = {
      isToggleOn: true,
      valueInput: '',
      list: []
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleChangeValueInput = this.handleChangeValueInput.bind(this);
    this.handleClickbutton = this.handleClickbutton.bind(this);
    this.handleDelli = this.handleDelli.bind(this);
    //  很神奇这样 绑定 在点击按钮触发得时候会调用这个函数 很不应该啊 我在想是不是 dom 元素挨太近了
  }
  componentWillMount() {
    console.log("组件即将被挂载到页面之前自动执行")
  }

  componentDidMount() {
    console.log("组件被挂载到页面之后自动执行")
  }

  render() {
    console.log("render函数执行")
    return (
      <div>
        {/* nihao */}
        {/* class关键字被类取代了 于是class的名字就直接用的是className */}
        <label htmlFor="inputFocus">请输入内容</label>
        <input
          id="inputFocus"
          className="input"
          value={this.state.valueInput}
          onChange={this.handleChangeValueInput}

        />
        <button onClick={this.handleClickbutton}  >点击</button>

        <ul ref={(ul) => {this.ul = ul}}>
          {/* 使用dangerouslySetInnerHTML属性的虚拟dom元素之间可能有内容，应该没有任何内容 */}
          {
            this.getTodoItem()
          }
        </ul>
      </div>

    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem  key={index} item={item} index={index} deletItem={this.handleDelli}></TodoItem>
    })
  }

  handleChangeValueInput(e) {
    console.log(e.target.value)
    // react之前版本是这样写的 传入一个对像

    // this.setState({
    //   valueInput: e.target.value
    // });

    // setState函数是一个异步的方法使其性能提升  传入一个方法 方法里返回一个对象
    // 官方建议这样去写
    // 直接是返回小括号里面的语句
    const valueInput = e.target.value
    this.setState(() => ({
      valueInput,
    })


    )
  }

  handleClickbutton() {

    this.setState((prevState) => ({
      list: [...prevState.list, prevState.valueInput],
      valueInput: ''
    }),() =>{
      console.log("div长度",this.ul.querySelectorAll('div').length)
    })
  }

  handleDelli(index) {

    this.setState((prevState) => {
      const list = prevState.list;
      list.splice(index, 1);
      return {
        list
      }
    }) 
  }

}
export default TodoList;
