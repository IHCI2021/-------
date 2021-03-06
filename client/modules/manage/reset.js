import React from 'react';
import 'antd/dist/antd.css';
import cookie from 'react-cookies'
import axios from 'axios';
import {Button} from 'antd';
import * as BASE64 from '../endpage/constants';
import Qs from "qs"
//global.document= window.document;
//global.navigator= window.navigator;

const mainArea = {
    display: 'flex',
	position: 'relative',
	height: '400px',
	width: '760px',
	left: '50%',
	top:'50%',
	marginLeft: '-380px',
   marginTop:'-100px',
    background: 'inherit',
	backgroundColor: 'rgba(255, 255, 255, 1)',
	border: 'none',
	borderRadius: '10px',
	MozBoxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
	WebkitBoxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
	boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
  };
  const LoginArea={
height:'600px',
  };
  const Buttons={
    display: 'block',
	position: 'absolute',
	top: '20px',
	width: '150px',
	height: '60px',
	lineHeight: '60px',
	textAlign: 'center',
	fontSize: '18px',
	fontWeight: 'bold',
	//font-family: "等线";
	background: 'inherit',
	//background-color: rgba(255, 255, 255, 1);
	border: 'none',
	borderRadius: '10px',
	MozBoxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
	WebkitBoxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
    textDecoration: 'blink',
    right:'200px',
    backgroundColor:'#0A6CD6',
    color: 'rgba(255, 255, 255, 0.996078431372549)'
  };
  const WhiteButtons={
    display: 'block',
	position: 'absolute',
	top: '20px',
	width: '150px',
	height: '60px',
	lineHeight: '60px',
	textAlign: 'center',
	fontSize: '18px',
	fontWeight: 'bold',
	//font-family: "等线";
	background: 'inherit',
	//background-color: rgba(255, 255, 255, 1);
	border: 'none',
	borderRadius: '10px',
	MozBoxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
	WebkitBoxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.247058823529412)',
    textDecoration: 'blink',
    left:'200px',
    backgroundcolor: 'rgba(255, 255, 255, 1)',
    color: 'rgba(66, 147, 244, 0.996078431372549)'
  };
  const loginTest={
    display: 'block',
	position: 'absolute',
	top: '27px',
	width: '730px',
	textAlign: 'center',
	//left: '255px',
	fontSize: '32px',
	fontWeight: 'bolder',
	//font-family: "等线";
	color: '#006e9d',
};
const keyinArea={
    display: 'flex',
	position: 'absolute',
	bottom: '130px',
	width: '770px',
	height: '230px',


};
const userBox={
    display: 'flex',
	position: 'absolute',
	top: '130px',
	left: '210px',
	width: '448px',
	height: '48px',
	border: '2px solid #008DCB',
	borderRadius: '15px',
};
const passBox={
    display: 'flex',
	position: 'absolute',
	top: '65px',
	left: '210px',
	width: '448px',
	height: '48px',
	border: '2px solid #008DCB',
	borderRadius: '15px',
};
const userArea={
    display: 'flex',
	position: 'absolute',
	top: '74px',
	left: '220px',
	width: '420px',
	height: '30px',
	fontSize: '18px',
	outline: 'none',
	borderColor: 'transparent',
	backgroundColor: 'transparent',
};
const pwdArea={
    display: 'flex',
	position: 'absolute',
	top: '140px',
	left: '220px',
	width: '420px',
	height: '30px',
	fontSize: '18px',
	outline: 'none',
	borderColor: 'transparent',
	backgroundColor: 'transparent',
};
const Tips={
    display: 'flex',
	position: 'absolute',
	bottom: '15px',
	left: '260px',
	color: '#b5b5b5',
};
const btnArea={
    display: 'flex',
	position: 'absolute',
	bottom: '0px',
	//background-color: #006699;
	height: '130px',
	width: '770px',
	textAlign: 'center',
};
const a={
    textDecoration: 'blink',
    left:'320px',
    backgroundColor:'#0A6CD6',
    color: 'rgba(255, 255, 255, 0.996078431372549)',
};
const userName={
    display: 'flex',
	position: 'absolute',
	top: '78px',
	fontSize: '22px',
	right: '585px',
	color: '#008DCB',
	fontWeight: '900',
	//font-family: "等线";
};
const passName={
    display: 'flex',
	position: 'absolute',
	top: '143px',
	fontSize: '22px',
	right: '585px',
	color: '#008DCB',
	fontWeight: '900',
	//font-family: "等线";
};
const nameArea={
    display: 'block',
	position: 'absolute',
	top: '0px',
	left: '20px',
	height: '78.5px',
	width: '730px',
	borderBottom: '1.5px solid #006e9d',

};
const topLine={
	position: 'relative',
	height: '60px',
	boxShadow: '0 1px 10px 0 #8c6939',
};
const logo={
  height: '70%',
    left: '1%',
    top: '15%',
    position: 'absolute',
};
const Title={
	position: 'absolute',
	display: 'block',
	top: '10px',
	left: '63px',
	fontSize: '30px',
  //font-family: "黑体";
  cursor: 'pointer',
	fontWeight: '900',
	textDecoration: 'blink',
	color: '#08639C',
};
const negavation={
	display: 'flex',
	top: '18px',
	right: '20px',
	//font-family: "黑体";
	fontSize: '900',
	width: '800px',
	height: '50px',
	//text-align: right;
};
const modify={
	top:'10px',
	border:'none',
	position: 'absolute',
	display: 'flex',
	right: '100px',
	cursor: 'pointer',
	color: '#08639C',
	fontSize: '30px',
	zIndex: '999',
};
const loginTop={
	top:'10px',
	position: 'absolute',
	display: 'flex',
	right: '20px',
	color: '#08639C',
	cursor: 'pointer',
	fontSize: '30px',
	zIndex: '999',
};
const rootUser={
	top:'10px',
	position: 'absolute',
	display: 'flex',
	right: '260px',
	color: '#08639C',
	cursor: 'pointer',
	fontSize: '30px',
	zIndex: '999',
};


