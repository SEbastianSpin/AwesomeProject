
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { useState } from 'react';
function  GoalItem(props) {
    
    return(
    <Pressable
     android_ripple={{color:'#dddddd'}}
     onPress={props.onDeleteItem.bind(this, props.id)}>
        <View  style={styles.GoalsBox}>
         <Text  style={styles.GoalItem}>
          {props.text}
        </Text>
    </View>
    </Pressable>
    
    )
};

export default GoalItem;

const styles =StyleSheet.create({

    GoalBox: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flex: 2
       },
       GoalItem:{
         borderBottomWidth:2,
         borderColor:'black'
       }
       ,
       GoalsBox: {
        flexDirection:"column",
        justifyContent:'space-between',
        flex: 7
       },

});