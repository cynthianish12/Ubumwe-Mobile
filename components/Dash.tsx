
import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const localImage = require('../assets/images/Logo.png'); 

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image source={localImage} style={styles.image} />
      <ActivityIndicator size="large" color="#FAFAFA" style={styles.loader} />
      <Text style={styles.text}>~Bringing Bonds Closer.~</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#652EBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 89,
    height: 83,
  },
  loader: {
    marginTop: 20,
  },
  text: {
    color: '#FAFAFA',
    position: 'absolute',
    bottom: 50,
    fontSize: 18,
  },
});
