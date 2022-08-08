import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView,  StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyCard from '../Components/MyCard'
import { useDispatch,useSelector } from 'react-redux';
const Main = () => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
 // const [DATA,setData]=useState();
 const DATA=useSelector((state => state.RData.MyData));
  const getDataFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const json = await response.json();
      dispatch({ type: 'setData', payload: json });
      //setData(json);
    } catch (error) {
      console.error(error);
    }
  };

 useEffect(()=>{
  getDataFromApiAsync();
 },[])
  
   
 const Item = ({ item }) => (
  <MyCard data={item} />
  );

  const renderItem = ({ item }) => {
    
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor:'#E6E8FA' }}>   
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      /> 
    </SafeAreaView>
  );
};

export default Main;