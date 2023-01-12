import { StyleSheet, Text, View , Share , TouchableOpacity} from 'react-native'
import React from 'react';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';



  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  




const Details = ({ navigation , route }) => {
  const detailss = route.params.id;
  return (
    <View>
      <Text style ={styles.para}>{ detailss }</Text>
      <TouchableOpacity
      style={{padding: 8 , width: "90%" , alignItems:"center" ,justifyContent: "center",}}
      onPress={() => onShare()  }
      
      >
        <Text style={{ fontSize: 20,
                padding: 10,
                backgroundColor: `#243c5a`,
                marginBottom:5,
                }}>SHARE IT</Text>
          
      </TouchableOpacity>
    </View>
  )
}

export default Details;

const styles = StyleSheet.create({

  para:{
    
    fontSize:15,
  }
})