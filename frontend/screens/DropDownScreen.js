import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from "react-native-gesture-handler";


const data = [
  { label: 'Role 1', value: '1' },
  { label: 'Role 2', value: '2' },
  { label: 'Role 3', value: '3' },
  { label: 'Role 4', value: '4' },
  { label: 'Role 5', value: '5' },
  
];

const DropdownComponent = ({navigate}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  

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
          Please select a Role
        </Text>
      </View>
<View style={{paddingTop:70}}></View>
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
        placeholder={!isFocus ? 'Role' : '...'}
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

export default DropdownComponent;
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