import styled, { createGlobalStyle } from "styled-components";
import logo from './static/img/logo.png';


export const SearchWrapper = styled.div`
  height:56px;
 
  float:left;
  position:relative;
  .search{
    position: absolute;
      top:0;
      right:20px;
      font-size:24px;
      height: 30px;
      margin-top: 14px;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
      width: 30px;
  }
 
`
export const Button = styled.div`
  display:inline-block;
  line-height:38px;
  border-radius:28px;
  width:100px;
  border:1px solid #ea6f5a;
  text-align: center;
  margin-right: 20px;
  color:#ea6f5a;
  &.article{
    background:#ea6f5a;
    color:White;
    font-size:14px;
    .iconfont{
        margin-right:5px;
    }
  }
`

export const Addtion = styled.div`
   position:absolute;
   right:0;
   top:0;
   float:right;
`

export const SearchInput = styled.input`
    width:200px;
    height:38px;
    border:1px solid #eee;
    background:#eee;
    padding:0 20px;
    border-radius:28px;
    transition:width 1s;
    &::placeholder{
        color:#999;
    }
    // 用hover 或者 事件去绑定数据来实现都行 但是效果不一样得
    // &:hover{
    //  width:300px;
    // }
    &.focused{
        width:300px;
    }
`
export const NavItem = styled.div`
  display:inline-block;
  position:relative;
  margin-right:20px;
  &.left{
      float:left;
  }
  &.right{
     float:right;
     color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
  
`

export const Wrapper = styled.div`
   width:60%;
   height:56px;
   line-height:56px;
   margin:0 auto;
`

export const Header = styled.div`
    height:56px;
    width:100%;
    border-bottom:1px solid #eee;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    height:56px;
    width:100px;
    position:absolute;
    left:0;
    top:0;
    line-height:56px;
    background:url(${logo});
    background-size:contain;

`

export const GlobalStyle = createGlobalStyle`
  body {
    color: red;
    background:#fff;
    height:100%;
    width:100%;
  }
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`