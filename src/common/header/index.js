import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// dell老师说:导入actionCreators[包含了方法] 在派发action的时候直接actionCreators点什么就可以拿到
import { actionCreators } from './store';

import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	// rejest SearchInfoTitle
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';

class Header extends Component {

	getListArea() {
		// 需求 ： if input is focused with  show getListArea
		//        else inout blur with hide  getListArea
		//        the same as handleInputFocus and handleInputBlur well
		//        运用结构赋值减少冗余代码
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		// list是一个immutable对像 需要通过toJS()转变成普通对象
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			// 需要判断 有数据才渲染下面的list
			// 显示list中的数据
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				// 需要数组push的时候数据类型一定要是普通数组，而不是immutable对象
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				//  Accroding to different terms 
				//  direct return SearchInfo-Component 
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							{/*  */}
							<i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			// another return null
			return null;
		}
	}

	render() {
		//  运用结构赋值减少冗余代码
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ?
							<NavItem onClick={logout} className='right'>退出</NavItem> :
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					}
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
							&#xe614;
						</i>
						{/*according to  show and hide ruturn domConstractor */}
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
					</Link>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		// 在映射数据的时候
		// 因为加入了immutable所以需要用get这个方法去获取数据
		// focused: state.header.get('focused')
		// state是个对象 而state.header是个immutable对象 数据不统一
		// 我们想把state这个对象直接改成immutable对象，那么就需要在主store下边的reducer.js的state封装成immutable对象
		focused: state.getIn(['header', 'focused']),
		// 在显示页面需要映射到props中
		list: state.getIn(['header', 'list']),

		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		// mouseIn 代表鼠标是否移入 映射到props中
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			// InputFocus send request
			(list.size === 0) && dispatch(actionCreators.getList());
			// dell老师说:导入actionCreators[包含了方法] 在派发action的时候直接actionCreators点什么就可以拿到
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		
		handleMouseEnter() {
			// 鼠标进入 事件
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			// 鼠标移出 事件
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			// 拿到 i 的真实dom
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			console.log(spin.style.transform)
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
		// 调取登录页面的login
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
