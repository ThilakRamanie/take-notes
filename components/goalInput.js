import React from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = (props) => {
    const [textInput,setTextInput] = React.useState('');
    const goalInputHandler=(text) => {
        setTextInput(text);
      }
      const addGoalHandler=(text)=> {
        props.onAddGoal(text);
        setTextInput('');
      }
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput placeholder="Goals" 
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={textInput} />
                <View style={styles.btnWrap}>
                    <View style={styles.btn} >
                        <Button title="ADD" onPress={()=>addGoalHandler(textInput)} />
                    </View>
                    <View style={styles.btn} >
                        <Button onPress={props.closeModal} title="Cancel" color="red" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center',
        flex: 1,
      },
      textInput : {
        width:'80%',
        borderBottomColor:'black',
        borderBottomWidth:1,
        padding:10,
        marginBottom:10
      },
      btnWrap : {
          flexDirection:'row',
          justifyContent:'space-between',
          width:'50%'
      },
      btn : {
          width:'40%'
      }
});

export default GoalInput;