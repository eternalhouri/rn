import React,{Component} from 'react'
import {View,Image,TextInput,Button,StyleSheet} from 'react-native'
export default class LoginComponent extends Component{
  constructor(){
    super()
    this.state={uname:'',upwd:''}
  }
  handleUname=(msg)=>{
    this.setState({uname:msg})
  }
  handleUpwd=(msg)=>{
    this.setState({upwd:msg})
  }
  handlePress=()=>{
    var uname=this.state.uname
    var upwd=this.state.upwd
    var config={
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body:`uname=${uname}&upwd=${upwd}`
    }
    fetch("http://127.0.0.1:8080/user/login",config).then((response)=>response.json()).then((result)=>{
      console.log(result);
    })
    this.state.uname=''
    this.state.upwd=''
  }
  render(){
    return <View>
      <View style={myStyles.myFlex}>
        <Image source={require('../../assets/img/2.jpg')} style={myStyles.myPosition}></Image>
      </View>
      <TextInput placeholder="请输入用户名" onChangeText={this.handleUname}></TextInput>
      <TextInput placeholder="请输入密码" secureTextEntry={true} onChangeText={this.handleUpwd}></TextInput>
      <Button title="登录" onPress={this.handlePress}></Button>
    </View>
  }
}
const myStyles=StyleSheet.create({
  myPosition:{width:100,height:100,borderRadius:50},
  myFlex:{alignItems:'center'}
})