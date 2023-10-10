import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';

const TodoInput = (props) => {
  const [input, setInput] = useState("");

  const addTodos=()=>{
    props.onAdd(input)
    setInput("")
  }
    const inputHandler = (text) => {
      
        setInput(text)
      }
    
  return (
    <View>
       <TextInput style={styles.input} value={input} onChangeText={inputHandler} placeholder='enter your todo'/>
    <Pressable onPress={addTodos}>
     <Text style="button">Submit</Text>
   </Pressable>
    </View>
  )
}

export default TodoInput


const styles = StyleSheet.create({

    input: {
        color: 'black',
        width: 146,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
    }
})