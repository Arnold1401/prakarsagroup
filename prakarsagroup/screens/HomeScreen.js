// HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Student" onPress={() => navigation.navigate("Student")} />
      <Button title="Course" onPress={() => navigation.navigate("Course")} />
    </View>
  );
};

export default HomeScreen;
