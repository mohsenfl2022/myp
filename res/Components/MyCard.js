import React from 'react';
import { TouchableOpacity,StatusBar, View,Text,Image, StyleSheet } from 'react-native';

 const MyCard=({data})=>{

    return(
        <View style={{alignItems:'center'}}> 
         <TouchableOpacity   style={{ borderRadius:10, height:100,width:'90%', 
         alignItems:'center', backgroundColor:'#fff',flexDirection:'row',
         justifyContent:'space-around' ,marginTop:20 ,}}>
      <View style={{flexDirection:'row'}}>
      <Image
    style={{width:50,height:70  }}
    source={require('../Image/images.png')}
    resizeMode={"center"}
    />
    <View style={{ height:'60%',justifyContent:'space-between' }}>
  <Text style={[styles.title ]}>{data?.name}</Text>
   <Text  style={[styles.title2 ]}>{data?.username}</Text>
    </View>
      </View>
    
    <View style={{ height:'60%',justifyContent:'space-between'
   }}>
  <Text style={[styles.title ]}>$ {data?.id}</Text>
      <Text style={[styles.title2 ]}>{data?.email}</Text>
      
    </View> 
  </TouchableOpacity>
  </View>
    )
}

export default MyCard;

const styles = StyleSheet.create({
  
    title: {
    
      fontSize: 14,
       color:'#000',
       textAlign:'center'
    },
    title2: {
        fontSize: 12,
        color:'#000'
      },
  });