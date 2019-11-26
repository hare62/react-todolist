import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      valueInput: '',
      list: []
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleChangeValueInput = this.handleChangeValueInput.bind(this);
    this.handleClickbutton = this.handleClickbutton.bind(this);
    // this.handleDelli = this.handleDelli.bind(this);  很神奇这样 绑定 在点击按钮触发得时候会调用这个函数 很不应该啊 我在想是不是 dom 元素挨太近了
  }

  render() {
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

        <ul >
          {/* 使用dangerouslySetInnerHTML属性的虚拟dom元素之间可能有内容，应该没有任何内容 */}
          {
            this.state.list.map((item, index) => {
              return <li
                key={index}
                onClick={this.handleDelli.bind(this, index)}
                dangerouslySetInnerHTML={{__html: item}}
              ></li>
            })
          }
        </ul>
      </div>

    );
  }

  handleChangeValueInput(e) {
    console.log(e.target.value)
    this.setState({
      valueInput: e.target.value
    });
  }

  handleClickbutton() {
    this.setState({
      list: [...this.state.list, this.state.valueInput],
      valueInput: ''
    })
  }

  handleDelli(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list
    })
  }


}


export default TodoList;
