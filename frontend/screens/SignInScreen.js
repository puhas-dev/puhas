import "react-native-gesture-handler";
import React, { useState, Component, useContext, useEffect } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";

import STYLES from "../styles/index";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/Fontisto";

import { ScrollView } from "react-native-gesture-handler";
import Tooltip from "./ToolTip";
// import AuthGlobal from "../../Context/store/AuthGlobal";
// import { loginUser } from "../../Context/actions/Auth.actions";
import AuthGlobal from "../Context/store/AuthGlobal";
import { loginUser } from "../Context/actions/Auth.actions";

const SignInScreen = ({ navigation }) => {
  const COLORS = {
    dark: "#000",
    light: "#a5a5a5",
    white: "#fff",
    primary: "#28388f",
    secondary: "#64beff",
    pink: "#ff2d5f",
  };
  const [showToolTip, setShowToolTip] = useState(false);
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      navigation.navigate("ProductScreen");
    }

    return () => {};

  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };
    if (email === "" || password === "") {
      setError("Please fill in your credentials");
    } else {
      console.warn(user)
      loginUser(user, context.dispatch);
      
    }
  };

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 31, flex: 1, backgroundColor: "white " }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <LinearGradient 
        
        colors={['green', 'white' ]}
        style={{alignItems: 'center',justifyContent: 'center',borderRadius: 5,height: 200,width: 350,}} >
         */}

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
            Welcome to
          </Text>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "700",
              color: " #001F24",
              marginTop: 4,
            }}
          >
            PuhasFarms!
          </Text>
        </View>

        <View>
          {showToolTip && (
            <Tooltip
              tooltipMessage={"Enter credentials"}
              imageContainer={{
                marginLeft: 125,
                width: 156,
                height: 42,
              }}
              imageStyles={{
                marginLeft: 190,
                marginTop: -9,
                width: 18,
                height: 18,
              }}
              imagePath={require("../assets/bottom-triangle.png")}
              imagePath1={require("../assets/one.png")}
            />
          )}

          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color="black"
              size={20}
              style={{ paddingRight: 20, paddingTop: 4 }}
            />
            <TextInput
              onChangeText={(a) => {
                setEmail(a);
              }}
              placeholder="Username or Email"
              style={STYLES.input}
            />
          </View>
          <View style={{ padding: 10 }}></View>

          <View style={STYLES.inputContainer}>
            <Image
              source={require("../assets/Vector.png")}
              style={{ width: 18, height: 22, marginTop: 3 }}
            ></Image>
            <TextInput
              placeholder="Password"
              style={STYLES.input1}
              secureTextEntry
              onChangeText={(a) => {
                setPassword(a);
              }}
            />
            <Image
              source={require("../assets/eye.png")}
              style={{ width: 22, height: 15, marginTop: 5, marginRight: 6 }}
            ></Image>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {showToolTip && (
              <Tooltip
                tooltipMessage={"Click here"}
                imageContainer={{
                  width: 112,
                  height: 42,
                  marginTop: 23,
                  marginLeft: -110,
                }}
                imageStyles={{
                  width: 17.3,
                  height: 17,
                  marginLeft: -4,
                  marginTop: -27,
                }}
                imagePath={require("../assets/sidee_triangle.png")}
                imagePath1={require("../assets/two.png")}
              />
            )}

            <View style={{ padding: 1 }}></View>
            <TouchableOpacity onPress={handleSubmit}>
              <View style={STYLES.btnPrimary}>
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <Text>OR</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <Icon1
            name="google"
            color="#006C48"
            size={20}
            style={{ paddingRight: 20, paddingTop: 4 }}
          />
          <TouchableOpacity>
            <Text style={{ color: "#006C48", fontWeight: "bold" }}>
              Log In with Google
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 17,
          }}
        >
          <Text style={{ color: "#001F24", fontWeight: "bold" }}>
            Don`t have an account Yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#006C48", fontWeight: "bold" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        {showToolTip && (
          <Tooltip
            tooltipMessage={"Click here to make an account"}
            imageContainer={{
              width: 224,
              height: 32,
              marginTop: 2,
              marginLeft: 68,
            }}
            imageStyles={{
              width: 17.3,
              height: 17,
              marginLeft: 220,
              marginTop: -40,
            }}
            imagePath={require("../assets/Top_triangle.png")}
            imagePath1={require("../assets/three.png")}
          />
        )}
        <View style={{ padding: 25 }}></View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/login_grocery_bag.png")}
            style={{ width: 251, height: 251 }}
          ></Image>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              left: 120,
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

export default SignInScreen;
