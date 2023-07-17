import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const CourseScreen = ({ navigation }) => {
  const { course } = useSelector((state) => state.course);
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEditCourse = (test) => {
    navigation.navigate("EditCourse", test);
    console.log(test);
  };

  const handlePlusPress = () => {
    //go to add page
    navigation.navigate("AddCourse");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text>{item.name}</Text>

        <TouchableOpacity
          onPress={(e) => {
            handleEditCourse(item);
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
          <Text style={styles.appBarTitle}>Course Screen</Text>
          <TouchableOpacity onPress={handlePlusPress}>
            <FontAwesomeIcon icon={faPlus} style={styles.backIcon} />
          </TouchableOpacity>
        </View>
        <Text>Course Screen</Text>
        <FlatList
          data={course}
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

export default CourseScreen;
