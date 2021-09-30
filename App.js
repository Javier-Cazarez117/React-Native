import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

const showAlert = () =>
  Alert.alert(
    "Alerta",
    "Mi mensaje de alerta",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
    ],
  );

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://th.bing.com/th/id/R.5f329ff0b4892b9326d489cd415530f7?rik=8XLfWNebDBu89A&pid=ImgRaw&r=0',
        }}
      />
      <Button title="Compartir" onPress={showAlert} />
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
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 20
  },
  logo: {
    width: 66,
    height: 58,
  },
});
