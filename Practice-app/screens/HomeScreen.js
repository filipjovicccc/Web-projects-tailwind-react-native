import { useContext } from "react";
import TodoInput from "../components/TodoInput";
import TodoItems from "../components/TodoItems";
import { View, Text, SafeAreaView, StyleSheet, Pressable, } from "react-native";
import { StatusBar } from "expo-status-bar";
import {useNavigation} from "@react-navigation/native"
import { TodoContext } from "../App";

  function HomeScreen() {
 
   const {todos, setTodos} = useContext(TodoContext)

    const navigation = useNavigation()

  
    const todosHandler = (enteredText) => {
  
      setTodos((todos) => [
        ...todos,
        {text: enteredText, id:Math.random().toString()}
      ])
  
    
    }
  
    const deleteHandler = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
  
    }
  
   
    return (
  
      <SafeAreaView style={{flex:1, backgroundColor:"white", alignItems:"center"}}>
        <View style={styles.container}>
          <StatusBar style='auto'/>
          <Text>Hello from todo app</Text>
          <Pressable onPress={() => navigation.navigate("Trash")}><Text>Trash</Text></Pressable>
          <TodoInput onAdd={todosHandler}/>
          <TodoItems deleteTodo={deleteHandler} todos={todos}/>
        
        </View>
        </SafeAreaView>
      );
     
  }

  export default HomeScreen
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
   
    input: {
      color: 'black',
      width: 146,
      marginTop: 20,
      borderWidth: 1,
      borderColor: 'black',
    },
  
  
     
  });