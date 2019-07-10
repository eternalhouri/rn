import React,{Component} from 'react'
import {Text,Image,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
export default class LoginComponent extends Component{
  constructor(){
    super()
    this.state={list:[],nowPage:1,pageCount:0}
  }
  componentDidMount(){
    fetch("http://192.168.1.62:8080/product/list").then((response)=>response.json())
    .then((result)=>{
      console.log(result);
      // 遍历result.data数组，给每一个对象添加一个key的属性
      for(var i=0;i<result.data.length;i++){
        result.data[i].key=i
      }
      this.setState({list:result.data,pageCount:result.pageCount})
    })
  }
  showMore=()=>{
    // 得到要请求的页码，发请求
    var pno=this.state.nowPage;
    pno++
    // 执行一个边界值的判断
    if(pno>this.state.pageCount){
      return
    }
    fetch(`http://192.168.1.62:8080/product/list?pno=${pno}`)
    .then((response)=>response.json())
    .then((result)=>{
      // 处理请求后的数据，拼接concat
      console.log(result)
      this.setState({nowPage:pno})
      var oldList=this.state.list;
      var newList=oldList.concat(result.data)
      for(var i=0;i<newList.length;i++){
        newList[i].key=i
      }
      this.setState({list:newList})
    })
  }
  handleItem=(info)=>{
    return <TouchableOpacity style={[myStyles.myHeight,myStyles.myFlex]} onPress={()=>{this.show(info.item.sold_count,info.item.lid)}}>
      <Image source={{uri:`http://192.168.1.62:8080/${info.item.pic}`}} style={myStyles.myImg}></Image>
      <Text style={myStyles.myBorder}>{info.item.title}</Text>
    </TouchableOpacity>
  }
  show=(count,lid)=>{
    alert(`当前商品已售${count}`)
    this.props.navigation.push('detail',{lid})

  }
  render(){
    return <FlatList data={this.state.list} renderItem={this.handleItem} onEndReached={this.showMore}></FlatList>
  
  }
}

const myStyles=StyleSheet.create({
  myBorder:{borderColor:'#eee',borderTopWidth:3},
  myHeight:{height:130},
  myImg:{width:60,height:60,justifyContent:'center',borderRadius:50},
  myFlex:{flexDirection:'row',marginTop:10}
})