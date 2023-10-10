import React, {createContext, useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrashScreen from "./screens/TrashScreen";
import HomeScreen from "./screens/HomeScreen";


export  const TodoContext = createContext()

function App() {
  const Stack = createNativeStackNavigator();

  const [todos, setTodos] = useState([])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Trash" component={TrashScreen} />
      </Stack.Navigator>
    </NavigationContainer>


    </TodoContext.Provider>
  );
}

export default App;
