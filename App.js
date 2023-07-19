import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/login";
import { Surface } from "@react-native-material/core";
import RegisterModel from "./component/RegisterModel";
// import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Menu from "./pages/Menu";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  const nav = createNativeStackNavigator()
  const [isAuthorized, setIsAuthorized] = useState();

  const authfun = (value) => {
    setIsAuthorized(value);
    console.log(value)
  };
  useEffect(()=>{},[isAuthorized])

  return (
    <>
      <RootNavigator/>
    </>
  );
}

const styles = StyleSheet.create({});
