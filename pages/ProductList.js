import * as React from 'react';
import { Button , View, Text ,FlatList , Platform , StyleSheet ,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Component } from 'react';


export default class Product extends Component {
    
    constructor(){
        super();
        this.state={
            data :[
                {
                    name:'Iphone',
                    details : 'These devices use Apples iOS mobile operating system The iPhone is one of the two largest smartphone platforms in the world alongside Android, and is a large part of the luxury market. The iPhone has generated large profits for Apple, making it one of the worlds most valuable publicly traded companies. ',
                },
                {
                    name: 'redmi',
                    details : 'Redmi is a subsidiary company owned by the Chinese electronics company Xiaomi. It was first announced in July 2013 as a budget smartphone line,[1] and became a separate sub-brand of Xiaomi in 2019 with entry-level and mid-range devices, while Xiaomi itself produces upper-range and flagship Xiaomi (formerly Mi) phones. Redmi phones use the Xiaomis MIUI user interface on top of Android.',
                },
                {
                    name:'samsung',
                    details : 'Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s; these areas would drive its subsequent growth. Following Lees death in 1987, Samsung was separated into five business groups – Samsung Group, Shinsegae Group, CJ Group and Hansol Group, and JoongAng Group.',
                },
                {
                    name:'realme',
                    details : 'Realme (stylized as realme) is a Chinese consumer electronics manufacturer based in Shenzhen, Guangdong. It was founded by Li Bingzhong (known as Sky Li) on May 4, 2018, who was former vice president of Oppo. Started originally as a sub-brand of Oppo, Realme eventually ventured as its own brand. Realme then became the fastest-growing 5G smartphone brand in Q3 2021 with an 831% growth rate.',
                },
                {
                    name:'oneplus',
                    details : 'OnePlus was founded by Pete Lau and Carl Pei on 16 December 2013 to develop a high-end flagship smartphone running CyanogenMod that would come to be known as the OnePlus One. OnePlus would continue to release phones throughout the 2010s and 2020s. In 2020, OnePlus released the OnePlus Nord, its first mid-range smartphone since the OnePlus X in 2015. Pei would oversee the design and marketing of OnePlus products until his departure from the company in October 2020, going on to found the consumer electronics manufacturer Nothing.',
                }
            ]

        };for (var i = this.state.data.length - 1; i > 0; i--) { 

   

            // Generate random number 
     
            var j = Math.floor(Math.random() * (i + 1));
     
                        
     
            var temp = this.state.data[i];
     
            this.state.data[i] = this.state.data[j];
     
            this.state.data[j] = temp;
     
        }
    }
    render(){
        return (
            <View>
            <FlatList
            data={this.state.data}
            renderItem={({item}) =>
            <TouchableOpacity 
            onPress={() =>
                this.props.navigation.navigate('Product Details',{
                    id: item.details,
                })
            }
        >
            <View>
            <Text style ={styles.textStyle}>{item.name}</Text>
            </View>
           
            </TouchableOpacity>
            }
            />
        </View>
 
 
           )   
        };


    };

        const styles = StyleSheet.create({
            textStyle:{
                fontSize: 15,
                padding: 6,
                backgroundColor: `#243c5a`,
                marginBottom:19,
                
                

            },
            textStylehead:{
                fontSize: 30,
                padding: 20,
                marginTop:12,
            }
            
        });