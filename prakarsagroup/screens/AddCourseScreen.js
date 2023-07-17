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
  const { student } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const handleBackPress = () => {
    // Implement the logic to navigate back
    navigation.goBack();
  };
  const [arr, setArr] = useState([]);
  const handleAddCourse = () => {
    dispatch(add({ id: 1, name: name, students: arr }));
    navigation.goBack();
  };

  const renderItem = ({ item }) => {
    const isMatch = arr.some((arrItem) => arrItem.id === item.id);

    return (
      <View style={[styles.card, isMatch && styles.cardnone]}>
        <Text>{item.name}</Text>
        <TouchableOpacity
          onPress={(e) => {
            let match = false;
            let idx = item.id;
            if (arr.length > 0) {
              for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === item.id) {
                  match = true;
                }
              }
            }
            if (!match) {
              const newArray = [...arr, item];
              setArr(newArray);
            } else {
              console.log("hapus murid");
              const updatedArr = arr.filter((el) => el.id !== idx);
              setArr(updatedArr);
            }
          }}
        >
          {isMatch ? <Text>-</Text> : <Text>+</Text>}
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
          <Text style={styles.appBarTitle}>Add Course Screen</Text>
        </View>
        <View>
          <Text>Course Name :</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: "black" }}
            value={name}
            onChangeText={(e) => {
              setName(e);
            }}
          />

          <FlatList
            data={student}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
  card: {
    borderWidth: 1,
    padding: 2,
  },
  cardnone: {
    borderWidth: 1,
    backgroundColor: "green",
    padding: 2,
  },
};

export default AddCourseScreen;
