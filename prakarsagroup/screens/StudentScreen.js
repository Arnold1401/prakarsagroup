// DetailScreen.js
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { increment, decrement, add } from ".././slice";
import { useSelector, useDispatch } from "react-redux";

const StudentScreen = ({ navigation }) => {
  const { student } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const handleBackPress = () => {
    // Implement the logic to navigate back
    navigation.goBack();
  };
  const handlePlusPress = () => {
    // Implement the logic to navigate back
    navigation.navigate("AddStudent");
  };

  const handleEditStudent = (test) => {
    navigation.navigate("EditStudent", test);
    console.log(test);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text>{item.name}</Text>

        <TouchableOpacity
          onPress={(e) => {
            handleEditStudent(item);
          }}
        >
          <FontAwesomeIcon icon={faPencilAlt} size={24} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={handleBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>Student Screen</Text>
          <TouchableOpacity onPress={handlePlusPress}>
            <FontAwesomeIcon icon={faPlus} style={styles.backIcon} />
          </TouchableOpacity>
        </View>
        <Text>Student Screen</Text>
        <FlatList
          data={student}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  card: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export default StudentScreen;
