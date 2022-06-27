import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import CarList from './src/components/CarsList';
import Header from './src/components/Header';



export default function App() {
  return (
    <View style={styles.container}>   
      <Header />   
      <CarList />  
      <StatusBar style="auto" />    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
})