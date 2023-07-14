// DetailScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-native-paper";
import { add } from ".././courses";
import { useSelector, useDispatch } from "react-redux";
const AddCourseScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const handleBackPress = () => {
    // Implement the logic to navigate back
    navigation.goBack();
  };

  const arr = [];

  const handleAddCourse = () => {
    dispatch(add({ id: 1, name: name }));
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={handleBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>Add Course Screen</Text>
        </View>
        <Text>Course Screen</Text>
        <View>
          <Text>Course Name :</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: "black" }}
            value={name}
            onChangeText={(e) => {
              setName(e);
            }}
          />

          <Button onPress={handleAddCourse}> Safe</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  backIcon: {
    fontSize: 18,
    marginRight: 8,
  },
};

export default AddCourseScreen;
