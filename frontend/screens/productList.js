import React, { useEffect, useState } from "react";
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
  ImageBackground,
} from "react-native";
import { Card, Title, Paragraph, BottomNavigation } from "react-native-paper";
import ProduceScreen from "./ProduceScreen.js";
import { connect,useDispatch,useSelector } from "react-redux";
import * as Actions from "../Redux/Actions/cartActions";
let Cart1 = [];
const ProductList = ({ item,props }) => {
    
  const [showAddTip, setAddTip] = useState(true);
  const [showCounterTip, setCounterTip] = useState(false);
  const [Cart, setCart] = useState([]);
  const [Counter, setCounter] = useState(1);
  const [Cost, setCost] = useState(0);
  const [showBillTip, setBillTip] = useState(false);
  const dispatch = useDispatch()
//   const addtocart = (item) => {
   
//   };
  const removeProduct = (i) => {
    console.log(i);

    let Rcart = Cart.filter((val) => val.product_name != i.product_name);
    console.log(Rcart);
    setCart(Rcart);
    if (Cart.length == 0) {
      setBillTip(false);
    }
    let d = 0;
    Cart.map((a) => {
      d = d + a.product_price;
    });
    setCost(d);
    Cost1 = d;
    console.log(Cost);

    return <ProduceScreen Cart={Cart} Cost={Cost} />;
  };
  return (
    <>
    
    <View >
        <Card style={{ width: 280, height:210, backgroundColor: "#F6FEFF",borderRadius:8 }}>
          {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{width:207,height:130}}
      /> */}
          <ImageBackground
            source={{ uri: "https://picsum.photos/700" }}
            style={{ width: 280, height: 150 }}
          >
            <View
              style={{
                width: 43,
                height: 24,
                backgroundColor: "#BEFFDA",
                position: "absolute",
                marginTop: 100,
                marginLeft: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 14 }}>
                {item.product_price}
                <Text>₹</Text>
              </Text>
            </View>
          </ImageBackground>
          <Card.Content>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Title>{item.product_name}</Title>
                <Paragraph style={{ fontFamily: "Roboto", fontSize: 12 }}>
                  Lorem Farms
                </Paragraph>
              </View>
              {/* <TouchableOpacity onPress={()=>{
            //   removeProduct(a)
             }}>
             <View style={{width:50,height:20,backgroundColor:"red",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"white"}}>Remove</Text>
             </View>
             </TouchableOpacity> */}

              {/* <View style={{width:66,height:25,backgroundColor:"white",borderRadius:4,
             borderColor:"#006C48",alignItems:'center',justifyContent:"center",marginTop:25}}> */}
              <View>
                {showAddTip && (
                  <View
                    style={{
                      backgroundColor: "lightblue",
                      width: 35,
                      height: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        //   addtocart(a)
                        setAddTip(false);
                        setCounterTip(true);
                      dispatch(Actions.addToCart(
                        item
                      ))
                      }}
                    >
                      <Text style={{ color: "white" }}>ADD</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {showCounterTip && (
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                        //   if (Counter > 1) {
                        //     setCounter(Counter - 1);
                        //     dispatch(Actions.removeFromCart(item))
                        //   } else {
                            setCounterTip(false);
                            setAddTip(true);
                            
                            dispatch(Actions.removeFromCart(item))
                        //   }
                        }}
                      >
                        <Text
                          style={{
                            color: "green",
                            paddingLeft: 10,
                            fontWeight: "bold",
                          }}
                        >
                          Remove
                        </Text>
                      </TouchableOpacity>
                      <Text style={{ color: "green", paddingLeft: 10 }}>
                        {Counter}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                            
                                setCounter(Counter + 1);
                          dispatch(Actions.addToCart(item))
                        }

                            }
                          
                      >
                        <Text style={{ color: "green", paddingLeft: 10 }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            </View>
            {/* </View> */}
          </Card.Content>
        </Card>
        <View style={{padding:10}}></View>
      </View>
    
     
    </>
  );
};

// const mapDispatchToProps = (dispatch, state) => {
//   return {
//     addItemToCart: (product) => {
//       dispatch(Actions.addToCart({ Quantity: state.Counter, product }));
//     },
//   };
// };

export default ProductList
