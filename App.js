import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/goalItem";
import GoalInput from './components/goalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [inputModal, setInputModal] = useState(false);

  const addGoalHandler = (textInput) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { key: Math.random().toString(), value: textInput },
    ]);
    setInputModal(false);
  };
  
  const deleteHandler=(id)=> {
    setCourseGoals(
      courseGoals=> {
        return courseGoals.filter(g=> g.key!==id);
      }
    );
  }

  const closeModal=()=> {
    setInputModal(false);
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={()=>setInputModal(true)} />
      <GoalInput visible={inputModal} onAddGoal={addGoalHandler} closeModal={closeModal} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => 
        <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={deleteHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
