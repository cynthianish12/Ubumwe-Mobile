import { useRouter } from "expo-router";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BottomTabBar = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate("/Home")}>
        <Icon name="home" size={30} color="#652EBC" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("Chat")}>
        <Icon name="comments" size={30} color="#652EBC" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("/Game")}>
        <Icon name="gamepad" size={30} color="#652EBC" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("./Profile")}>
        <Icon name="user" size={30} color="#652EBC" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',  
    bottom: 0,            
    left: 0,               
    right: 0,              
    flexDirection: 'row',  
    justifyContent: 'space-around', 
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
});

export default BottomTabBar;
