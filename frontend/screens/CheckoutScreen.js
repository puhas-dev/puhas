import { React, useState } from "react";
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
  StatusBar,
} from "react-native";
import { Card, Title, Paragraph, BottomNavigation } from "react-native-paper";
import { ImageBackground } from "react-native";
let Cart=[]

const CheckoutScreen = ({ route,navigation }) => {
  const {CartItems,Cost} = route.params
  if (CartItems) {
    let counts = CartItems.reduce((acc, curr) => {
      const str = (curr.product_name);
      acc[str] = (acc[str] || 0) + 1;

      return acc;
    }, {});
    counts=Object.entries(counts)
    let set = new Set();
    let res = CartItems.filter((x) => {
      counts.map((a)=>{
        if(x.product_name==a[0]){
          x["countInStock"]=a[1]
        }
      })
       
      const str = JSON.stringify(x);
      return !set.has(str) && set.add(str);
    });
    

    console.log(counts);
    Cart=res
    console.log(res);
   
    
  }


  const Array = ["Coriander", "Apples", "Mangoes"];
  const Array1 = ["GPay", "Phonepay"];
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#DFD5EC",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView>
          <View
            style={{ display: "flex", alignItems: "flex-start", padding: 20 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/back.png")}></Image>

              <Text
                style={{
                  fontSize: 28,
                  color: "black",
                  fontWeight: "700",
                  marginLeft: 10,
                }}
              >
                Your Order
              </Text>
            </View>
            <View style={{ padding: 5 }}></View>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "400",
                marginLeft: 30,
              }}
            >
              Lorem Farms
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "400",
                marginLeft: 30,
              }}
            >
              Delivering to Gachibowli{" "}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <View style={{display:"flex",flexDirection:"row"}}>
            <Text
              style={{
                fontSize: 24,
                color: "black",
                fontWeight: "400",
                marginLeft: 30,
                marginBottom: 10,
              }}
            >
              Items
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "400",
                marginLeft:110,
                
              }}
            >
              Quantity
            </Text>
            </View>
            {Cart.map((a) => {
              
              return (
                <>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      width: 330,
                      height: 59,
                      borderRadius: 12,
                      backgroundColor: "white",
                      justifyContent: "flex-start",
                      marginLeft: 15,
                    }}
                  >
                    <Text style={{ paddingLeft: 15 }}>{a.product_name}</Text>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        left: 160,
                      }}
                    >
                      <View
                        style={{
                          width: 66,
                          height: 26,
                          backgroundColor: "white",
                          borderRadius: 4,
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "row",
                          // borderWidth: 1,
                          // borderColor: "#006C48",
                        }}
                      >
                        {/* <Text
                          style={{
                            color: "green",
                            paddingLeft: 10,
                            fontWeight: "bold",
                          }}
                        >
                          -
                        </Text> */}
                        <Text style={{ color: "green", paddingLeft: 10 }}>
                          {a.countInStock
}
                        </Text>
                        {/* <Text style={{ color: "green", paddingLeft: 10 }}>
                          +
                        </Text> */}
                      </View>
                    </View>

                    <Text style={{ position: "absolute", left: 270 }}>
                    ₹{a.product_price*a.countInStock}
                    </Text>
                  </View>
                  <View style={{ padding: 7 }}></View>
                </>
              );
            })}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "black",
                fontWeight: "400",
                marginLeft: 30,
                marginBottom: 10,
              }}
            >
              Bill Details
            </Text>
            <View
              style={{
                width: 320,
                height: 130,
                backgroundColor: "white",
                borderRadius: 12,
                marginLeft: 20,
                display:"flex",
                flexDirection:"column",
                
              }}
            >
              <View style={{ display:"flex",
                flexDirection:"row",padding:15}}>
                <Text>Item Total</Text>
                <Text style={{position:"absolute",right:15,top:15}}>₹{Cost}</Text>
              </View>
              <View style={{ display:"flex",
                flexDirection:"row",padding:15}}>
                <Text>Taxes and Charges</Text>
                <Text style={{position:"absolute",right:15,top:15}}>₹ 45</Text>
              </View>
              <View style={{ display:"flex",
                flexDirection:"row",padding:15}}>
                <Text>To Pay</Text>
                <Text style={{position:"absolute",right:15,top:15}}>₹{Cost+45}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop:15
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "black",
                fontWeight: "400",
                marginLeft: 30,
                marginBottom: 10,
              }}
            >
              Payment Methods
            </Text>
            {
                Array1.map((a)=>{
                    return (
                        <>
                          <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      width: 330,
                      height: 59,
                      borderRadius: 12,
                      backgroundColor: "white",
                      justifyContent: "flex-start",
                      marginLeft: 15,
                    }}
                  >
                    <Text style={{marginLeft:20,fontSize:16}}>
                        {a}
                    </Text>
                    <View style={{width:110,height:40,borderRadius:100,backgroundColor:"#006C48",justifyContent:"center",alignItems:"center",position:"absolute",left:190}}>
            <View>
              
              <Text style={{color:"white"}}>
                View Cart
              </Text>
                
              
            </View>
            
          </View>
                  </View>
                  <View style={{padding:10}}></View>
                        </>
                    )
                })
            }
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default CheckoutScreen;
