// import React,{useState} from "react";
// import DropDownPicker from "react-native-dropdown-picker";
// import { HelperText,TextInput } from "react-native-paper";
// import Icon2 from "react-native-vector-icons/AntDesign";
// import {
//     StyleSheet,
//     SafeAreaView,
//     View,
//     Text,
    
//     Image,
//   } from "react-native";

// const ProductDropDown=({})=>{
//     const [product, setproduct] = useState();
//     const hasErrors=()=>{
//         return product==="0";
//     };
//     return(
//         <View>
// <DropDownPicker
// items={[
//     {
//         label:"select product",
//         value:"0",
//         icon:()=>(<Icon2 name="eye" color="#006C48" size={30} style={{marginTop:10,marginRight:5}} />),
//     }, 
//     {
//         label:"Onions",
//         value:"0",
//         icon:()=>(<Icon2 name="eye" color="#006C48" size={30} style={{marginTop:10,marginRight:5}} />),
//     },
//     {
//         label:"Tomatos",
//         value:"0",
//         icon:()=>(<Icon2 name="eye" color="#006C48" size={30} style={{marginTop:10,marginRight:5}} />),
//     },

// ]}
// label="select product"
// placeholder="select product"
// containerStyle={{height:80}}
// dropDownMaxHeight={300}
// onChangeItem={(item)=>{setproduct(item.value);}}


// />
//         </View>
//     );
// };
// export default ProductDropDown; 
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from "react-native-gesture-handler";


const data = [
  { label: 'Onions', value: '1' },
  { label: 'Tomatos', value: '2' },
  { label: 'Green Chilli', value: '3' },
  { label: 'mirchi', value: '4' },
  { label: 'masala', value: '5' },
  
];

const ProductDropdown = ({navigate}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  

  return (
    
    
      <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'green' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.Cstyle}
       
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Essentials' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      
      />
    </View>

  );
};

export default ProductDropdown;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width:271,
    height:56
    
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius:8,
    paddingHorizontal:5,
    
    
  },
  Cstyle:{
    marginTop:-37

  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top:15,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});