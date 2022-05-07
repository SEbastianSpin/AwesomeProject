
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import Goalinput from './components/GoalInput';
import { useState } from 'react';
import { Button } from 'react-native';

export default function App() {

  const [modaIsVisisble,setModaIsVisisble]=useState(false);
  const [courseGoals,setcourseGoals]=useState([]);
  
  
    function addButtonH(enteredGoalText){
      setcourseGoals(prevState=> [
        ...prevState,
        {text:enteredGoalText,id:Math.random().toString()}
        ,
      ]);
      setModaIsVisisble(false);
    }

    function deleteHandler(id){
      setcourseGoals(
        prevState=>{
          return prevState.filter((item)=>{ return item.id!=id });
        }
      );
    }


    function displayAddHandler(){
      setModaIsVisisble(true);
    }
    
    function displayCloseHandler(){
      setModaIsVisisble(false);
    }
  

  return (
    <View style={styles.appcontainer}>

    <Button color="#E5CB9F" title='Add' onPress={displayAddHandler}/>
    
    
    <Goalinput onAddGoal={addButtonH} show={modaIsVisisble} close={displayCloseHandler}  />
   
     <FlatList data={courseGoals} renderItem={
       (itemData)=>{
       return   <GoalItem
        text={itemData.item.text}
        onDeleteItem={deleteHandler}
        id={itemData.item.id}
        />;
      
       }
     }
       keyExtractor={(item,index)=>{
         return item.id;
       }}
     />
     
     
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex:1,
    padding:10
  },

  
  

  

});
