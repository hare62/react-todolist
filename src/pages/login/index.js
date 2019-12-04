import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
// 重定向路由
import { connect } from 'react-redux';
// store and dispatch connect
import { LoginWrapper, LoginBox, Input, Button } from './style';
// UI-styled
import { actionCreators } from './store';

// PureComponent 组件一定要加immutable


class Login extends PureComponent {
	// UI 组件作为类
	render() {
		// 需求：账号和密码数据 传给后台

		// 解构赋值 减少冗余代码
		const { loginStatus } = this.props;
		if (!loginStatus) {
			// 将登录状态保存在login 中的store中
			return (
				<LoginWrapper>
					<LoginBox>
                         {/* UI组件 */}
						 {/* 这边要传参数，于是直接放在this下的  */}
						 {/* innerRef直接获取到真实dom */}
						<Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
						{/* 获取 input 框中的数据绑定事件 */}
						<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			// 
			return <Redirect to='/'/>
		}
	}
}
// 将store中的 login 数据映射到props中
const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	// 获取 input 框中的数据
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);