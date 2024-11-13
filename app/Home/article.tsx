import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import BottomTabBar from './Tabbar';
import { useRouter } from 'expo-router';

const topImg = require("../../assets/images/img.png");

const Article = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback('');
  };
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Family Cohesion</Text>
      <Image source={topImg} style={styles.profileImage} />
      <Text style={styles.articleText}>
          Family cohesion refers to the strength of the bonds and relationships within a family. It plays a key role in shaping the emotional well-being and the quality of relationships between family members. A cohesive family is one that communicates openly, supports each other through challenges, and celebrates successes together. 
          
          {'\n\n'}
          <Text style={styles.strongText}>
            Research shows that strong family cohesion is linked to better mental health, higher resilience, and overall happiness.
          </Text>
          {'\n\n'}
          Family cohesion is built through spending quality time together, mutual respect, shared values, and creating traditions that strengthen familial ties. In today's fast-paced world, it is essential to nurture these bonds to ensure the well-being of each member. 

          {'\n\n'}
          A cohesive family supports its members in both good and bad times. It provides a safe space where each person feels valued and accepted, regardless of their age or status. The practice of spending quality time together is vital. This can include activities such as family dinners, outdoor activities, holidays, or even simple family conversations that reinforce the family unit. Regular interaction helps build trust and reduces the likelihood of misunderstandings. 

          {'\n\n'}
          Another important aspect of family cohesion is conflict resolution. No family is without its disagreements, but how a family handles conflicts is essential in maintaining strong bonds. Families with good cohesion are able to address and resolve conflicts in a healthy, respectful manner. This involves open communication, listening to each other's perspectives, and finding solutions together, rather than letting issues fester.

          {'\n\n'}
          <Text style={styles.strongText}>
            Strong family cohesion is also linked to improved academic and career success, as children and adolescents tend to perform better when they come from cohesive families that provide emotional support.
          </Text>

          {'\n\n'}
          Furthermore, family cohesion influences emotional and psychological resilience. Members of cohesive families are better equipped to cope with stress and setbacks. They are more likely to lean on each other for support, reducing feelings of isolation or anxiety during challenging times. This resilience is built on a foundation of trust and mutual understanding, which fosters a sense of security.

          {'\n\n'}
          In the modern world, technology and busy lifestyles often pose challenges to family cohesion. However, families that prioritize face-to-face interaction and stay connected even when physically apart can overcome these challenges. Technology should be seen as a tool to support family connections, rather than a barrier. Regular family video calls, text messages, or even shared digital calendars can help maintain cohesion even when schedules are hectic.

          {'\n\n'}
          In conclusion, fostering family cohesion is essential for the well-being of every individual within the family unit. By focusing on communication, quality time, conflict resolution, and emotional support, families can build strong, lasting bonds that will carry them through the ups and downs of life. 
        </Text>

      <Text style={styles.feedbackTitle}>Leave your Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback..."
        value={feedback}
        onChangeText={setFeedback}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, !feedback && styles.buttonDisabled]}
          onPress={handleFeedbackSubmit}
          disabled={!feedback}
        >
          <Text style={styles.buttonText}>Submit Feedback</Text>
        </TouchableOpacity>
        <BottomTabBar navigation={router} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  articleText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  strongText: {
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 350,
    height: 350,
    borderRadius: 15,
    marginRight: 10,
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 20,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#652EBC',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom:80,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#652EBC',
  },
});

export default Article;
