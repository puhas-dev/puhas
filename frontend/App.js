import 'react-native-gesture-handler';
import React from 'react';
import SignInScreen from './screens/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';
import ProductScreen from './screens/ProductScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;