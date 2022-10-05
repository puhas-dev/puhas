import "react-native-gesture-handler";
import React from "react";
import SignInScreen from "./screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./screens/SignUpScreen";
import ProductScreen from "./screens/ProductScreen";
import SignUpVerification from "./screens/SignUpVerification";
import DropDownScreen from "./screens/DropDownScreen";
import DropdownComponent from "./screens/DropDownScreen";
import DealsScreen from "./screens/DealsScreen";
import FavScreen from "./screens/FavScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderPass from "./screens/OrderPass";
import ProduceScreen from "./screens/ProduceScreen";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Auth from "./Context/store/Auth";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen
              name="SignUpVerification"
              component={SignUpVerification}
            />
            <Stack.Screen name="DropDownScreen" component={DropdownComponent} />
            <Stack.Screen name="DealsScreen" component={DealsScreen} />
            <Stack.Screen name="FavScreen" component={FavScreen} />
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
            <Stack.Screen name="OrderPass" component={OrderPass} />
            <Stack.Screen name="ProduceScreen" component={ProduceScreen} />
            <Stack.Screen name="ProductBackScreen" component={ProductScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Auth>
  );
};

export default App;
