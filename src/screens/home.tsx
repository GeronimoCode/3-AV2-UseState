import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TextInput,  } from "react-native";

export function home(){
    return (
        <View style={{  flex: 1, backgroundColor: 'gray'}}>
            <Text style={styles.doctor}> Doctor Day</Text>
        </View>
    );


}

const styles = StyleSheet.create({
    doctor: {
      fontSize: 24,
      textAlign: 'center', 
      marginTop: 24,
      fontWeight: 'bold',
      color: '#ffff'
    },
})
