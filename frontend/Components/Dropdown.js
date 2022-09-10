import React,{component, useState,onSelect} from 'react';
import {View,Text,StyleSheet, Image,TouchableOpacity} from 'react-native'



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

const Dropdown=({
  data=[],
  value={},
  onSelect=()=>{}

})=>{
  console.log("selected value",!!value)   
  const [showOption,setShowOption]=useState(false)
  const onSelectedItem=(val)=>{
    console.log("hai")
    setShowOption(false)
    onSelect(val)
  }
  
  return(
    <View>
  <TouchableOpacity style={styles.dropdownstyles}
  onPress={()=>setShowOption(!showOption)}
  >
    <Text style={{fontSize:16}}>{!!value ? value?.name :`Role`}</Text>
    <Image
    style={{width: 30, height: 30, marginLeft: 210,marginTop:-7,transform:[{rotate: showOption?'180deg':'0deg'}]}}
     source={require("../assets/arrow_icon.png")}/>
  </TouchableOpacity>
{showOption && (<View style={{
  backgroundColor:'white',
  padding:10,
  elevation:10,
  borderRadius:6,
  borderBottomWidth:2,
  borderTopWidth:2,
  borderBottomColor:"black",
  
}}>
{data.map((val,i)=>{
        return(
          <TouchableOpacity key={String(i)}
          onPress={()=>onSelectedItem(val)}
          style={{paddingVertical:8}}
          >
          
            <Text style={{fontSize:16}}>{val.name}</Text>
          </TouchableOpacity>
        )
      })}
</View>)}
     
    </View>

  );

};
const styles=StyleSheet.create({
  dropdownstyles:{
    
    padding:8,
    borderRadius:6,
    minHeight:62,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})
export default Dropdown;