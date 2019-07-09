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
    var config={
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body:`uname=${this.state.uname}&upwd=${this.state.upwd}`
    }
    fetch("http://192.168.1.62:8080/user/login",config).then((response)=>response.json()).then((result)=>{
      console.log(result);
      if(result.code==200){
        this.props.navigation.push('main')
      }else{
        this.setState({uname:'',upwd:''})
        alert('登录失败!')
      }
    })
  }
  render(){
    return <View>
      <View style={myStyles.myFlex}>
        <Image source={require('../../assets/img/2.jpg')} style={myStyles.myPosition}></Image>
      </View>
      <TextInput placeholder="请输入用户名" onChangeText={this.handleUname} value={this.state.uname}></TextInput>
      <TextInput placeholder="请输入密码" secureTextEntry={true} onChangeText={this.handleUpwd} value={this.state.upwd}></TextInput>
      <Button title="登录" onPress={this.handlePress}></Button>
    </View>
  }
}
const myStyles=StyleSheet.create({
  myPosition:{width:100,height:100,borderRadius:50},
  myFlex:{alignItems:'center'}
})