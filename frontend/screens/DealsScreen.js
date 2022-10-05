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
    ScrollView
  } from "react-native";
  import {Card,Title,Paragraph,BottomNavigation} from "react-native-paper"; 
  import Icon from "react-native-vector-icons/MaterialIcons";
  import Icon1 from "react-native-vector-icons/EvilIcons";
  import Icon2 from "react-native-vector-icons/AntDesign";
  import Icon6 from "react-native-vector-icons/MaterialIcons";
import { ImageBackground } from "react-native-web";
import STYLES from "../styles";




  const DealsScreen = ({ navigation }) => {
  
    return(
      <SafeAreaView
      style={{ flex: 1, backgroundColor:"wheat"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <Text style={{
          fontFamily:'Inter',
          fontWeight:"700",
          width:327,
          height:92,
          fontSize:28,
          paddingTop:44,
          paddingLeft:24
          
        
        }}>Hello, MURARI!</Text>
          <View>
            
              <View style={{display:'flex',flexDirection:'row',}} >
              <Icon1
              name="location"
              color="#006C48"
          size={20}
          style={{paddingLeft:24}}
              
            />
            <View style={{fontFamily:'Roboto',paddingLeft:5}}>
            <Text>Gachhibowli,Hyderabad</Text>
            </View>
          
              </View>
              
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:27,paddingLeft:15}}>
               <View>
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",
              display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={30}
              
            />
            
              </View>
              <Text>Favourites</Text>
              </View> 
              
              <TouchableOpacity onPress={() => navigation.navigate("DealsScreen")}>
              <View>
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",
              display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={30}
              
            />
            
              </View>
              <Text>Deals</Text>
              </View>
              </TouchableOpacity>
              

              <View>
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",
            display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={30}
              
            />
            
              </View>
              <Text>Featured</Text>
              </View>
             
      
      
              <View>
              <View style={{width:74,height:74,borderRadius:8,borderColor:"#008000",backgroundColor:"#ffffff",
            display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Icon2
              name="tago"
              color="#006C48"
              size={30}
              
            />
            
              </View>
              <Text>Produce</Text>
              </View>
             
      
  
      

      </View>
     
      <View style={{fontSize:24,display:'flex',
      alignItems:'flex-start',paddingTop:30,paddingLeft:32}}>
        <Text style={{fontFamily:'Inter',fontWeight:"400",fontSize:24,lineHeight:32}}>Best Deals</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <Card style={{width:170,height:179}}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:170,height:110}}/>
    <Card.Content>
           
            <View style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
            <View>
           <Title>Lorem Farm</Title>
           <Paragraph style={{fontFamily:"Roboto",fontSize:12}}>
                Fruits and Herbs</Paragraph>
           </View>
           <View style={{width:42,height:43,backgroundColor:"#BEFFDA",alignItems:'center',justifyContent:"center"}}>
            <Text style={{fontWeight:'500',fontSize:14}}>40%</Text>
            <Text style={{fontWeight:'500',fontSize:14}}>off</Text>

           

           </View>
            </View>
          
           
          </Card.Content>

    </Card>
    <View style={{padding:10}}></View>
    <Card style={{width:170,height:179}}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:170,height:110}}/>
    <Card.Content>
           
            <View style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
            <View>
           <Title>Lorem Farm</Title>
           <Paragraph style={{fontFamily:"Roboto",fontSize:12}}>
                Fruits and Herbs</Paragraph>
           </View>
           <View style={{width:42,height:43,backgroundColor:"#BEFFDA",alignItems:'center'}}>
            <Text style={{fontWeight:'500',fontSize:14}}>40%</Text>
            <Text style={{fontWeight:'500',fontSize:14}}>off</Text>

           

           </View>
            </View>
          
           
          </Card.Content>

    </Card>  
        </View>
        <View style={{paddingTop:10}}></View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <Card style={{width:170,height:179}}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:170,height:110}}/>
    <Card.Content>
           
            <View style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
            <View>
           <Title>Lorem Farm</Title>
           <Paragraph style={{fontFamily:"Roboto",fontSize:12}}>
                Fruits and Herbs</Paragraph>
           </View>
           <View style={{width:42,height:43,backgroundColor:"#BEFFDA",alignItems:'center'}}>
            <Text style={{fontWeight:'500',fontSize:14}}>40%</Text>
            <Text style={{fontWeight:'500',fontSize:14}}>off</Text>

           

           </View>
            </View>
          
           
          </Card.Content>

    </Card>
    <View style={{padding:10}}></View>
    <Card style={{width:170,height:179}}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:170,height:110}}/>
    <Card.Content>
           
            <View style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center',justifyContent:'space-between'}}>
            <View>
           <Title>Lorem Farm</Title>
           <Paragraph style={{fontFamily:"Roboto",fontSize:12}}>
                Fruits and Herbs</Paragraph>
           </View>
           <View style={{width:42,height:43,backgroundColor:"#BEFFDA",alignItems:'center'}}>
            <Text style={{fontWeight:'500',fontSize:14}}>40%</Text>
            <Text style={{fontWeight:'500',fontSize:14}}>off</Text>

           

           </View>
            </View>
          
           
          </Card.Content>

    </Card>  
    
        </View>
        <View style={{paddingTop:10}}></View>
        
   
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
 
        </View>
        </ScrollView>
        </SafeAreaView>
     
    
      
     
     

      
        );
    };
   
  
   
    
  export default DealsScreen;
