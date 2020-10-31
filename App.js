import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book
  })
);
function Login(params) {
  return(<View style={styles.container}>
    <Text>Login</Text>
    <StatusBar style="auto" />
  </View>)
}
function List(params) {
  return(<View style={styles.container}>
    <Text>List</Text>
    <StatusBar style="auto" />
  </View>)
}
function Book(params) {
  return(<View style={styles.container}>
    <Text>Book</Text>
    <StatusBar style="auto" />
  </View>)
}


export default function App() {
  return (
    
    <Routes></Routes>
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
