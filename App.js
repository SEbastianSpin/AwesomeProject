import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {

const [enteredGoalText,setenteredGoalText]=useState('');
const [courseGoals,setcourseGoals]=useState([]);

  function goalInputH(enteredText){
    setenteredGoalText(enteredText);
  }

  function addButtonH(){
    setcourseGoals(prevState=> [...prevState,enteredGoalText,]);
  }

  

  return (
    <View style={styles.appcontainer}>
    <View style={styles.GoalBox}>
    <TextInput style={styles.Goalinput} placeholder="Whats your goal" onChangeText={goalInputH}/>
      <Button title="Add"  onPress={addButtonH} />

    </View>

    <View  style={styles.GoalsBox}>
     
      {courseGoals.map( (goal)=>
        <Text key={goal}>
          {goal}
        </Text>
      )}
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
