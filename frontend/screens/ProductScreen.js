import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image,
  } from "react-native";
  import Icon from "react-native-vector-icons/MaterialIcons";
  import Icon1 from "react-native-vector-icons/Ionicons";
  import Icon2 from "react-native-vector-icons/AntDesign";

  const ProductScreen = ({ navigation }) => {
    return(
     <SafeAreaView style={{paddingHorizontal: 41, flex: 1, backgroundColor:"#DFD5EC"}}>
<View style={{paddingTop:40,backgroundColor:"#DFD5EC"}}>
        <Text style={{
          fontFamily:'Inter',
          fontWeight:"700",
        
        }}>HI MURARI</Text>
          <View>
            
              <View >
              <Icon1
              name="pricetag-outline"
              color="#006C48"
              size={20}
              style={{ paddingRight: 20, paddingTop: 4 }}
            />
            
                  <Text>Gachhibowli,Hyderabad</Text>
              </View>
              
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingTop:27}}>
              <View >
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={20}
              style={{ paddingLeft:5, paddingTop:8,width:49,height:46,position:'absolute' }}
            />
            
              </View>
              <Text>Favourites</Text>
              </View>
              
              <View>
              <View>
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={20}
              style={{ paddingLeft:5, paddingTop:8,width:49,height:46,position:'absolute' }}
            />
            
              </View>
              <Text>Favourites</Text>
              </View>
             
      </View>
      <View>
              <View>
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={20}
              style={{ paddingLeft:5, paddingTop:8,width:49,height:46,position:'absolute' }}
            />
            
              </View>
              <Text>Favourites</Text>
              </View>
             
      </View>
      <View>
              <View>
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={20}
              style={{ paddingLeft:5, paddingTop:8,width:49,height:46,position:'absolute' }}
            />
            
              </View>
              <Text>Favourites</Text>
              </View>
             
      </View>
  
      

      </View>
     zw
      <View><Text>Featured Farms</Text></View>
      <View>
        <View style={{display:'flex',flexDirection:'row'}}>
        <Icon2
              name="tago"
              color="#006C48"
              size={20}
              style={{ paddingLeft:5, paddingTop:8,width:49,height:46,position:'absolute' }}
            />
            <Text>Filter</Text>
        </View>
      </View>
      <View>

      </View>
      </View>
     </SafeAreaView>

      
        );
    };
 
  

  export default ProductScreen;

