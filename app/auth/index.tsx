import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
const topImg = require('../../assets/images/log.png');

export default function Index(){
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image source={topImg} style={styles.image} />
      <Text style={styles.heading}>Welcome!</Text>
      <Text style={styles.paragraph}>
        Login or Signup if you don't have an account
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/auth/Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate('./Login')} 
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 350,
    height: 250,
    marginBottom: 24,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    height: 100,
    marginLeft: 40,
  },
  button: {
    backgroundColor: '#652EBC',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
