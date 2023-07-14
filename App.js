import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/login';
import { Surface } from "@react-native-material/core";
import RegisterModel from './component/RegisterModel';
// import { PaperProvider } from 'react-native-paper';
import { useState, useEffect } from 'react';

export default function App() {
  

  return (
    <View>
         <Login/>
    </View>
   );
}

const styles = StyleSheet.create({
 
});
