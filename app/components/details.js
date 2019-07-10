import React,{Component} from 'react'
import {Image,View,Text,Button,ScrollView} from 'react-native'
export default class DetailComponent extends Component{
  constructor(){
    super()
    this.state={lid:0,imgList:[],title:'',subTitle:'',picIndex:0,timer:null}
  }
  componentDidMount(){
    var lid=this.props.navigation.getParam('lid')
    this.setState({lid})
    fetch(`http://192.168.1.62:8080/product/detail?lid=${lid}`)
    .then((response)=>response.json())
    .then((result)=>{
      console.log(result)
      this.setState({
        imgList:result.details.picList,
        title:result.details.title,
        subTitle:result.details.subtitle
      })
      // 启动一个定时器，每个一秒钟来修改picIndex
      var myTimer=setInterval(()=>{
        var nowIndex=this.state.picIndex
        nowIndex++
        if(nowIndex>=this.state.imgList.length){
          nowIndex=0
        }
        this.setState({picIndex:nowIndex})
      },1000)
      this.setState({timer:myTimer})
    })
  }
  componentWillMount() {
    // 此钩子函数负责清理工作
    clearInterval(this.state.timer)
  }
  render(){
    return <View style={{flex:1}}>
      <ScrollView style={{marginBottom:20}}>
        {
          this.state.imgList.length>0
          &&
          <Image source={{uri:`http://192.168.1.62:8080/${this.state.imgList[this.state.picIndex].md}`}} style={{width:500,height:400,}}></Image>
        }
        <Text style={{fontSize:22,padding:5}}>{this.state.title}</Text>
        <Text style={{fontSize:20,padding:5}}>{this.state.subTitle}</Text>
      </ScrollView>
        <Button title="编辑产品" color="red"></Button>
    </View>
  }
}