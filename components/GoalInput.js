
import { StyleSheet, Button, View,TextInput} from 'react-native';

import { useState } from 'react';
import { Modal } from 'react-native';



  
function  Goalinput(props) {
    const [enteredGoalText,setenteredGoalText]=useState('');

    function goalInputH(enteredText){
        setenteredGoalText(enteredText);
      }

      function addButtonH(){
        props.onAddGoal(enteredGoalText);
        setenteredGoalText("");
      }

      function displayCloseHandler(){
        props.close();
      }

    return( 
    <Modal visible={props.show} animationType="fade">

    <View style={styles.GoalBox}>
    <TextInput style={styles.Goalinput}
     placeholder="Whats your goal"
     
      onChangeText={goalInputH}
        value={enteredGoalText}
    />
      <Button title="Add"  onPress={addButtonH} />
    </View>
    <Button color="#E5CB9F" title='cancel' onPress={displayCloseHandler}/>
    
    </Modal>
   
    
    );

};

export default Goalinput;

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
       },
       Goalinput: {
        borderColor:'#DDDDDD',
        borderWidth:3,
        width: '75%'
       }

});