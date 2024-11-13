// screens/Home.js
import { useRouter } from "expo-router";
import React from "react";
import { Text, View, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomTabBar from "./Tabbar"; 

const topImg = require("../../assets/images/user.png");
const fam = require("../../assets/images/fam.png");
const diet = require("../../assets/images/diet.jpg");
const child = require("../../assets/images/child.jpg");

const articles = [
  {
    id: 1,
    title: "Family Cohesion",
    description: "This is a detailed description about Family Cohesion. It covers various aspects and provides valuable insights.",
    image: fam,
    stars: "★★★★☆",
    reviewNumber: "(345 reviews)",
  },
  {
    id: 2,
    title: "Healthy Eating",
    description: "This article explores the importance of healthy eating and provides tips on how to maintain a balanced diet.",
    image: diet,
    stars: "★★★★★",
    reviewNumber: "(123 reviews)",
  },
  {
    id: 3,
    title: "Child Protection",
    description: "This article explores child protection and how it is done.",
    image: child,
    stars: "★★★★★",
    reviewNumber: "(58 reviews)",
  },
];

const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image source={topImg} style={styles.profileImage} />
          <Text style={styles.profileName}>John Doe</Text>
        </View>

        <TextInput style={styles.searchInput} placeholder="Search..." />

        <Text style={styles.categoriesHeading}>Categories</Text>
        <ScrollView horizontal style={styles.categoriesContainer}>
          {["Nutrition", "Gender", "Child Protection", "Family"].map((category, index) => (
            <Text key={index} style={styles.category}>
              {category}
            </Text>
          ))}
        </ScrollView>

        <Text style={styles.latestArticlesHeading}>Latest Articles</Text>
        {articles.map((article) => (
          <TouchableOpacity key={article.id} style={styles.articleWrapper} onPress={() => router.navigate("./article")}>
            <View style={styles.articleContainer}>
              <Image source={article.image} style={styles.articleImage} />
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription}>{article.description}</Text>
              <View style={styles.reviewsHeadingContainer}>
                <Text style={styles.reviewsHeading}>Reviews</Text>
                <Icon name="heart" size={24} color="#ff0000" style={styles.heartIcon} />
              </View>
              <View style={styles.reviewContainer}>
                <Text style={styles.stars}>{article.stars}</Text>
                <Text style={styles.reviewNumber}>{article.reviewNumber}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomTabBar navigation={router} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchInput: {
    height: 40,
    fontSize: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoriesHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  category: {
    marginRight: 15,
    fontSize: 16,
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 5,
  },
  latestArticlesHeading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleWrapper: {
    marginBottom: 20,
  },
  articleContainer: {
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    padding: 16,
    borderRadius: 5,
  },
  articleImage: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviewsHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewsHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  heartIcon: {
    marginRight: 5,
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    fontSize: 18,
    color: "#ffd700",
  },
  reviewNumber: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Home;
