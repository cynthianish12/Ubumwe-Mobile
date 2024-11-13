import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
const topImg = require('../assets/images/Logo.png');

export default function Index()
const router= useRouter()
{
  const navigation = useNavigation()
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image source={topImg} style={styles.image} />
      <Text style={styles.heading}>Welcome!</Text>
      <Text style={styles.paragraph}>
        Login with your data that you entered during registration
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("./Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate('SignUpPage')} 
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    height: 100,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
