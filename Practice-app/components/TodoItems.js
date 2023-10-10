import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const TodoItems = ({deleteTodo, todos}) => {
  return (
    <View style={styles.section}>
    <Text>Todos</Text>
     <View style={styles.todos}>
     <FlatList
       data={todos}
       renderItem={(itemData) => {
         return(
           <View style={styles.todoBox}>
             <Text>{itemData.item.text}</Text>
             <Pressable style={styles.deleteButton} onPress={() => deleteTodo(itemData.item.id)}>
               <Text >Delete</Text>
             </Pressable>

           </View>
         )
       }}
     />

  </View>
 </View>
  )
}

const styles = StyleSheet.create({

    todos: {
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        width: 230,
        height: 520,
      },
      section: {
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
      },
      todoBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
      },
   deleteButton: {
    padding: 10,
    color: "red",
    borderWidth: 1,
    borderColor: "black"
  
    },
    
})

export default TodoItems