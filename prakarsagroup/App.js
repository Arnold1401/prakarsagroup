import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";

import CourseScreen from "./screens/CourseScreen";
import StudentScreen from "./screens/StudentScreen";
import AddStudentScreen from "./screens/AddStudentScreen";
import EditStudentScreen from "./screens/EditStudentScreen";
import AddCourseScreen from "./screens/AddCourseScreen";
import { Provider } from "react-redux";
import EditCourseScreen from "./screens/EditCourseScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Student"
            component={StudentStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Course"
            component={CourseStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const StudentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Student"
        component={StudentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddStudent"
        component={AddStudentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditStudent"
        component={EditStudentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CourseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Course"
        component={CourseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCourse"
        component={AddCourseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditCourse"
        component={EditCourseScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default App;
