import { View, Text, FlatList } from 'react-native'
import { useContext } from 'react'
import React from 'react'
import { TodoContext } from '../App'


const TrashScreen = () => {
    const {todos, setTodos} = useContext(TodoContext)
  return (
    <View>
      <FlatList
       data={todos}
       renderItem={(itemData) => {
         return(
           <View >
             <Text>{itemData.item.text}</Text>
           </View>
         )
       }}
     />
    </View>
  )
}

export default TrashScreen