import "react-native-gesture-handler";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Tooltip from './ToolTip';


import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";

import STYLES from "../styles/index";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/Fontisto";

import { ScrollView } from "react-native-gesture-handler";

const SignUpVerification = ({ navigation }) => {
    const COLORS = {
      dark: "#000",
      light: "#a5a5a5",
      white: "#fff",
      primary: "#28388f",
      secondary: "#64beff",
      pink: "#ff2d5f",
    };
    const [showToolTip, setShowToolTip] = useState(false);
    return (
        <SafeAreaView
          style={{ paddingHorizontal: 31, flex: 1, backgroundColor: "#78D558 " }}
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
                Hello FirstName!
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: " #001F24",
                  marginTop: 4,
                }}
              >
                Please Verify via OTP
              </Text>
            </View>
    
            <View>
           
          <View style={{padding:30}}></View>
              <View style={STYLES.inputContainer3}>
               
                <TextInput placeholder="Enter One Time Password" style={STYLES.input} />
              </View>
              <View style={{padding:10}}></View>
              <View style={{display:"flex",flexDirection:"row",justifyContent:'center'}}>
             
              
              <View style={{padding:1}}></View>
              <TouchableOpacity onPress={() => navigation.navigate("DropDownScreen")}>
              <View style={STYLES.btnPrimary}>
            
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              verify
            </Text>
          </View>
              </TouchableOpacity>
             
            </View>
    
              </View>
           

              <View style={{padding:145}}></View>
           
         
            <View style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
           
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  display: "flex",
                  flexDirection:"column",
                  alignItems: "center",
                  left:120,
                  justifyContent: "center",
                  borderRadius: 16,
                  borderWidth: 0,
                  width: 56,
                  height: 56,
                  backgroundColor: "#D0E8D8",
                }}
                onPress={() => {
                  setShowToolTip(true);
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
    
    export default SignUpVerification;
     