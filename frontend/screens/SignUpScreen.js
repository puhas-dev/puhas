import 'react-native-gesture-handler';
import {React,useState,setState} from 'react';
import {StyleSheet,SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import STYLES from '../styles/index';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Dropdown from '../Components/Dropdown'
let data =[
  {
    id:1,
    name:'Role1'
  }, 
  {
    id:2,
    name:'Role2'
  },
  {
    id:1,
    name:'Role3'
  },
]



  
const SignUpScreen = ({navigation}) => {
    const COLORS = {
        dark: "#000",
        light: "#a5a5a5",
        white: "#fff",
        primary: "#28388f",
        secondary: "#64beff",
        pink: "#ff2d5f",
      };
     
      const [selectedItem, setSelectedItem]=useState(null) 
  const onSelect =(item)=>{
    setSelectedItem(item)
  }
      
      
  return (
    <SafeAreaView
      style={{paddingHorizontal: 41, flex: 1, backgroundColor:"#FFFFFF"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
            marginTop: 90,
            flexDirection: "column",
            textAlign: "left",
          }}>
          <Text style={{
              fontSize: 36,
              fontWeight: "700",
              color: " #001F24",
              fontStyle: "normal",
            }}>
            Welcome to Puhas Farms!
          </Text>
          
        </View>
        <View style={{marginTop: 20}}>
          <View style={{borderRadius: 4,borderColor:"grey",borderWidth:1,width:271,height:56}}>
            <TextInput placeholder="Name" style={STYLES.input1} />
          </View>
          <View style={{padding:10}}></View>
          <View style={{borderRadius: 4,borderColor:"grey",borderWidth:1,width:271,height:56}}>
            <TextInput placeholder="Email Address" style={STYLES.input1} />
          </View>
          <View style={{padding:10}}></View>
          <View style={{borderRadius: 4,borderColor:"grey",borderWidth:1,width:271,height:56,display:"flex",flexDirection:'row'}}>
            <TextInput
              placeholder="Password"
              style={STYLES.input1}
              secureTextEntry
            />
            
            <Image
              source={require("../assets/eye.png")}
              style={{ width: 22, height: 15, marginTop:19 ,marginBottom:19, marginRight:8,marginLeft:5}}
            ></Image>
          </View>
          <View style={{padding:10}}></View>
         <View style={{borderRadius: 4,borderColor:"grey",borderWidth:1,width:271,height:56,display:"flex",flexDirection:'row'}}><Dropdown 
         value={selectedItem}
         data={data}
         onSelect={onSelect}
         
         /></View>

         <View style={{padding:10}}></View>
         <View style={{display:"flex",alignItems:"center",justifyContent:"center",elevation:-2}}>
         <View style={STYLES.btnPrimary1}>
            <Text style={{ color: "#fff", fontWeight:"500"
            , fontSize: 14 }}>
              Sign Up
            </Text>
          </View>
          </View>
         </View>
     
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
         
          <TouchableOpacity onPress={() => navigation.navigate("ProductScreen")}>
            <Text style={{color:"#008000", fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 15,paddingTop:40,paddingLeft:40}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              display: "flex",
              alignItems: "center",
              left: 160,
              top: -8,
              justifyContent: "center",
              borderRadius: 16,
              borderWidth: 0,
              width: 56,
              height: 56,
              backgroundColor: "#D0E8D8",
              
      
            }}
          
          >
            <Text
              style={{ textAlign: "center", fontSize: 28, fontWeight: "700" }}
            >
              ?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );

};
const SelectStyles = StyleSheet.create({
 
  inputAndroid: {
    font:'Roboto',

    fontWeight:"400",
    fontsize: 16,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    color:' #707973',

  }
})

export default SignUpScreen;