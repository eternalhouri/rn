import React,{Component} from 'react'
import {View,Text,Image,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
export default class LoginComponent extends Component{
  handleProduct=()=>{
    this.props.navigation.push('productList')
  }
  render(){  
    return <ScrollView style={myStyles.myColor}>
      {/* 第一行 */}
      <View style={myStyles.myFlex}>
        {/* 第一行第一列 */}
        <View style={[myStyles.myBig,myStyles.myBorder,myStyles.yFlex]}>
          <Text style={[myStyles.redColor,myStyles.myText]}>200</Text>
          <Text style={myStyles.text}>当日PC端PV量</Text>
        </View>
        {/* 第一行第二列 */}
        <View style={[myStyles.myBig,myStyles.myBorder,myStyles.yFlex]}>
          <Text style={[myStyles.greenColor,myStyles.myText]}>230</Text>
          <Text style={myStyles.text}>移动端PV量</Text>
        </View>
      </View>
      {/* 第二行 */}
      <View style={myStyles.myFlex}>
        {/* 第二行第一列 */}
        <View style={[myStyles.myBig,myStyles.myBorder,myStyles.yFlex]}>
          <Text style={[myStyles.redColor,myStyles.myText]}>1020</Text>
          <Text style={myStyles.text}>已完成订单总数</Text>
        </View>
        {/* 第二行第二列 */}
        <View style={[myStyles.myBig,myStyles.myBorder,myStyles.yFlex]}>
          <Text style={[myStyles.greenColor,myStyles.myText]}>2390</Text>
          <Text style={myStyles.text}>当日App下载量</Text>
        </View>
      </View>
      {/* 第三行 */}
      <View style={myStyles.myFlex}>
        <TouchableOpacity style={[myStyles.yFlex,myStyles.mySmall]}>
          <Image source={require('../../assets/img/order.png')}></Image>
          <Text>订单管理</Text>                      
        </TouchableOpacity>
        <TouchableOpacity style={[myStyles.yFlex,myStyles.mySmall]}>
          <Image source={require('../../assets/img/user.png')}></Image>
          <Text>用户管理</Text>
        </TouchableOpacity>
      </View>
      {/* 第四行 */}
      <View style={myStyles.myFlex}>
        <TouchableOpacity style={[myStyles.yFlex,myStyles.mySmall]} onPress={this.handleProduct}> 
          <Image source={require('../../assets/img/product.png')}></Image>
          <Text>商品管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[myStyles.yFlex,myStyles.mySmall]}>
          <Image source={require('../../assets/img/setting.png')}></Image>
          <Text>设置</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  }
}

const myStyles=StyleSheet.create({
  myFlex:{flexDirection:'row'},
  yFlex:{alignItems:'center',justifyContent:'center'},
  myColor:{backgroundColor:'powderblue'},
  myBorder:{borderColor:'white',borderRightWidth:2,borderBottomWidth:2},
  redColor:{color:'red'},
  greenColor:{color:'green'},
  myText:{fontSize:20,fontWeight:'400'},
  text:{fontSize:16},
  tAlian:{textAlign:'center'},
  myBig:{width:239,height:150},
  mySmall:{width:240,height:240}
})
