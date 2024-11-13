import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomTabBar from "../Home/Tabbar";
import { useRouter } from "expo-router";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Ubumwe. How can I help you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const newMessages = [
      ...messages,
      { text: userInput, sender: "user" },
    ];

    // Bot response
    newMessages.push({ text: "I'm a simple bot, I can help you with basic things!", sender: "bot" });

    setMessages(newMessages); 
    setUserInput(""); 
  };
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.sender === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                message.sender === "user" ? styles.userMessageText : styles.botMessageText,
              ]}
            >
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Icon name="paper-plane" size={20} color="white" />
        </TouchableOpacity>

      </View>
      <BottomTabBar navigation={router} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatContent: {
    paddingBottom: 20,
  },
  message: {
    marginBottom: 15,
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#652EBC",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f1f1",
  },
  messageText: {
    fontSize: 17,
  },
  userMessageText: {
    color: "#fff", 
  },
  botMessageText: {
    color: "#000", 
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 19,
    marginBottom:70,
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#652EBC",
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default Chatbot;
