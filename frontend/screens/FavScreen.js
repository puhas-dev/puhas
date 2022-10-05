import {React,useState} from "react";
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
    Button,
    StatusBar
  } from "react-native";
  import {Card,Title,Paragraph,BottomNavigation} from "react-native-paper"; 
  import { ImageBackground } from "react-native";
  import Icon1 from "react-native-vector-icons/EvilIcons";
  
  import Icon2 from "react-native-vector-icons/AntDesign";
  import Icon from "react-native-vector-icons/MaterialIcons";

const FavScreen = ({ navigation }) => {
  const [showCounterTip, setCounterTip] = useState(false);
  const [showAddTip, setAddTip] = useState(true);
  const [Counter, setCounter] = useState(0);
  const [showBillTip, setBillTip] = useState(false);
  
  
    return(
        <SafeAreaView  style={{ flex: 1, backgroundColor:"wheat",paddingTop:StatusBar.currentHeight}}>
           <ScrollView>
            <View>
            <View style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<ImageBackground source={{
uri:
'https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}}
style={{flex: 1,width:412,height:299
,borderRadius:18,zIndex:10}}>

  <View style={{width:340,height:184.3,marginTop:200,borderRadius:8,backgroundColor:"white",display:'flex',alignItems:'center',justifyContent:'center',marginLeft:37,zIndex:10}}>
    <Text style={{fontWeight:"700",fontSize:28}}>
        Farm Loremlpsum
    </Text>
    <Text style={{fontWeight:"400",fontSize:14,color:'#7E7E7E'}}>
        somewhere in telangana prolly IdK
    </Text>
    <View style={{paddingTop:30}}>
    <Text style={{fontWeight:"400",fontSize:16,}}>Open  <Text style={{fontWeight:"400",fontSize:14,color: '#7E7E7E'}}>8am-8pm</Text></Text>
    </View>
    
    <View style={{display:'flex',flexDirection:'row',paddingTop:20}}>
    <View style={{display:'flex',flexDirection:'row'}}>
    <Icon1
              name="location"
              color="#006C48"
          size={20}
          style={{paddingLeft:24}}
              
            />
     <Text>1Km</Text>     
    </View>
    <View style={{display:'flex',flexDirection:'row'}}>
    <Icon1
              name="location"
              color="#006C48"
          size={20}
          style={{paddingLeft:24}}
              
            />
     <Text>4.7</Text>     
    </View>
    <View style={{display:'flex',flexDirection:'row'}}>
    <Icon1
              name="location"
              color="#006C48"
          size={20}
          style={{paddingLeft:24}}
              
            />
     <Text>Verified</Text>     
    </View>
    </View>
   
       
  </View>
  
    
  



</ImageBackground>
      </View>
      {/* card */}
     
      <View style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:120,paddingLeft:38,zIndex:-10,maxHeight:500}}>
      

      <View style={{width:329,height:123,backgroundColor:"wheat",display:'flex',flexDirection:'row'}}>
       {/* text */}
        <View>
            <View>
            <Text>
                Coriander
            </Text>
            <Text>
                $18.5
            </Text>
            <Text>
            Lorem ipsum dolor sit amet,</Text>
            <Text>
             consectetur adipiscing elit,</Text><Text>
             sed do eiusmod tempor incididunt.
            </Text>
            </View>
           
        </View>
        {/* card */}
        <View style={{borderRadius:8}}>
        <ImageBackground source={{
uri:

'https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}}
style={{flex: 1,width:99,height:111,borderRadius:8
}}>
<View style={{width:66,height:26,backgroundColor:"white",marginTop:98,marginLeft:16,borderRadius:4,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'green'}}>ADD</Text>
        </View>
        </ImageBackground>
        </View>

       </View>
     
      
       <View style={{padding:10}}>

</View>
      <View style={{width:329,height:123,display:'flex',flexDirection:'row',backgroundColor:"wheat"
}} >
        <View>
            <View>
            <Text>
                Coriander
            </Text>
            <Text>
                $18.5
            </Text>
            <Text>
            Lorem ipsum dolor sit amet,</Text>
            <Text>
             consectetur adipiscing elit,</Text><Text>
             sed do eiusmod tempor incididunt.
            </Text>
            </View>
           
        </View>
        <View>
        <ImageBackground source={{
uri:
'https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}}
style={{flex: 1,width:99,height:111
}}>

        </ImageBackground>
        {
          showAddTip && (
           
                <View style={{width:66,height:26,backgroundColor:"white",marginTop:98,marginLeft:16,borderRadius:4,alignItems:'center',justifyContent:'center'}}>
                   <TouchableOpacity onPress={()=>{
              setAddTip(false)
              setCounterTip(true)
              setBillTip(true)
              
            }}>
            <Text style={{color:'green'}}>ADD</Text>
            </TouchableOpacity>
        </View>
          
        

          )

        }
        {
          showCounterTip && (
           
            <View style={{width:66,height:26,backgroundColor:"white",marginTop:98,marginLeft:16,borderRadius:4,alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity onPress={()=>{
              setCounterTip(true)
            }}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"
          }}>
            <TouchableOpacity onPress={()=>{
              if(Counter>0){
                setCounter(Counter-1)

              }
              else{
                setCounterTip(false)
                setAddTip(true)
                setBillTip(false)

              }
              
            }}>
            <Text style={{color:'green',paddingLeft:10,fontWeight:"bold"}}>-</Text>
            </TouchableOpacity>
            <Text style={{color:'green' ,paddingLeft:10}}>{Counter}</Text>
            <TouchableOpacity onPress={()=>{
              setCounter(Counter+1)
            }}>
            <Text style={{color:'green',paddingLeft:10}}>+</Text>
            </TouchableOpacity>


              </View>
            
            </TouchableOpacity>
        </View>
        
            
          )

        }
       
        </View>

      </View>
      

      </View>

            </View>
          
        
     
      </ScrollView>
      
      
      {
        showBillTip && (
          <View style={{backgroundColor:"white",width:340,height:70,marginLeft:10,marginBottom:62,borderRadius:12}}>
          <View style={{display:"flex",flexDirection:"row",padding:10,alignItems:"center"}}>
          
          <View style={{marginLeft:10}}>
            <Text>Farm LoremIpsum</Text>
            <Text>Total: 190.85</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("CheckoutScreen")}>
          <View style={{marginLeft:100,width:110,height:40,borderRadius:100,backgroundColor:"#006C48",justifyContent:"center",alignItems:"center"}}>
            <View>
              
              <Text style={{color:"white"}}>
                View Cart
              </Text>
                
              
            </View>
            
          </View>
          </TouchableOpacity>

          </View>
         
        </View>
        )
       }

     
      
      <View style={{position:"absolute",bottom:0}}>
      
      <View style={{backgroundColor:"#F6FEFF",width:412,height:60}}>
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

      </View>
      
 
    
      </SafeAreaView>
      
      

        
      
    
      
     
     

      
        );
    };
   
  
   
    
  export default FavScreen;
