import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import {TouchableWithoutFeedback,TouchableOpacity} from 'react-native-gesture-handler'
import { Card, Title, Paragraph, BottomNavigation } from "react-native-paper";
import ProductList from "./productList";
import { Dropdown } from 'react-native-element-dropdown';

import Icon3 from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import { connect, useSelector } from "react-redux";
import ProductDropDown from "./ProductDropDown";

// let Cart1=[]
// let Cost1=
const data = [
  { label: 'Onions', value: '1' },
  { label: 'Tomatos', value: '2' },
  { label: 'Green Chilli', value: '3' },
  { label: 'mirchi', value: '4' },
  { label: 'masala', value: '5' },
  
];

let showBillTip = false;
let Total_Cost = 0;
let Quantity = {};

const image = {
  uri: "https://docs.expo.dev/static/images/tutorial/splash.png",
};
const ProduceScreen = ({ route, navigation, props }) => {
  const [isLoading, setLoading] = useState(true);
  const [categoryArray, setcategoryArray] = useState([]);
  const [productArray, setproductArray] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [showCounterTip, setCounterTip] = useState(false);
  const [showAddTip, setAddTip] = useState(true);
  const [Counter, setCounter] = useState(0);
  const [Cost, setCost] = useState(0);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(true);


  // const [showBillTip, setBillTip] = useState(false);

  const citem = useSelector((state) => state);
  console.log(citem.cartItems.length);
  

  let price = 0;
  citem.cartItems.map((a) => {
    price = price + a.product_price;
  });
  Total_Cost = price;
  console.log(Total_Cost);
  // setCost(price)
  // console.log(Cost)

  const farm_id = route.params;
  console.log(farm_id);
  let API = "http://192.168.0.108:3000/api/v1/category/" + farm_id.farm_id;
  console.log(API);

  useEffect(() => {
    console.log("hi");
    fetch(API, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setcategoryArray(jsonData);
        console.log(categoryArray);
        setLoading(false);
        let id=""
        categoryArray.map((a)=>{
          if(a.name==="Essentials"){
             id=a.id
          }

        })
        console.log(id)
        let Category_API =
      "http://192.168.0.108:3000/api/v1/product/" + id;
    fetch(Category_API, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setproductArray(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });

      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const GetCategoryProducts = (item) => {
    console.warn("hello", item);
    setValue(item.value);
  setIsFocus(false);
    let Category_API =
      "http://192.168.0.108:3000/api/v1/product/" + item.value;
    fetch(Category_API, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setproductArray(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
const getProductArray=(item)=>{
  setValue(item.value);
  setIsFocus(false);
}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DFD5EC", paddingTop: 40 }}>
      <ScrollView>
     
        <View style={{  height: 92,paddingTop:10, marginLeft: 16 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductScreen")}
          >
            <View style={{ display: "flex", flexDirection: "row",alignItems:"center" }}>
              <Icon3
                name="arrowleft"
                color="#006C48"
                size={20}
                style={{ paddingRight: 20, paddingTop: 4 }}
              />
              <Text>Back to Home</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 28, paddingTop: 10 }}>
              Produce
            </Text>
          </View>
        </View>
<View style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}}>
<View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'green' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.Cstyle}
       
        data={categoryArray.map((a)=>({label:a.name,value:a.id})
          
        )}
        
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={isFocus ? 'Select Category' :value}
        searchPlaceholder="Search..."
        value={value}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        onChange={item => {
         
          GetCategoryProducts(item)
        }}
      
      />
    </View>
</View>
        {/* <View style={{ display: "flex", flexDirection: "row", marginTop:-10,}}>
          <View
            style={{
              width: 98,
              height: 604,
              marginLeft: 24,
              backgroundColor: "#DFD5EC",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              position:"absolute",
              top:0
             
              
            }}
          >
            {categoryArray != null &&
              categoryArray.map((a,index) => {
                return (
                  <>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        GetCategoryProducts(a._id);
                      }}
                    >
                      <View key={index}
                        style={{
                          width: 97,
                          height: 114,
                          backgroundColor: "white",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 24,
                          
                        }}
                      >
                        <ImageBackground
                          source={{
                            uri: "https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                          }}
                          style={{ width: 74, height: 74, borderRadius: 12 }}
                        ></ImageBackground>
                        <Text>{a.name}</Text>
                      </View>
                      
                    </TouchableWithoutFeedback>
                  </>
                );
              })}
          </View>
          <View style={{ padding: 10 }}></View>

        
        </View>
        <View>
          
        </View> */}
        
       
       <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
              marginTop:10
              

            }}
          >
            
            {productArray != null &&
              productArray.map((a,index) => {
                return <ProductList key={index} item={a} />;
              })}
          </View>

       
        
       
     
       
         

        {/* {citem.cartItems.length != 0 && (
          <View
            style={{
              backgroundColor: "white",
              width: 340,
              height: 60,
              borderRadius: 12,
              position: "relative",
              bottom: 0,
              left: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 10 }}>
                <Text>Farm LoremIpsum</Text>
                <Text>Total: ₹{Total_Cost}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CheckoutScreen", {
                    CartItems: citem.cartItems,
                    Cost: Total_Cost,
                    
                  })
                }
              >
                <View
                  style={{
                    marginLeft: 100,
                    width: 110,
                    height: 40,
                    borderRadius: 100,
                    backgroundColor: "#006C48",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ color: "white" }}>View Cart</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )} */}

        {/* <View
          style={{
            backgroundColor: "#F6FEFF",
            width: 412,
            height: 70,
            position: "absolute",
            bottom: 0,
          }}
        >
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
      </ScrollView>
      {citem.cartItems.length != 0 && (
          <View
            style={{
              backgroundColor: "white",
              width: 340,
              height: 60,
              borderRadius: 12,
              position: "relative",
              bottom: 20,
              left: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 10 }}>
                <Text>Farm LoremIpsum</Text>
                <Text>Total: ₹{Total_Cost}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CheckoutScreen", {
                    CartItems: citem.cartItems,
                    Cost: Total_Cost,
                    
                  })
                }
              >
                <View
                  style={{
                    marginLeft: 100,
                    width: 110,
                    height: 40,
                    borderRadius: 100,
                    backgroundColor: "#006C48",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ color: "white" }}>View Cart</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
    </SafeAreaView>
  );
};
// const mapStateToProps=(state)=>{

//   return {
//     CartItems:state.CartItems

//   }

// }

export default ProduceScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    width:271,
    height:56,
    borderRadius:8
    
  },
  dropdown: {
    height: 56,
    backgroundColor:'wheat',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius:8,
    paddingHorizontal:5,
    
    
  },
  Cstyle:{
    marginTop:-39,
    backgroundColor:'wheat',
    borderRadius:8

  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'wheat',
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