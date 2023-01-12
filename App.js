import React from 'react';
import { Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Homepage';
import Product from './pages/ProductList';
import Details from './pages/ProductDetails';


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Product List" component={Product}/>
        <Stack.Screen name="Product Details" component={Details}/>
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}