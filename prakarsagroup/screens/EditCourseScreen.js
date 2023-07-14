// DetailScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

import { edit } from "../courses";
import { useSelector, useDispatch } from "react-redux";
const EditCourseScreen = ({ navigation, route }) => {
  const { student } = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const handleBackPress = () => {
    // Implement the logic to navigate back
    navigation.goBack();
  };
  const handleEditStudent = () => {
    // Implement the logic to navigate back
    console.log(name);
    dispatch(edit({ id: id, name: name }));
    navigation.goBack();
  };

  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [showPicker, setShowPicker] = useState(true);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  useEffect(() => {
    const data = route.params;
    setName(data.name);
    setId(data.id);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View style={styles.appBar}>
          <TouchableOpacity onPress={handleBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.appBarTitle}>Edit Course Screen</Text>
        </View>
        <Text>Student Screen</Text>
        <View>
          <Text>Student Name :</Text>
          <TextInput
            value={name}
            style={{ borderWidth: 1, borderColor: "black" }}
            onChangeText={(e) => {
              setName(e);
            }}
          />

          <Button onPress={handleEditStudent} title="Safe" />
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

export default EditCourseScreen;
