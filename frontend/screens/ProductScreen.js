import React, { useEffect, useState,useContext,useCallback } from "react";
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
  ActivityIndicator,
  FlatList
} from "react-native";
import AuthGlobal from "../Context/store/AuthGlobal";
import { logoutUser } from "../Context/actions/Auth.actions";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { baseURL } from "../assets/common/baseUrl";
import { useFocusEffect } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { Card, Title, Paragraph, BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon6 from "react-native-vector-icons/MaterialIcons";
import Icon5 from "react-native-vector-icons/Ionicons";
import Icon7 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon8 from "react-native-vector-icons/Entypo";

import { ImageBackground } from "react-native-web";
import STYLES from "../styles";



const ProductScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [ farmsArray,setfarmsArray] =useState([])
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/Inter Regular 400.otf'),
  })


  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState();
  
  useFocusEffect(
    useCallback(()=>{
      console.log("hi");
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        navigation.navigate("SignIn");
      }
    
        
        fetch("http://192.168.0.108:3000/api/v1/farm", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((jsonData) => {
            console.log(jsonData);
            setfarmsArray(jsonData)
            console.log(farmsArray);
            setLoading(false);
            AsyncStorage.getItem("jwt")
            .then(async(res) => {
              await axios
                .get(`${baseURL}user/${context.stateUser.user.userId}`, {
                  headers: { Authorization: `Bearer ${res}` },
                })
                .then((user) => {
                  setUserProfile(user.data);
                  console.warn(user,userProfile);
                });

            })
            .catch((error) => {
              console.log(error);
            });
          }).catch((error)=>{
            console.log("error",error)
          });
          return () => {
            setUserProfile();
            
          };

    

    },[context.stateUser.isAuthenticated])

  )
  const handlelogout=()=>{
    AsyncStorage.removeItem("jwt")
    logoutUser(context.dispatch)

  }
  

  return (
    
    <SafeAreaView style={{ flex: 1,paddingHorizontal:1, backgroundColor: "#DFD5EC" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              fontFamily: "Inter,sans-serif",
              fontWeight: "700",
              // width: 327,
              // height: 92,
              fontSize: 28,
              paddingTop: 44,
              paddingLeft: 24,
            }}
          >
            Hello !
          </Text>
          <View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Icon1
                name="location"
                color="#006C48"
                size={20}
                style={{ paddingLeft: 20 }}
              />
              <View style={{ fontFamily: "Roboto", paddingLeft: 5 }}>
                <Text>Gachhibowli,Hyderabad</Text>
              </View>
              <TouchableOpacity onPress={handlelogout}>
              <View style={{   backgroundColor: 'red',
    width:92,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:-25,
   marginLeft:60,
   elevation:-2}}>
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
                >
                  Sign out
                </Text>
              </View>
            </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 27,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("FavScreen")}>
              <View style={{display: "flex",
                   
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent:"center"}}>
                <View
                  style={{
                    width: 74,
                    height: 74,
                    borderRadius: 8,
                    borderColor: "#008000",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent:"center"
                  }}
                >
                   <Icon2 name="hearto" color="#006C48" size={30} />
                   {/* <Image
              source={require("../assets/heart.png")}
              style={{ width:30, height:30, marginTop: 3 ,color:'green'}}
            ></Image> */}
                 
                </View>

                <Text style={{fontWeight:'500',fontSize:14,paddingTop:5}}>Favourites</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DealsScreen")}
            >
              <View style={{display: "flex",
                    
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent:"center"}}>
                <View
                  style={{
                    width: 74,
                    height: 74,
                    borderRadius: 8,
                    borderColor: "#008000",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon2 name="tago" color="#006C48" size={30} />
                </View>
                <Text style={{fontWeight:'500',fontSize:14,paddingTop:5}}>Deals</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("OrderPass")}>
              <View style={{display: "flex",
                    
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent:"center"}}>
                <View
                  style={{
                    width: 74,
                    height: 74,
                    borderRadius: 8,
                    borderColor: "#008000",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon7 name="star-circle-outline" color="#006C48" size={30} />
                </View>
                <Text style={{fontWeight:'500',fontSize:14,paddingTop:5}}>Featured</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate("ProduceScreen")}
            >
              <View style={{display: "flex",
                    
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent:"center"}}>
                <View
                  style={{
                    width: 74,
                    height: 74,
                    borderRadius: 8,
                    borderColor: "#008000",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon7 name="flower" color="#006C48" size={30} />
                </View>
                <Text style={{fontWeight:'500',fontSize:14,paddingTop:5}}>Produce</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // width: 327,
              // height: 92,
              fontSize: 24,
              display: "flex",
              alignItems: "flex-start",
              paddingTop:25,
              paddingLeft:32,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter,sans-serif",
                fontWeight:'400',
                fontSize: 24,
                lineHeight: 32,
              }}
            >
              Featured Farms
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", paddingLeft: 17,paddingTop:13, }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "space-between",
                width: 83,
                height: 32,
                borderRadius: 8,
                paddingTop: 6,
                paddingRight: 16,
                paddingBottom: 6,
                paddingLeft: 8,
                backgroundColor: "#D0E8D8",
                borderRadius:8
              }}
            >
              <Icon5
                name="filter"
                color="#0A1F15"
                size={15}
              />
              <Text style={{fontWeight:'500',fontSize:14,paddingLeft:10,color:'#0A1F15'}}>Filter</Text>
            </View>
            <View style={{ paddingRight: 8 }}></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "space-between",
                width:152,
                height: 32,
                borderRadius: 8,
                paddingTop: 6,
                paddingRight: 16,
                paddingBottom: 6,
                paddingLeft: 8,
                backgroundColor: "#D0E8D8",
                borderRadius:8
              }}
            >
              <Icon8
                name="cross"
                color="black"
                size={15}
              />
              <Text style={{fontWeight:'500',fontSize:14,paddingLeft:10,color:'#0A1F15'}}>OrganicProduce</Text>
            </View>
            <View style={{ paddingRight: 8 }}></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "space-between",
                width: 83,
                height: 32,
                borderRadius: 8,
                paddingTop: 6,
                paddingRight: 16,
                paddingBottom: 6,
                paddingLeft: 8,
                backgroundColor: "#D0E8D8",
              }}
            >
              <Icon2
                name="caretdown"
                color="black"
                style={15}
              />
              <Text style={{fontWeight:'500',fontSize:14,paddingLeft:10,color:'#0A1F15'}}>SortBy</Text>
            </View>
          </View>
          <View style={{ paddingTop: 10 }}></View>
          {/* <FlatList 
          data={farmsArray}
          keyExtractor={(item,index)=>{
            index.toString()

          }}
          renderItem={({item})=> (
            <>
           
            </>
          )}/> */}
          {farmsArray!=null&&(
            
            farmsArray.map((a,index) => {
              console.log(farmsArray)
              return (
                <>
                 <TouchableOpacity
              onPress={() => navigation.navigate("ProduceScreen",{
                farm_id:a._id,farm_name:a.farm_name
              })}
            >
                 <View key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight:29,
                      paddingLeft:31
                    }}
                  >
                    <Card style={{ width: 300, height: 312,margin:10,borderRadius:15, }}>
                      <Card.Cover
                        source={{ uri: "https://picsum.photos/700" }}
                      />
                      <Card.Content style={{display:"flex",alignSelf:"stretch"}}>
                        <Title style={{fontWeight:'600',fontSize:24,paddingTop:10,lineHeight:32
                      }}>{a.farm_name}</Title>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Icon6 name="star-rate" color="#FFC107" />
                          <Icon6 name="star-rate" color="#FFC107" />
                          <Icon6 name="star-rate" color="#FFC107" />
                          <Icon6 name="star-rate" color="#FFC107" />
                          <View><Text style={{fontWeight:'400',fontSize:14}}>  4.75(5)</Text></View>
                        </View>

                        <Paragraph
                          style={{
                            fontFamily: "Roboto",
                            fontSize: 16,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingTop: 10,
                          }}
                        >
                          Fresh Organic produce| Fruits and Vegetables | Best
                          place in town
                        </Paragraph>
                      </Card.Content>
                    </Card>
                  </View>
                  </TouchableOpacity>
                  
                </>
              );
            })
          )} 
          <View style={{ paddingTop: 20 }}></View>
          {/* <View style={{ backgroundColor: "#F6FEFF", width: 412, height: 70,position:"absolute",bottom:0 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View style={{ paddingLeft: 36 }}>
                <TouchableOpacity>
                  <Icon2 name="tago" color="#006C48" size={30} />
                </TouchableOpacity>
                <Text>Home</Text>
              </View>
              <View style={{ paddingLeft: 95 }}>
                <Icon2 name="tago" color="#006C48" size={30} />
                <Text>Community</Text>
              </View>
              <View style={{ paddingLeft: 95 }}>
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
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;
