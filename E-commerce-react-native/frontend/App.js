import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import UserServicese from './services/UserServicese';

export default function App() {
  // "http://192.168.1.2:4000/test"
  useEffect(() => {
     UserServicese.getUser({pet:"Dog", color:"white"}).then((res) =>{
      console.log(res.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Nije lose</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
