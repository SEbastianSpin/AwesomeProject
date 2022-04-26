import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
const [enteredGoalText,setenteredGoalText]=useState("");

  function goalInputH(enteredText){
    setenteredGoalText(enteredText);
  }

  function addButtonH(){
    console.log(enteredGoalText);
  }
  return (
    <View style={styles.appcontainer}>
    <View style={styles.GoalBox}>
    <TextInput style={styles.Goalinput} placeholder="Whats your goal" onChange={goalInputH}/>
      <Button title="Add"  onPress={addButtonH} />
    </View>

    <View  style={styles.GoalsBox}>
      <Text>List of goals</Text>
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex:1,
    padding:10
  },

  GoalBox: {
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   flex: 2
  },
  GoalsBox: {
    flexDirection:'row',
    justifyContent:'space-between',
    flex: 7
   },

  Goalinput: {
    borderColor:'#DDDDDD',
    borderWidth:3,
    width: '75%'
   },

});
