import React from 'react';
import { View ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Product from './ProductList';


function Home ()  {
   
   const navigation = useNavigation();
  
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        
      }}>
        <Button 
       
        title='Product List'
        onPress={()=>navigation.navigate('Product List')}
        
        />
      
    </View>
  )
}
export default Home; 