class Reset extends React.Component {
	constructor(props) {
		super(props);
	this.state={
		username:this.props.routeParams.username,
		newpwd:'',
		confirmpwd:'',
	};
}
componentDidMount(){
	if(typeof window != "undefined"&&localStorage.getItem("token")==""){
		alert("请先登录")
	  this.props.router.push('/login');
	}
  }
//页头按钮
toindex(){
	//window.location.href = 'http://10.147.15.189:8000/index'
	this.props.router.push('/index');
}
  touserManage(){
	//window.location.href = 'http://10.147.15.189:8000/manage/user_manage'
	this.props.router.push('/manage/user_manage');
  }
  toUpdatePassword(){
	//window.location.href = 'http://10.147.15.189:8000/update_password'
	this.props.router.push('/update_password');
  }

  logout(){
	  //let usertoken=cookie.load('token');
    let usertoken = ""
    if (typeof window != "undefined") {
      usertoken = localStorage.getItem("token")
    }
	  let data = {}
	  axios({
		method:'get',
		url:"http://10.147.15.189:8000/api/user/logout",
		data:data,
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
		  'Authorization': usertoken
		},
	  }).then(res=>{
		if(res.status==200){
			alert(res.data.msg)
			//cookie.save("username","")
			//cookie.save("token","")
			localStorage.setItem('token', "");
      localStorage.setItem('username', "");
			//window.location.href = 'http://10.147.15.189:8000/login'
			this.props.router.push('/login');
		}
	  })
  }

  back(){
	//window.location.href = 'http://10.147.15.189:8000/manage/user_manage'
	this.props.router.push('/manage/user_manage');
  }

getnewpwd(e){
	this.setState({ newpwd: e.target.value});
  }
  getconfirmpwd(e){
	this.setState({confirmpwd: e.target.value});
  }

     formSubmit(){
		if(this.state.newpwd==''||this.state.confirmpwd==''){
			alert('请输入重置密码和确认密码')
			return
        }
        if(this.state.newpwd!==this.state.confirmpwd){
          alert('重置密码和确认密码必须一致！');
          return
	  }
	  //let usertoken=cookie.load('token');
       let usertoken = ""
       if (typeof window != "undefined") {
         usertoken = localStorage.getItem("token")
       }
		let data={
			username:this.state.username,
			password:this.state.newpwd
		}

		axios({
			method:'post',
			url:"http://10.147.15.189:8000/api/user/update_password_by_root",
			data:data,
			transformRequest: [function (data) {
			  // 对 data 进行任意转换处理
			  return Qs.stringify(data)
			}],
			headers: {
			  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			  'Authorization': usertoken
			},
			}).then(res=>{
			  if(res.status==200){
			  alert(res.data.msg)
			  this.props.router.push('/manage/user_manage');
			  }
			}
			)
			.catch(err=>{
				if(err.response.status==401){
					alert(err.response.data.msg)
					//cookie.save("username","")
					  //cookie.save("token","")
					  localStorage.setItem('token', "");
   					  localStorage.setItem('username', "");
					  //window.location.href = 'http://10.147.15.189:8000/login'
					  this.props.router.push('/login');
				}
				if(err.response.status==403)
					alert(err.response.data.msg)
				if(err.response.status==500)
					alert('找不到用户或服务器出错')
				})
}

	  render() {
		return (
            <div>
                <div style={topLine}>
				<img src={BASE64.BASE64_COL.img1} style={logo}></img>
			<div style={Title}
			onClick={() => this.toindex()}>事项管理</div>
			<div style={negavation}>

					<div style={modify}
					onClick={() => this.toUpdatePassword()}>修改密码</div>

				<div style={loginTop}
				onClick={() => this.logout()}>退出</div>

        {typeof window!=="undefined"?(localStorage.getItem("username")=='root'?(
          <div  onClick={() => this.touserManage()}
                style={rootUser}>用户管理</div> ):null): null
        }
			</div>
		</div>


			  <div style={LoginArea}>
			<div style={mainArea}>

				<div style={nameArea}>
					<div style={loginTest}>密码重置</div>
				</div>

				<div style={keyinArea}>
					<div style={userName}>重置密码:</div>

				    <div style={passName} >确认密码:</div>

					<div style={userBox}></div>
					<div  style={passBox} ></div>

					<input
					onChange={this.getnewpwd.bind(this)}
					style={userArea} type="password" placeholder="请输入重置后的密码" v-model="usr"></input>
					<input
					onChange={this.getconfirmpwd.bind(this)}
					style={pwdArea} type="password" placeholder="请输入重置后的密码" v-model="pwd"></input>
				</div>

				<div style={btnArea}>
				<Button type="primary"
				 onClick={() => this.back()}
				 style={WhiteButtons}>返回</Button>
                    <Button type="primary"
					onClick={() => this.formSubmit()}
                    style={Buttons}>确认</Button>
				</div>
			</div>
		</div>
          </div>
		);
	  }
	}
	export default Reset;
