import "react-native-gesture-handler";
import { React, useState, setState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import Icon2 from "react-native-vector-icons/AntDesign";
import Toast  from "react-native-toast-message";
import STYLES from "../styles/index";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/Fontisto";
import axios from 'axios';

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import Dropdown from '../Components/Dropdown'
// let data =[
//   {
//     id:1,
//     name:'Role1'
//   },
//   {
//     id:2,
//     name:'Role2'
//   },
//   {
//     id:1,
//     name:'Role3'
//   },
// ]

const SignUpScreen = ({ navigation }) => {
  const COLORS = {
    dark: "#000",
    light: "#a5a5a5",
    white: "#fff",
    primary: "#28388f",
    secondary: "#64beff",
    pink: "#ff2d5f",
  };
  const [ username,setusername] =useState("")
  const [ user_email,setuser_email] =useState("")
  const [ user_contact,setuser_contact] =useState("")
  const [user_password,setuser_password] =useState("")



  const [ secure,setsecure] =useState(true)
  const RegisterUser=()=>{
    let obj ={
      username:username,
      user_password:user_password,
      user_email:user_email,
      user_contact:user_contact
    }
    // console.warn(obj)
    fetch("http://192.168.0.112:3000/api/v1/user/register",{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
},
      body:JSON.stringify(obj)
    }) .then((response) => response.json()).then((res)=>{
      console.log(res)
      
        Toast.show({
          topOffset:60,
          type:"success",
          text1:"Signup Successfull",
          text2:"Please Login to your account"
        })
        setTimeout(()=>{
          navigation.navigate("SignIn")

        },500)
      
      
    })
  }
  
  // axios.post("http://192.168.0.112:3000/api/v1/user/register",obj)

 

 
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 31, flex: 1, backgroundColor: "#FFFFFF" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 90,
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontWeight: "700",
              color: " #001F24",
              fontStyle: "normal",
            }}
          >
            Welcome to Puhas Farms!
          </Text>
        </View>
        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          <View
            style={{
              borderRadius: 4,
              borderColor: "grey",
              borderWidth: 1,
              width: 271,
              height: 56,
            }}
          >
            <TextInput placeholder="Name" onChangeText={(a)=>{
              setusername(a)
              console.log(username)
            }} style={STYLES.input1} />
          </View>
          <View style={{ padding: 10 }}></View>
          <View
            style={{
              borderRadius: 4,
              borderColor: "grey",
              borderWidth: 1,
              width: 271,
              height: 56,
            }}
          >
            <TextInput placeholder="Email Address" onChangeText={(a)=>{
              setuser_email(a)
            }} style={STYLES.input1} />
          </View>
          <View style={{ padding: 10 }}></View>
          <View
            style={{
              borderRadius: 4,
              borderColor: "grey",
              borderWidth: 1,
              width: 271,
              height: 56,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextInput
              placeholder="Password"
              style={STYLES.input1}
              secureTextEntry={secure}
              onChangeText={(a)=>{
                setuser_password(a)
              }}
            />
           {/* <Image
              source={require("../assets/eye.png")}
            
              style={{
                width: 22,
                height: 15,
                marginTop: 19,
                marginBottom: 19,
                marginRight: 8,
                marginLeft: 5,
              }}
            ></Image> */}
            <TouchableOpacity onPress={()=>{
              if(secure){
                setsecure(false)

              }
              else{
                setsecure(true)

              }
              
              
              
            }}><Icon2 name="eye" color="#006C48" size={30} style={{marginTop:10,marginRight:5}} /></TouchableOpacity>
            

           
          </View>
          <View style={{ padding: 10 }}></View>
          <View style={STYLES.inputContainer3}>
            <TextInput onChangeText={(a)=>{
              setuser_contact(a)
            }} placeholder="Enter Phone Number" style={STYLES.input} />
          </View>

          <View style={{ padding: 10 }}></View>
        </View>
        <TouchableOpacity onPress={RegisterUser}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            elevation: -2,
          }}
        >
          <View style={STYLES.btnPrimary1}>
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 14 }}>
              Sign Up
            </Text>
          </View>
        </View>

        </TouchableOpacity>
       

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.dark, fontWeight: "bold" }}>
            Already have an account ?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={{ color: "#008000", fontWeight: "bold" }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 15, paddingTop: 40, paddingLeft: 40 }}>
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
    font: "Roboto",

    fontWeight: "400",
    fontsize: 16,
    height: 24,
    display: "flex",
    alignItems: "center",
    color: " #707973",
  },
});

export default SignUpScreen;
