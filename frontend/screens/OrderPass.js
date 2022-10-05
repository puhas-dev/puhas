import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    StyleSheet,
    ScrollView,
    Button
  } from "react-native";
  import {Card,Title,Paragraph,BottomNavigation} from "react-native-paper"; 
  import Icon from "react-native-vector-icons/MaterialIcons";
  import Icon1 from "react-native-vector-icons/EvilIcons";
  import Icon2 from "react-native-vector-icons/AntDesign";
  import Icon6 from "react-native-vector-icons/MaterialIcons";
import { ImageBackground } from "react-native-web";
import STYLES from "../styles";




  const OrderPass = ({ navigation }) => {
  
    return(
      <SafeAreaView
      style={{ flex: 1, backgroundColor:"wheat"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
        <Image
          source={require("../assets/login_grocery_bag.png")}
          style={{ width: 186, height: 186,marginTop:174,marginLeft:122,marginRight:104 }}
        ></Image>
        </View>

        <View style={{marginLeft:41 ,paddingBottom:20,marginTop:89}}>
        
            <Text style={{width:700,fontSize:28}}>Your Order is Confirmed!</Text>
            </View>
           
            <View style={{width:221,height:52,backgroundColor:"green",
            marginLeft:102,borderRadius:8,paddingTop:16,paddingBottom:16,paddingRight:36,paddingLeft:36}}>
                <Text style={{color:'white'}}>check your order status</Text>
            </View>
        
       
   <View style={{paddingTop:147}}></View>
   <View style={{backgroundColor:"#F6FEFF",width:412,height:70,marginTop:35 }}>
    <View style={{display:'flex',flexDirection:'row',alignItems:'center',flex:1}}>
  <View style={{paddingLeft:36}}>
    <TouchableOpacity>
    <Icon2
              name="tago"
              color="#006C48"
              size={30}
              
            />
    </TouchableOpacity>
  
  <Text>Home</Text>          
  </View>
  <View style={{paddingLeft:95}}>
  <Icon2
              name="tago"
              color="#006C48"
              size={30}
              
            />
  <Text>Community</Text>          
  </View>
  <View style={{paddingLeft:95}}>
    <TouchableOpacity>
    <Icon
              name="person-outline"
              color="#006C48"
              size={30}
              style={{ paddingRight: 20, paddingTop: 4 }}
            />
    </TouchableOpacity>
 
  <Text>Profile</Text>          
  </View>


    </View>
                       
  
   
    
   </View>
 
    
        </ScrollView>
        </SafeAreaView>
     
    
      
     
     

      
        );
    };
   
  
   
    
  export default OrderPass;
